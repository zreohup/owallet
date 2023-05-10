import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
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
const CreateANewWalletScreen = () => {
  const { colors } = useTheme();
  const smartNavigation = useSmartNavigation();
  const { keyRingStore, analyticsStore } = useStore();
  const registerConfig = useRegisterConfig(keyRingStore, []);
  const handleCreateANewMnemonic = () => {
    analyticsStore.logEvent('Create account started', {
      registerType: 'seed'
    });
    smartNavigation.navigate(SCREENS.RegisterNewMnemonic, {
      registerConfig
    });
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
        type="secondary"
        icon={<OWIcon type="images" source={images.google} size={24} />}
        label="Sign in with Google"
      />
    </PageWithScrollView>
  );
};

export default CreateANewWalletScreen;

const styles = StyleSheet.create({});
