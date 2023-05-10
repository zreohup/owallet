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
import { HeaderWelcome } from './components';

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
    analyticsStore.logEvent('Create account started', {
      registerType: 'seed'
    });
    smartNavigation.navigateSmart('Register.NewMnemonic', {
      registerConfig
    });
  };
  const styles = useStyles();

  return (
    <PageWithScrollView
      backgroundColor={colors['plain-background']}
      style={[styles.container]}
    >
      <HeaderWelcome title={'Welcome to OWallet'} />
      <OWButton
        style={styles.btnOW}
        label="Create a new wallet"
        onPress={handleCreateANewWallet}
      />
      <OWButton
        style={styles.btnOW}
        label="Import Ledger Nano X"
        onPress={handleImportLedgerNanoX}
        type="secondary"
      />
      <OWButton
        style={styles.btnOW}
        label="Import from Mnemonic / Private key"
        onPress={handleImportFromMnemonic}
        type="secondary"
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
