import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { PageWithScrollView } from '@src/components/page';
import { useTheme } from '@src/themes/theme-provider';
import { HeaderWelcome, OrText } from './components';
import { OWButton } from '@src/components/button';
import { spacing } from '@src/themes';
import OWIcon from '@src/components/ow-icon/ow-icon';
import images from '@src/assets/images';
import { useStore } from '@src/stores';
import { useRegisterConfig } from '@owallet/hooks';
import { useSmartNavigation } from '@src/navigation.provider';
import { SCREENS } from '@src/common/constants';
import ThresholdKey from '@thresholdkey/default';
import SecurityQuestionsModule from '@thresholdkey/security-questions';
import ReactNativeStorage from '@thresholdkey/react-native-storage';
import * as WebBrowser from 'expo-web-browser';
import WebView from 'react-native-webview';
import BN from 'bn.js';
import { Dialog } from '@rneui/themed';
import { TextInput } from '@src/components/input';
type GenericObject = {
  [key: string]: string;
};

const CLIENT_ID =
  '349137538811-8t7s7584app6am5j09a2kglo8dg39eqn.apps.googleusercontent.com';

const tKey = new ThresholdKey({
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

const isAndroid = Platform.OS === 'android';
const html = require('@src/assets/interpolate.html');
const CreateANewWalletScreen = () => {
  const { colors } = useTheme();
  const smartNavigation = useSmartNavigation();
  const { keyRingStore, analyticsStore } = useStore();
  const [loginResponse, setLoginResponse] = useState<any>();
  const [privateKey, setPrivateKey] = useState<string>();
  const [interpolateResult, setInterpolateResult] = useState<{
    pubKey: string;
    privKey: string;
  }>();
  const [recoveryPassword, setRecoveryPassword] = useState<string>();
  const [recoveryVisible, setRecoveryVisible] = useState(false);
  const [securityPassword, setSecurityPassword] = useState<string>(); // need confirm password
  const [securityPasswordVisible, setSecurityPasswordVisible] = useState(false);
  const registerConfig = useRegisterConfig(keyRingStore, []);
  const handleCreateANewMnemonic = () => {
    analyticsStore.logEvent('Create account started', {
      registerType: 'seed'
    });
    smartNavigation.navigate(SCREENS.RegisterNewMnemonic, {
      registerConfig
    });
  };
  useEffect(() => {
    const init = async () => {
      // Initialization of Service Provider
      try {
        await (tKey.serviceProvider as any).init({
          skipSw: true,
          skipPrefetch: true
        });
      } catch (error) {
        console.error(error);
      }
    };
    init();
  }, []);

  useEffect(() => {
    if (interpolateResult) {
      if (interpolateResult.pubKey !== loginResponse.thresholdPublicKey) {
        return console.log(`Public key isn't same with contract`);
      }
      initialize(interpolateResult.privKey);
    }
  }, [interpolateResult]);

  const login = async () => {
    try {
      const nonce: string = Math.floor(Math.random() * 10000).toString();
      const state = encodeURIComponent(
        Buffer.from(
          JSON.stringify({
            instanceId: nonce,
            redirectToOpener: false
          })
        ).toString('base64')
      );

      const finalUrl = new URL('https://accounts.google.com/o/oauth2/v2/auth');
      finalUrl.searchParams.append('response_type', 'token id_token');
      finalUrl.searchParams.append('client_id', CLIENT_ID);
      finalUrl.searchParams.append('state', state);
      finalUrl.searchParams.append('scope', 'profile email openid');
      finalUrl.searchParams.append('nonce', nonce);
      finalUrl.searchParams.append('prompt', 'consent select_account');
      finalUrl.searchParams.append(
        'redirect_uri',
        'https://orai-oauth.web.app/google.html'
      );

      const result = await WebBrowser.openAuthSessionAsync(
        finalUrl.href,
        'app.owallet.oauth://'
      );
      if (result.type !== 'success') {
        throw new Error('Failed to get the oauth');
      }
      if (!result.url.startsWith('app.owallet.oauth://google#')) {
        throw new Error('Invalid redirection');
      }

      const redirectedUrl = new URL(result.url);
      let hash = redirectedUrl.hash;
      hash = hash.startsWith('#') ? hash.slice(1) : hash;
      const queryParams = {};
      for (const key of redirectedUrl.searchParams.keys()) {
        queryParams[key] = redirectedUrl.searchParams.get(key);
      }

      triggerLoginMobile(hash, queryParams);
    } catch (e) {
      console.log('🚀 ~ file: index.tsx:99 ~ test ~ e:', e);
    }
  };

  const triggerLoginMobile = async (
    hash: string,
    queryParameters: GenericObject
  ) => {
    if (!tKey) {
      return;
    }
    try {
      // Triggering Login using Service Provider ==> opens the popup
      const { shares, sharesIndexes, userInfo, thresholdPublicKey } = await (
        tKey.serviceProvider as any
      ).triggerLoginMobile({
        typeOfLogin: 'google',
        verifier: 'tkey-google',
        clientId: CLIENT_ID,
        hash,
        queryParameters
      });

      setLoginResponse({ shares, sharesIndexes, userInfo, thresholdPublicKey });
    } catch (error) {
      console.log(
        '🚀 ~ file: index.tsx:134 ~ triggerLoginMobile ~ error:',
        error
      );
    }
  };

  const getPostBoxKey = async (privKey: string) => {
    const privateKey = await (
      tKey.serviceProvider as any
    ).directWeb.torus.getPrivKey(new BN(privKey, 'hex'));
    (tKey.serviceProvider as any).setPostboxKey(privateKey.privKey);
  };

  const initialize = async (privKey: string) => {
    try {
      await getPostBoxKey(privKey);
      await tKey.initialize();
      try {
        await (
          tKey.modules.reactNativeStorage as any
        ).inputShareFromReactNativeStorage();
      } catch (error) {
        console.log('🚀 ~ file: index.tsx:154 ~ initialize ~ error:', error);
        return setRecoveryVisible(true);
      }
      await reconstructKey();
    } catch (error) {
      console.log('🚀 ~ file: index.tsx:157 ~ initialize ~ error:', error);
    }
  };

  const reconstructKey = async () => {
    const { requiredShares, shareDescriptions } = tKey.getKeyDetails();

    if (requiredShares <= 0) {
      const reconstructedKey = await tKey.reconstructKey();
      setPrivateKey(reconstructedKey?.privKey.toString('hex'));
      console.log(
        '🚀 ~ file: index.tsx:161 ~ initialize ~ reconstructedKey.privKey:',
        reconstructedKey?.privKey.toString('hex')
      );
      let isExistSecurityQuestions = false;
      Object.values(shareDescriptions).forEach((descriptions) => {
        descriptions.forEach((el) => {
          const description = JSON.parse(el);
          if (
            description.module ===
            (tKey.modules.securityQuestions as any).moduleName
          ) {
            isExistSecurityQuestions = true;
          }
        });
      });
      console.log(
        '🚀 ~ file: index.tsx:181 ~ reconstructKey ~ isExistSecurityQuestions:',
        isExistSecurityQuestions
      );
      if (!isExistSecurityQuestions) setSecurityPasswordVisible(true);
    }
  };

  const recoverShare = async () => {
    try {
      await (
        tKey.modules.securityQuestions as any
      ).inputShareFromSecurityQuestions(recoveryPassword); // 2/2 flow
      
      const { requiredShares } = tKey.getKeyDetails();
      if (requiredShares <= 0) {
        const reconstructedKey = await tKey.reconstructKey();
        setPrivateKey(reconstructedKey?.privKey.toString('hex'));
        console.log(
          '🚀 ~ file: index.tsx:191 ~ recoverShare ~ reconstructedKey?.privKey:',
          reconstructedKey?.privKey.toString('hex')
        );
      }
      const shareStore = await tKey.generateNewShare();
      await (tKey.modules.reactNativeStorage as any).storeDeviceShare(
        shareStore.newShareStores[shareStore.newShareIndex.toString('hex')]
      );
      setRecoveryVisible(false);
    } catch (error) {
      console.log('🚀 ~ file: index.tsx:193 ~ recoverShare ~ error:', error);
    }
  };

  const generateNewShareWithPassword = async () => {
    if (!tKey) {
      return;
    }

    try {
      await (
        tKey.modules.securityQuestions as any
      ).generateNewShareWithSecurityQuestions(
        securityPassword,
        'whats your password?'
      );
      console.log('generate successfully');
      setSecurityPasswordVisible(false);
    } catch (error) {
      console.log(
        '🚀 ~ file: index.tsx:216 ~ generateNewShareWithPassword ~ error:',
        error
      );
    }
  };
  return (
    <PageWithScrollView
      style={{
        marginHorizontal: 42
      }}
      backgroundColor={colors['plain-background']}
    >
      <HeaderWelcome title={'Create a new wallet'} />
      <OWButton
        onPress={handleCreateANewMnemonic}
        label="Create new mnemonic"
      />
      <OrText />
      <OWButton
        onPress={login}
        type="secondary"
        icon={<OWIcon type="images" source={images.google} size={24} />}
        label="Sign in with Google"
      />
      {loginResponse && (
        <View
          style={{
            display: 'none'
          }}
        >
          <WebView
            source={
              isAndroid
                ? { uri: 'file:///android_asset/interpolate.html' }
                : html
            }
            javaScriptEnabled={true}
            injectedJavaScript={`
          window.shares = '${JSON.stringify(
            loginResponse.shares.map((share) => share.toString('hex'))
          )}';
          window.indexes = '${JSON.stringify(
            loginResponse.sharesIndexes.map((index) => index.toString('hex'))
          )}';
        `}
            onMessage={(event) => {
              console.log(
                '🚀 ~ file: index.tsx:37 ~ constRegisterIntroScreen:FunctionComponent=observer ~ event:',
                event.nativeEvent.data
              );
              const { result, error } = JSON.parse(event.nativeEvent.data);
              if (error) {
                return console.log('🚀 ~ file: index.tsx:131 ~ error:', error);
              }
              setInterpolateResult(result);
            }}
          />
        </View>
      )}
      {privateKey && <Text>Private key: {privateKey}</Text>}
      <Dialog
        isVisible={recoveryVisible}
        onBackdropPress={() => setRecoveryVisible(false)}
      >
        <Text>
          Your account is existed. Please input your security password
        </Text>
        <TextInput
          style={{
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10
          }}
          value={recoveryPassword}
          onChangeText={setRecoveryPassword}
        />
        <OWButton label="Ok" onPress={recoverShare} />
      </Dialog>
      <Dialog
        isVisible={securityPasswordVisible}
        onBackdropPress={() => setSecurityPasswordVisible(false)}
      >
        <Text>Please input your security password</Text>
        <TextInput
          style={{
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10
          }}
          value={recoveryPassword}
          onChangeText={setSecurityPassword}
        />
        <OWButton label="Ok" onPress={generateNewShareWithPassword} />
      </Dialog>
    </PageWithScrollView>
  );
};

export default CreateANewWalletScreen;

const styles = StyleSheet.create({});
