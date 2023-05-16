import { flow, makeObservable, observable } from 'mobx';
import * as Keychain from 'react-native-keychain';
import { KVStore, toGenerator } from '@owallet/common';
import { KeyRingStore } from '@owallet/stores';
import { initBigInt } from '@src/utils/helper';

export class KeychainStore {
  @observable
  protected _isBiometrySupported: boolean = false;
  @observable
  public static tKey: any;

  @observable
  protected _isBiometryOn: boolean = false;

  protected static defaultOptions: Keychain.Options = {
    authenticationPrompt: {
      title: 'Biometric Authentication'
    },
    accessible: Keychain.ACCESSIBLE.WHEN_UNLOCKED_THIS_DEVICE_ONLY,
    accessControl: Keychain.ACCESS_CONTROL.BIOMETRY_CURRENT_SET
  };

  constructor(
    protected readonly kvStore: KVStore,
    protected readonly keyRingStore: KeyRingStore
  ) {
    makeObservable(this);

    this.init();
  }

  get isBiometrySupported(): boolean {
    return this._isBiometrySupported;
  }

  get isBiometryOn(): boolean {
    return this._isBiometryOn;
  }

  @flow
  *tryUnlockWithBiometry() {
    if (!this.isBiometryOn) {
      throw new Error('Biometry is off');
    }

    const credentials = yield* toGenerator(
      Keychain.getGenericPassword(KeychainStore.defaultOptions)
    );
    if (credentials) {
      yield this.keyRingStore.unlock(credentials.password);
    } else {
      throw new Error('Failed to get credentials from keychain');
    }
  }

  @flow
  *turnOnBiometry(password: string) {
    const valid = yield* toGenerator(this.keyRingStore.checkPassword(password));
    if (valid) {
      const result = yield* toGenerator(
        Keychain.setGenericPassword(
          'owallet',
          password,
          KeychainStore.defaultOptions
        )
      );
      if (result) {
        this._isBiometryOn = true;
        yield this.save();
      }
    } else {
      throw new Error('Invalid password');
    }
  }

  @flow
  *turnOffBiometry() {
    if (this.isBiometryOn) {
      const credentials = yield* toGenerator(
        Keychain.getGenericPassword(KeychainStore.defaultOptions)
      );
      if (credentials) {
        if (
          yield* toGenerator(
            this.keyRingStore.checkPassword(credentials.password)
          )
        ) {
          const result = yield* toGenerator(
            Keychain.resetGenericPassword(KeychainStore.defaultOptions)
          );
          if (result) {
            this._isBiometryOn = false;
            yield this.save();
          }
        } else {
          throw new Error(
            'Failed to get valid password from keychain. This may be due to changes of biometry information'
          );
        }
      } else {
        throw new Error('Failed to get credentials from keychain');
      }
    }
  }

  @flow
  *turnOffBiometryWithPassword(password: string) {
    if (this.isBiometryOn) {
      if (yield* toGenerator(this.keyRingStore.checkPassword(password))) {
        const result = yield* toGenerator(
          Keychain.resetGenericPassword(KeychainStore.defaultOptions)
        );
        if (result) {
          this._isBiometryOn = false;
          yield this.save();
        }
      } else {
        throw new Error('Invalid password');
      }
    }
  }

  @flow
  *reset() {
    if (this.isBiometryOn) {
      const result = yield* toGenerator(
        Keychain.resetGenericPassword(KeychainStore.defaultOptions)
      );
      if (result) {
        this._isBiometryOn = false;
        yield this.save();
      }
    }
  }

  @flow
  protected *init() {
    // No need to await.
    this.restore();
    this.initTkey();
    const type = yield* toGenerator(
      Keychain.getSupportedBiometryType(KeychainStore.defaultOptions)
    );
    this._isBiometrySupported = type != null;
  }
  @flow
  protected *initTkey() {
    yield* toGenerator(initBigInt());
    let { default: ThresholdKey } = yield* toGenerator(
      import('@thresholdkey/default')
    );
    let { default: SecurityQuestionsModule } = yield* toGenerator(
      import('@thresholdkey/security-questions')
    );
    let { default: ReactNativeStorage } = yield* toGenerator(
      import('@thresholdkey/react-native-storage')
    );
    KeychainStore.tKey = new ThresholdKey({
      modules: {
        reactNativeStorage: new ReactNativeStorage(),
        securityQuestions: new SecurityQuestionsModule()
      },
      manualSync: false,
      customAuthArgs: {
        baseUrl: 'http://localhost/serviceworker',
        network: 'testnet'
      } as any
    });
  }

  @flow
  protected *restore() {
    const saved = yield* toGenerator(this.kvStore.get('isBiometryOn'));
    this._isBiometryOn = saved === true;
  }

  protected async save() {
    await this.kvStore.set('isBiometryOn', this.isBiometryOn);
  }
}
