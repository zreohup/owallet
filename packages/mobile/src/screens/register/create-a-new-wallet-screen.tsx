import React from 'react';
import { StyleSheet } from 'react-native';
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
import WebviewSocialLogin, { useLoginSocial } from './google-signin';
import { AppInit } from '@src/stores/app_init';

const CreateANewWalletScreen = () => {
  const { colors } = useTheme();
  const smartNavigation = useSmartNavigation();
  const { keyRingStore, analyticsStore } = useStore();

  const tKey = AppInit.tKey;

  const registerConfig = useRegisterConfig(keyRingStore, []);
  const handleCreateANewMnemonic = () => {
    analyticsStore.logEvent('Create account started', {
      registerType: 'seed'
    });
    smartNavigation.navigate(SCREENS.RegisterNewMnemonic, {
      registerConfig
    });
  };

  const { login, loginResponse, setInterpolateResult } = useLoginSocial();
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
        disabled={!!tKey ? false : true}
        type="secondary"
        icon={<OWIcon type="images" source={images.google} size={24} />}
        label="Sign in with Google"
        style={{
          borderColor:colors['border-btn-social']
        }}
        textStyle={{
          color:colors['text-btn-social']
        }}
        
      />
      <WebviewSocialLogin
        loginResponse={loginResponse}
        handleInterpolateResult={(result) => setInterpolateResult(result)}
      />
    </PageWithScrollView>
  );
};

export default CreateANewWalletScreen;

const styles = StyleSheet.create({});
