import { StyleSheet, View } from 'react-native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as WebBrowser from 'expo-web-browser';
import WebView from 'react-native-webview';
import BN from 'bn.js';
import { useLoadingScreen } from '@src/providers/loading-screen';
import { navigate } from '@src/router/root';
import { html, showToast, sleep } from '@src/utils/helper';
import { SCREENS } from '@src/common/constants';
import { useStore } from '@src/stores';
import { useRegisterConfig } from '@owallet/hooks';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppInit } from '@src/stores/app_init';

type GenericObject = {
  [key: string]: string;
};

const CLIENT_ID =
  '349137538811-8t7s7584app6am5j09a2kglo8dg39eqn.apps.googleusercontent.com';
const WebviewSocialLogin = ({ loginResponse, handleInterpolateResult }) => {
  const loadingScreen = useLoadingScreen();
  const [keyWebview, setKeyWebview] = useState(1);
  useEffect(() => {
    if (loginResponse) {
      setKeyWebview(keyWebview + 1);
    }
    return () => {};
  }, [loginResponse]);

  if (loginResponse) {
    return (
      <View
        style={{
          display: 'none'
        }}
        key={keyWebview}
      >
        <WebView
          key={keyWebview}
          source={{ html }}
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
              loadingScreen.setIsLoading(false);
              console.log('🚀 ~ file: index.tsx:131 ~ error:', error);
            }
            handleInterpolateResult(result);
          }}
        />
      </View>
    );
  }

  return null;
};

export default WebviewSocialLogin;

export const useLoginSocial = (addressAcc?: string) => {
  const { keyRingStore } = useStore();

  const tKey = AppInit.tKey;
  const registerConfig = useRegisterConfig(keyRingStore, []);
  const [loginResponse, setLoginResponse] = useState<any>();
  const [isShowModalPass, setIsShowModalPass] = useState(false);
  const [passwordLock, setPasswordLock] = useState(null);
  const [privateKeyExternal, setPrivateKeyExternal] = useState(null);
  const [interpolateResult, setInterpolateResult] = useState<{
    pubKey: string;
    privKey: string;
  }>();

  const loadingScreen = useLoadingScreen();
  const initServiceProvider = async () => {
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

  useEffect(() => {
    if (tKey) {
      initServiceProvider();
    }
  }, [tKey]);

  useEffect(() => {
    handleInitInterpolate();
  }, [interpolateResult]);

  const isConnectGG = useRef();

  const handleInitInterpolate = useCallback(
    (securityPass = null) => {
      if (interpolateResult) {
        if (interpolateResult.pubKey !== loginResponse.thresholdPublicKey) {
          return console.log(`Public key isn't same with contract`);
        }
        loadingScreen.openAsync();
        isConnectGG.current = (interpolateResult as any)?.isConnectGG;
        initialize(interpolateResult.privKey, securityPass);
      }
    },
    [interpolateResult]
  );
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
      loadingScreen.openAsync();
      triggerLoginMobile(hash, queryParams);
    } catch (e) {
      loadingScreen.setIsLoading(false);
      console.log('🚀 ~ file: index.tsx:99 ~ test ~ e:', e);
    }
  };

  const triggerLoginMobile = async (
    hash: string,
    queryParameters: GenericObject
  ) => {
    if (!tKey) {
      loadingScreen.setIsLoading(false);
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
      console.log('userInfo: ', userInfo);
      setLoginResponse({
        shares,
        sharesIndexes,
        userInfo,
        thresholdPublicKey
      });
    } catch (error) {
      loadingScreen.setIsLoading(false);
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
  const checkEmailRegistered = async (securityPass: string = null) => {
    try {
      const checkEmailRegistered =
        await tKey.getGenericMetadataWithTransitionStates({
          serviceProvider: tKey.serviceProvider,
          fromJSONConstructor: {
            fromJSON(val) {
              return val;
            }
          }
        });

      console.log('checkEmailRegistered: ', checkEmailRegistered);
      if (checkEmailRegistered?.message === 'KEY_NOT_FOUND' && !securityPass) {
        setIsShowModalPass(true);
        return Promise.reject(false);
        // return;
      } else if (
        checkEmailRegistered?.message === 'KEY_NOT_FOUND' &&
        securityPass
      ) {
        return true;
      }
      showToast({
        text1: 'Exits',
        text2:
          'The email already exists, please try again with a different email.',
        type: 'error'
      });
      return Promise.reject(
        'The email already exists, please try again with a different email.'
      );
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const initialize = async (privKey: string, securityPass?: string) => {
    try {
      await getPostBoxKey(privKey);
      if (isConnectGG.current && privateKeyExternal) {
        await checkEmailRegistered(securityPass);
        await tKey.initialize({
          importKey: new BN(privateKeyExternal, 'hex')
        });
        handleData();
      } else {
        await tKey.initialize();
        handleData();
      }
    } catch (error) {
      loadingScreen.setIsLoading(false);
      console.log('🚀 ~ file: index.tsx:157 ~ initialize ~ error:', error);
    }
  };
  const handleData = async () => {
    try {
      try {
        await (
          tKey.modules.reactNativeStorage as any
        ).inputShareFromReactNativeStorage();
        const deviceShare = await (
          tKey.modules.reactNativeStorage as any
        ).getStoreFromReactNativeStorage();
        AsyncStorage.setItem(
          `${loginResponse['userInfo']?.email}_share`,
          JSON.stringify(deviceShare)
        );
      } catch (error) {
        console.log('🚀 ~ file: index.tsx:154 ~ initialize ~ error:', error);
        loadingScreen.setIsLoading(false);
        if (!isConnectGG.current) {
          navigate(SCREENS.RegisterRecoverMnemonic, {
            registerConfig,
            recoveryVisible: true,
            userInfo: loginResponse['userInfo']
          });
          return;
        }
      }
      await reconstructKey();
    } catch (error) {
      console.log('🚀 ~ file: index.tsx:345 ~ handleData ~ error:', error);
    }
  };

  const index = keyRingStore.multiKeyStoreInfo.findIndex(
    (keyStore) => keyStore.selected
  );
  const reconstructKey = async () => {
    const { requiredShares, shareDescriptions } = tKey.getKeyDetails();

    if (requiredShares <= 0) {
      const reconstructedKey = await tKey.reconstructKey();

      if (!isConnectGG.current) {
        loadingScreen.setIsLoading(false);
        navigate(SCREENS.RegisterRecoverMnemonic, {
          registerConfig,
          userInfo: loginResponse['userInfo']
        });
      }

      console.log(
        '🚀 ~ file: index.tsx:161 ~ initialize ~ reconstructedKey.privKey:',
        reconstructedKey?.privKey.toString('hex')
      );
      let isExistSecurityQuestions = false;
      Object.values(shareDescriptions).forEach((descriptions: any) => {
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
      if (!isExistSecurityQuestions) {
        if (!isConnectGG.current) {
          loadingScreen.setIsLoading(false);
          navigate(SCREENS.RegisterRecoverMnemonic, {
            registerConfig,
            securityPasswordVisible: true,
            userInfo: loginResponse['userInfo']
          });
        } else {
          try {
            const metaData = {
              email: loginResponse['userInfo']?.email,
              avatar: loginResponse['userInfo']?.profileImage,
              type: 'google'
            };
            await generateNewShareWithPassword(passwordLock);
            setIsShowModalPass(false);
            await keyRingStore.updateMetaKeyRing(index, metaData);
            loadingScreen.setIsLoading(false);
            return;
          } catch (error) {
            loadingScreen.setIsLoading(false);
            console.log('createPrivateKey error: ', error);
          }
        }
      }
    }
  };
  const generateNewShareWithPassword = async (pass) => {
    if (!tKey) {
      return;
    }
    try {
      await (
        tKey.modules.securityQuestions as any
      ).generateNewShareWithSecurityQuestions(pass, 'whats your password?');
      console.log('generate successfully');
    } catch (error) {
      console.log(
        '🚀 ~ file: index.tsx:216 ~ generateNewShareWithPassword ~ error:',
        error
      );

      return Promise.reject(error);
    }
  };

  return {
    login,
    loginResponse,
    setInterpolateResult,
    isShowModalPass,
    setIsShowModalPass,
    setPasswordLock,
    passwordLock,
    handleInitInterpolate,
    setPrivateKeyExternal,
    privateKeyExternal
  };
};
const styles = StyleSheet.create({});
