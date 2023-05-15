import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from '@src/components/text';
import {
  ExistingWalletSquareIcon,
  LedgerNanoWalletSquareIcon,
  NewWalletSquareIcon
} from '../../../../components/icon/new-wallet';
import { RectButton } from '../../../../components/rect-button';
import { useStore } from '../../../../stores';
import { useRegisterConfig } from '@owallet/hooks';
import { spacing, typography } from '../../../../themes';
import { navigate } from '../../../../router/root';
import { useTheme } from '@src/themes/theme-provider';
import { useStyleMyWallet } from './styles';
import { SCREENS } from '@src/common/constants';

const objTypeWallet = {
  CREATE_WALLET: 'create',
  IMPORT_EXISTING_WALLET: 'import-existing',
  IMPORT_LEDGER_WALLET: 'import-ledger'
};

const walletBtnList = [
  {
    icon: <NewWalletSquareIcon color="none" size={38} />,
    title: 'Create a new wallet',
    type: objTypeWallet.CREATE_WALLET
  },
  {
    icon: <ExistingWalletSquareIcon color="none" size={38} />,
    title: 'Import existing wallet',
    type: objTypeWallet.IMPORT_EXISTING_WALLET
  },
  {
    icon: <LedgerNanoWalletSquareIcon color="none" size={38} />,
    title: 'Import Ledger Nano X',
    type: objTypeWallet.IMPORT_LEDGER_WALLET
  }
];

const WalletBtnList = () => {
  const { keyRingStore, analyticsStore, modalStore } = useStore();
  const { colors } = useTheme();
  const styles = useStyleMyWallet();
  const registerConfig = useRegisterConfig(keyRingStore, []);
  const onPressElementWallet = async (type) => {
    await modalStore.close();
    switch (type) {
      case objTypeWallet.CREATE_WALLET:
        analyticsStore.logEvent('Create account started', {
          registerType: 'seed'
        });
        navigate(SCREENS.STACK.Register, { screen:SCREENS.CreateANewWallet });
        break;
      case objTypeWallet.IMPORT_EXISTING_WALLET:
        analyticsStore.logEvent('Import account started', {
          registerType: 'seed'
        });
        navigate('RegisterRecoverMnemonicMain', { registerConfig });
        break;
      case objTypeWallet.IMPORT_LEDGER_WALLET:
        navigate('RegisterNewLedgerMain', { registerConfig });
        break;
    }
  };

  const renderWalletBtn = (item, index) => {
    return (
      <RectButton
        key={index}
        style={{
          ...styles.containerAccount,
          borderWidth: 1,
          borderStyle: 'dashed',
          borderColor: colors['background-btn-primary']
        }}
        onPress={() => onPressElementWallet(item.type)}
      >
        <View
          style={{
            justifyContent: 'flex-start',
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          {item.icon}
          <View
            style={{
              justifyContent: 'space-between',
              marginLeft: spacing['12']
            }}
          >
            <Text
              style={{
                ...typography.h6,
                color: colors['text-title-login'],
                fontWeight: '800'
              }}
              numberOfLines={1}
            >
              {item.title}
            </Text>
          </View>
        </View>
      </RectButton>
    );
  };

  return (
    <>
      <View>
        <Text style={{ color: colors['text-content-success'], paddingTop: 10 }}>
          Don’t see your wallet on the list?
        </Text>
      </View>
      <View style={{ width: '100%' }}>
        {walletBtnList.map((item, index) => renderWalletBtn(item, index))}
      </View>
    </>
  );
};

export default WalletBtnList;
