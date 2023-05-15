import React, { FunctionComponent, useEffect, useState } from 'react';
import { PageWithScrollView } from '../../../components/page';
import { observer } from 'mobx-react-lite';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useTheme } from '@src/themes/theme-provider';
import { RegisterConfig } from '@owallet/hooks';
import { useSmartNavigation } from '../../../navigation.provider';
import { Controller, useForm } from 'react-hook-form';
import { TextInput } from '../../../components/input';
import {
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';
import { Button } from '../../../components/button';
import Clipboard from 'expo-clipboard';
import { useStore } from '../../../stores';
import { BIP44AdvancedButton, useBIP44Option } from '../bip44';
import { Buffer } from 'buffer';
import {
  checkRouter,
  checkRouterPaddingBottomBar,
  navigate
} from '../../../router/root';
import { OWalletLogo } from '../owallet-logo';
import { spacing, typography } from '../../../themes';
import { LoadingSpinner } from '../../../components/spinner';
import OWButton from '../../../components/button/OWButton';
import OWIcon from '../../../components/ow-icon/ow-icon';
import { SCREENS } from '@src/common/constants';
import { removeStringAfterAtEmail, showToast } from '@src/utils/helper';
import { Text } from '@src/components/text';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const bip39 = require('bip39');

function isPrivateKey(str: string): boolean {
  if (str?.startsWith('0x')) {
    return true;
  }

  if (str.length === 64) {
    try {
      return Buffer.from(str, 'hex').length === 32;
    } catch {
      return false;
    }
  }
  return false;
}

function trimWordsStr(str: string): string {
  str = str.trim();
  // Split on the whitespace or new line.
  const splited = str.split(/\s+/);
  const words = splited
    .map((word) => word.trim())
    .filter((word) => word.trim().length > 0);
  return words.join(' ');
}

interface FormData {
  mnemonic: string;
  name: string;
  password: string;
  confirmPassword: string;
  securityPassword: string;
  recoveryPassword: string;
}

export const RecoverMnemonicScreen: FunctionComponent = observer((props) => {
  const route = useRoute<
    RouteProp<
      Record<
        string,
        {
          registerConfig: RegisterConfig;
          recoveryVisible?: boolean;
          securityPasswordVisible?: boolean;
          userInfo?: any;
          tKey?: any;
        }
      >,
      string
    >
  >();
  const { analyticsStore } = useStore();
  const smartNavigation = useSmartNavigation();
  const registerConfig: RegisterConfig = route.params.registerConfig;
  const bip44Option = useBIP44Option();
  const [mode] = useState(registerConfig.mode);
  const recoveryVisible = route.params?.recoveryVisible;
  const securityPasswordVisible = route.params?.securityPasswordVisible;
  const userInfo = route.params?.userInfo;
  const tKey = route.params?.tKey;
  const {
    control,
    handleSubmit,
    setFocus,
    setValue,
    getValues,
    formState: { errors }
  } = useForm<FormData>();
  const { colors } = useTheme();
  const styles = useStyle();

  const [isCreating, setIsCreating] = useState(false);
  const [statusPass, setStatusPass] = useState(false);
  const [statusConfirmPass, setStatusConfirmPass] = useState(false);
  const [statusSecurityPass, setStatusSecurityPass] = useState(false);
  const [statusRecoveryPass, setStatusRecoveryPass] = useState(false);
  const [isSocialLogin, setIsSocialLogin] = useState(false);

  const reconstructKey = async () => {
    try {
      const { requiredShares } = tKey.getKeyDetails();

      if (requiredShares <= 0) {
        const reconstructedKey = await tKey.reconstructKey();
        return reconstructedKey?.privKey?.toString('hex');
      }
    } catch (error) {
      console.log('error: ', error);
      setIsCreating(false);
      return Promise.reject(error);
    }
  };
  useEffect(() => {
    if (userInfo?.email) {
      setValue('name', removeStringAfterAtEmail(userInfo?.email), {
        shouldValidate: true
      });
      handleInit();
    }
  }, []);
  const handleInit = async () => {
    const privateKey = await reconstructKey();
    if (privateKey) {
      setIsSocialLogin(true);
    }
  };
  const submit = handleSubmit(async () => {
    try {
      setIsCreating(true);
      const metaData = { email: userInfo?.email, type: 'google' };

      if (recoveryVisible) {
        try {
          const privKey = await recoverShare();
          if (privKey) {
            const privateKey = Buffer.from(
              privKey.trim().replace('0x', ''),
              'hex'
            );
            createPrivateKey(privateKey, metaData);
          }
        } catch (error) {
          let msg =
            'You have entered the wrong recovery password. Please try again.';
          showToast({ text1: 'Error', text2: msg, type: 'error' });
          return Promise.reject(msg);
        }
      } else if (securityPasswordVisible) {
        try {
          const privKey = await generateNewShareWithPassword();
          const privateKey = Buffer.from(
            privKey.trim().replace('0x', ''),
            'hex'
          );
          createPrivateKey(privateKey, metaData);
        } catch (error) {
          let msg = 'Social login failed!';
          showToast({ text1: 'Error', text2: msg, type: 'error' });
          return Promise.reject(msg);
        }
      } else if (isSocialLogin) {
        try {
          const privKey = await reconstructKey();
          const privateKey = Buffer.from(
            privKey.trim().replace('0x', ''),
            'hex'
          );
          createPrivateKey(privateKey, metaData);
        } catch (error) {
          let msg = 'Social login failed!';
          showToast({ text1: 'Error', text2: msg, type: 'error' });
          return Promise.reject(msg);
        }
      } else {
        const mnemonic = trimWordsStr(getValues('mnemonic'));
        if (!isPrivateKey(mnemonic)) {
          await registerConfig.createMnemonic(
            getValues('name'),
            mnemonic,
            getValues('password'),
            bip44Option.bip44HDPath
          );
          analyticsStore.setUserProperties({
            registerType: 'seed',
            accountType: 'mnemonic'
          });
        } else {
          const privateKey = Buffer.from(
            mnemonic.trim().replace('0x', ''),
            'hex'
          );
          createPrivateKey(privateKey, null);
        }
      }
      if (checkRouter(props?.route?.name, 'RegisterRecoverMnemonicMain')) {
        navigate(SCREENS.RegisterEnd, {
          password: getValues('password'),
          type: 'recover'
        });
      } else {
        smartNavigation.reset({
          index: 0,
          routes: [
            {
              name: 'Register.End',
              params: {
                password: getValues('password'),
                type: 'recover'
              }
            }
          ]
        });
      }
    } catch (error) {
      console.log('error: ', error);
      showToast({
        text1: 'Error',
        text2: JSON.stringify(error),
        type: 'error'
      });
      return;
    }
  });
  const createPrivateKey = async (privateKey, meta) => {
    try {
      await registerConfig.createPrivateKey(
        getValues('name'),
        privateKey,
        getValues('password'),
        { ...meta }
      );
      analyticsStore.setUserProperties({
        registerType: 'seed',
        accountType: 'privateKey'
      });
    } catch (error) {
      setIsCreating(false);
      console.log('error: ', error);
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
        getValues('securityPassword'),
        'whats your password?'
      );
      console.log('generate successfully');
      return await reconstructKey();
    } catch (error) {
      console.log(
        '🚀 ~ file: index.tsx:216 ~ generateNewShareWithPassword ~ error:',
        error
      );
      setIsCreating(false);
      return Promise.reject(error);
    }
  };
  const onPaste = async () => {
    const text = await Clipboard.getStringAsync();
    if (text) {
      setValue('mnemonic', text, {
        shouldValidate: true
      });
      setFocus('name');
    }
  };
  const onGoBack = () => {
    if (checkRouter(props?.route?.name, 'RegisterRecoverMnemonicMain')) {
      smartNavigation.goBack();
    } else {
      smartNavigation.navigateSmart('Register.Intro', {});
    }
  };
  const validateMnemonic = (value: string) => {
    value = trimWordsStr(value);
    if (!isPrivateKey(value)) {
      if (value.split(' ').length < 8) {
        return 'Too short mnemonic';
      }

      if (!bip39.validateMnemonic(value)) {
        return 'Invalid mnemonic';
      }
    } else {
      value = value.replace('0x', '');
      if (value.length !== 64) {
        return 'Invalid length of private key';
      }

      try {
        if (
          Buffer.from(value, 'hex').toString('hex').toLowerCase() !==
          value.toLowerCase()
        ) {
          return 'Invalid private key';
        }
      } catch {
        return 'Invalid private key';
      }
    }
  };
  const renderMnemonic = ({ field: { onChange, onBlur, value, ref } }) => {
    return (
      <TextInput
        label="Mnemonic / Private key"
        returnKeyType="next"
        multiline={true}
        numberOfLines={4}
        inputContainerStyle={styles.mnemonicInput}
        bottomInInputContainer={
          <View style={styles.containerInputMnemonic}>
            <View />

            <OWButton
              type="secondary"
              label="Paste"
              size="small"
              fullWidth={false}
              onPress={onPaste}
            />
          </View>
        }
        style={{
          minHeight: 20 * 4,
          textAlignVertical: 'top',
          ...typography['h6'],
          color: colors['text-black-medium']
        }}
        onSubmitEditing={() => {
          setFocus('name');
        }}
        inputStyle={{
          ...styles.borderInput
        }}
        error={errors.mnemonic?.message}
        onBlur={onBlur}
        onChangeText={onChange}
        value={value}
        ref={ref}
      />
    );
  };
  const renderName = ({ field: { onChange, onBlur, value, ref } }) => {
    return (
      <TextInput
        label="Username"
        returnKeyType={
          mode === 'add' && !securityPasswordVisible && !recoveryVisible
            ? 'done'
            : 'next'
        }
        onSubmitEditing={() => {
          if (securityPasswordVisible) {
            setFocus('securityPassword');
          } else if (recoveryVisible) {
            setFocus('recoveryPassword');
          } else if (mode === 'create') {
            setFocus('password');
          }
          submit();
        }}
        inputStyle={{
          ...styles.borderInput
        }}
        error={errors.name?.message}
        onBlur={onBlur}
        onChangeText={onChange}
        value={value}
        ref={ref}
      />
    );
  };
  const validatePass = (value: string) => {
    if (value.length < 8) {
      return 'Password must be longer than 8 characters';
    }
  };
  const validateName = (value: string) => {
    if (value.length < 6) {
      return 'Username must be longer than 8 characters';
    }
  };
  const validateSecurityPass = (value: string) => {
    if (value.length < 8) {
      return 'Security password must be longer than 8 characters';
    }
  };
  const renderPass = ({ field: { onChange, onBlur, value, ref } }) => {
    return (
      <TextInput
        label="New password"
        returnKeyType="next"
        onSubmitEditing={() => {
          setFocus('confirmPassword');
        }}
        secureTextEntry={true}
        inputStyle={{
          ...styles.borderInput
        }}
        inputRight={
          <OWButton
            style={styles.padIcon}
            type="link"
            onPress={() => setStatusPass(!statusPass)}
            icon={
              <OWIcon
                name={!statusPass ? 'eye' : 'eye-slash'}
                color={colors['icon-purple-700-gray']}
                size={22}
              />
            }
          />
        }
        secureTextEntry={!statusPass}
        error={errors.password?.message}
        onBlur={onBlur}
        onChangeText={onChange}
        value={value}
        ref={ref}
      />
    );
  };
  const validateConfirmPass = (value: string) => {
    if (value.length < 8) {
      return 'Password must be longer than 8 characters';
    }

    if (getValues('password') !== value) {
      return "Password doesn't match";
    }
  };
  const validateRecoveryPass = (value: string) => {
    if (value.length < 8) {
      return 'Password must be longer than 8 characters';
    }
  };
  const recoverShare = async () => {
    try {
      await (
        tKey.modules.securityQuestions as any
      ).inputShareFromSecurityQuestions(getValues('recoveryPassword')); // 2/2 flow

      const { requiredShares } = tKey.getKeyDetails();
      if (requiredShares <= 0) {
        console.log('requiredShares: ', requiredShares);
        const reconstructedKey = await tKey.reconstructKey();
        // loadingScreen.setIsLoading(false);
        return reconstructedKey?.privKey.toString('hex');
      }
      const shareStore = await tKey.generateNewShare();
      await (tKey.modules.reactNativeStorage as any).storeDeviceShare(
        shareStore.newShareStores[shareStore.newShareIndex.toString('hex')]
      );
      console.log('shareStore: ', shareStore);

      return null;
      // setRecoveryVisible(false);
    } catch (error) {
      // loadingScreen.setIsLoading(false);

      setIsCreating(false);
      return Promise.reject(error);
      // console.log('🚀 ~ file: index.tsx:193 ~ recoverShare ~ error:', error);
    }
  };

  const renderConfirmPass = ({ field: { onChange, onBlur, value, ref } }) => {
    return (
      <TextInput
        label="Confirm password"
        returnKeyType="done"
        onSubmitEditing={() => {
          submit();
        }}
        inputRight={
          <OWButton
            style={styles.padIcon}
            type="link"
            onPress={() => setStatusConfirmPass(!statusConfirmPass)}
            icon={
              <OWIcon
                name={!statusConfirmPass ? 'eye' : 'eye-slash'}
                color={colors['icon-purple-700-gray']}
                size={22}
              />
            }
          />
        }
        secureTextEntry={!statusConfirmPass}
        inputStyle={{
          ...styles.borderInput
        }}
        error={errors.confirmPassword?.message}
        onBlur={onBlur}
        onChangeText={onChange}
        value={value}
        ref={ref}
      />
    );
  };
  const renderSecurityPassword = ({
    field: { onChange, onBlur, value, ref }
  }) => {
    return (
      <TextInput
        label="Security password"
        returnKeyType={mode == 'create' ? 'next' : 'done'}
        onSubmitEditing={() => {
          if (mode === 'create') setFocus('password');
          submit();
        }}
        inputRight={
          <OWButton
            style={styles.padIcon}
            type="link"
            onPress={() => setStatusSecurityPass(!statusSecurityPass)}
            icon={
              <OWIcon
                name={!statusConfirmPass ? 'eye' : 'eye-slash'}
                color={colors['icon-purple-700-gray']}
                size={22}
              />
            }
          />
        }
        secureTextEntry={!statusSecurityPass}
        inputStyle={{
          ...styles.borderInput
        }}
        error={errors.securityPassword?.message}
        onBlur={onBlur}
        onChangeText={onChange}
        value={value}
        ref={ref}
        paragraph={
          <View style={styles.containerNote}>
            <Text
              variant="caption"
              style={styles.textNote}
              color={colors['orange-800']}
            >
              * Please remember the security password to backup the private key
              in case of losing the private key.
            </Text>
          </View>
        }
      />
    );
  };
  const renderRecoveryPassword = ({
    field: { onChange, onBlur, value, ref }
  }) => {
    return (
      <TextInput
        label="Recovery Password"
        returnKeyType={mode === 'create' ? 'next' : 'done'}
        onSubmitEditing={() => {
          if (mode === 'create') setFocus('password');
          submit();
        }}
        inputRight={
          <OWButton
            style={styles.padIcon}
            type="link"
            onPress={() => setStatusRecoveryPass(!statusRecoveryPass)}
            icon={
              <OWIcon
                name={!statusRecoveryPass ? 'eye' : 'eye-slash'}
                color={colors['icon-purple-700-gray']}
                size={22}
              />
            }
          />
        }
        secureTextEntry={!statusRecoveryPass}
        inputStyle={{
          ...styles.borderInput
        }}
        error={errors.recoveryPassword?.message}
        onBlur={onBlur}
        onChangeText={onChange}
        value={value}
        ref={ref}
      />
    );
  };
  return (
    <PageWithScrollView
      contentContainerStyle={styles.container}
      backgroundColor={colors['plain-background']}
    >
      <View style={styles.headerView}>
        <Text style={styles.titleHeader}>
          {securityPasswordVisible || recoveryVisible || isSocialLogin
            ? 'Sign in with Google'
            : 'Import wallet'}
        </Text>
        <View>
          <OWalletLogo size={72} />
        </View>
      </View>
      {!recoveryVisible && !securityPasswordVisible && !isSocialLogin && (
        <Controller
          control={control}
          rules={{
            required: 'Mnemonic is required',
            validate: validateMnemonic
          }}
          render={renderMnemonic}
          name="mnemonic"
          defaultValue=""
        />
      )}
      <Controller
        control={control}
        rules={{
          required: 'Name is required',
          validate: validateName
        }}
        render={renderName}
        name="name"
        defaultValue=""
      />
      {recoveryVisible && (
        <Controller
          control={control}
          rules={{
            required: 'Recovery password is required',
            validate: validateRecoveryPass
          }}
          render={renderRecoveryPassword}
          name="recoveryPassword"
          defaultValue=""
        />
      )}
      {securityPasswordVisible && (
        <Controller
          control={control}
          rules={{
            required: 'Security password is required',
            validate: validateSecurityPass
          }}
          render={renderSecurityPassword}
          name="securityPassword"
          defaultValue=""
        />
      )}
      {mode === 'create' ? (
        <React.Fragment>
          <Controller
            control={control}
            rules={{
              required: 'Password is required',
              validate: validatePass
            }}
            render={renderPass}
            name="password"
            defaultValue=""
          />
          <Controller
            control={control}
            rules={{
              required: 'Confirm password is required',
              validate: validateConfirmPass
            }}
            render={renderConfirmPass}
            name="confirmPassword"
            defaultValue=""
          />
        </React.Fragment>
      ) : null}

      <BIP44AdvancedButton bip44Option={bip44Option} />
      <OWButton
        loading={isCreating}
        disabled={isCreating}
        onPress={submit}
        label={'Next'}
      />
      <OWButton type="link" onPress={onGoBack} label={'Go back'} />
      {/* Mock element for bottom padding */}
      <View
        style={{
          height: 20
        }}
      />
    </PageWithScrollView>
  );
});

const useStyle = () => {
  const { colors } = useTheme();
  return StyleSheet.create({
    containerInputMnemonic: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    mnemonicInput: {
      paddingLeft: 20,
      paddingRight: 20,
      paddingVertical: 10,
      backgroundColor: 'transparent'
    },
    padIcon: {
      width: 22,
      height: 22
    },
    titleHeader: {
      fontSize: 24,
      lineHeight: 34,
      fontWeight: '700',
      color: colors['label']
    },
    headerView: {
      height: 72,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    container: {
      flexGrow: 1,
      paddingTop: Platform.OS == 'android' ? 50 : 0,
      paddingHorizontal: spacing['page-pad']
    },
    borderInput: {
      borderColor: colors['border-purple-100-gray-800'],
      borderWidth: 1,
      backgroundColor: 'transparent',
      paddingLeft: 11,
      paddingRight: 11,
      paddingTop: 12,
      paddingBottom: 12,
      borderRadius: 8
    },
    textNote: {
      textAlign: 'justify',
      
    },
    containerNote: {
      flex: 1,
      alignItems: 'center',
      paddingTop:7
    }
  });
};
