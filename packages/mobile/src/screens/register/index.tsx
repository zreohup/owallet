import { useRegisterConfig } from '@owallet/hooks';
import OWText from '@src/components/text/ow-text';
import { useTheme } from '@src/themes/theme-provider';
import { observer } from 'mobx-react-lite';
import React, { FunctionComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import OWButton from '../../components/button/OWButton';
import { PageWithScrollView } from '../../components/page';
import { useSmartNavigation } from '../../navigation.provider';
import { useStore } from '../../stores';
import { metrics } from '../../themes';
import { OWalletLogo, OWalletUnion } from './owallet-logo';
import { HeaderWelcome, OrText } from './components';
import { SCREENS } from '@src/common/constants';
import WebviewSocialLogin, { useLoginSocial } from './google-signin';
import { AppInit } from '@src/stores/app_init';
import images from '@src/assets/images';
import OWIcon from '@src/components/ow-icon/ow-icon';

export const RegisterIntroScreen: FunctionComponent = observer(() => {
  const { keyRingStore, analyticsStore } = useStore();
  const { colors } = useTheme();

  const smartNavigation = useSmartNavigation();
  const registerConfig = useRegisterConfig(keyRingStore, []);
  const handleImportFromMnemonic = () => {
    analyticsStore.logEvent('Import account started', {
      registerType: 'seed'
    });
    smartNavigation.navigateSmart('Register.RecoverMnemonic', {
      registerConfig
    });
  };
  const handleImportLedgerNanoX = () => {
    smartNavigation.navigateSmart('Register.NewLedger', {
      registerConfig
    });
  };
  const handleCreateANewWallet = () => {
    smartNavigation.navigate(SCREENS.CreateANewWallet);
  };
  const tKey = AppInit.tKey;
  const styles = useStyles();
  const { login, loginResponse, setInterpolateResult } = useLoginSocial();
  return (
    <PageWithScrollView
      backgroundColor={colors['plain-background']}
      style={[styles.container]}
    >
      <HeaderWelcome
        style={{
          marginTop: 0
        }}
        title={'Welcome to OWallet'}
      />
      <OWButton
        style={styles.btnOW}
        label="Create a new wallet"
        onPress={handleCreateANewWallet}
      />
      <OWButton
        // style={styles.btnOW}
        label="Import Ledger Nano X"
        onPress={handleImportLedgerNanoX}
        type="secondary"
        
      />

      <OrText />
      <OWButton
        style={styles.btnOW}
        label="Import from Mnemonic / Private key"
        onPress={handleImportFromMnemonic}
        type="secondary"
      />
      <OWButton
        onPress={login}
        disabled={!!tKey ? false : true}
        type="secondary"
        icon={<OWIcon type="images" source={images.google} size={24} />}
        label="Sign in with Google"
      />
      <WebviewSocialLogin
        loginResponse={loginResponse}
        handleInterpolateResult={(result) => setInterpolateResult(result)}
      />
    </PageWithScrollView>
  );
});

const useStyles = () => {
  const { colors } = useTheme();
  return StyleSheet.create({
    btnOW: {
      marginBottom: 16
    },

    title: {
      fontWeight: '700',
      fontSize: 24,
      color: colors['label'],
      lineHeight: 34,
      paddingBottom: 8
    },

    containerBtn: {
      width: metrics.screenWidth - 86
    },
    textBtn: {
      textAlign: 'center',
      fontWeight: '700',
      fontSize: 16,
      padding: 16
    },
    container: {
      paddingLeft: 42,
      paddingRight: 42
    }
  });
};
