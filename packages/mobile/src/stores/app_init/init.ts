import {flow,observable, action, makeObservable, computed } from 'mobx';
import { create, persist } from 'mobx-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { initBigInt } from '@src/utils/helper';
import { toGenerator } from '@owallet/common';
export class AppInit {
  @persist('object')
  @observable
  protected initApp: {
    status: boolean;
    date_updated: null | number;
    theme: 'dark' | 'light';
    visibleTabBar?: string;
  };
  @observable
  public static tKey: any;
  @observable
  protected notiData: {};

  constructor() {
    makeObservable(this);
    this.initApp = {
      visibleTabBar: null,
      status: true,
      date_updated: null,
      theme: 'light'
    };
    this.initTkey();
  }

  @computed
  get getInitApp() {
    return this.initApp;
  }

  @action
  updateInitApp() {
    this.initApp = { ...this.initApp, status: false };
  }

  @action
  updateDate(date) {
    this.initApp = { ...this.initApp, date_updated: date };
  }

  @action
  updateTheme(theme) {
    this.initApp = { ...this.initApp, theme };
  }
  @action
  updateVisibleTabBar(visibleTabBar) {
    this.initApp = { ...this.initApp, visibleTabBar };
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
    AppInit.tKey = new ThresholdKey({
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
}

const hydrate = create({
  storage: AsyncStorage, // or AsyncStorage in react-native.
  jsonify: true // if you use AsyncStorage, here shoud be true
});

export const appInit = new AppInit();

hydrate('appInit', appInit).then(() => console.log('appInit hydrated'));
