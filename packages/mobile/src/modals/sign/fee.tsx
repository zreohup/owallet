import React, { FunctionComponent, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { IFeeConfig, IGasConfig, NotLoadedFeeError } from '@owallet/hooks';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { CText as Text } from '../../components/text';
import { useStore } from '../../stores';
import { useStyle } from '../../styles';
import { CoinPretty, Dec, DecUtils } from '@owallet/unit';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { OWalletSignOptions } from '@owallet/types';
import { RightArrowIcon } from '../../components/icon';
import { registerModal } from '../base';
import { CardModal } from '../card';
import { FeeButtons, getFeeErrorText, TextInput } from '../../components/input';
import { LoadingSpinner } from '../../components/spinner';
import { colors, typography } from '../../themes';
import { Toggle } from '../../components/toggle';

const FeeButtonsModal: FunctionComponent<{
  isOpen: boolean;
  close: () => void;

  feeConfig: IFeeConfig;
  gasConfig: IGasConfig;
}> = registerModal(
  observer(({ close, feeConfig, gasConfig }) => {
    const [customFee, setCustomFee] = useState(false);

    return (
      <CardModal title="Set Fee">
        <View
          style={{
            flexDirection: 'row',
            paddingBottom: 24,
            alignItems: 'center'
          }}
        >
          <Toggle
            on={customFee}
            onChange={value => {
              setCustomFee(value);
              if (!value) {
                if (feeConfig.feeCurrency && !feeConfig.fee) {
                  feeConfig.setFeeType('average');
                }
              }
            }}
          />
          <Text
            style={{
              fontWeight: '700',
              fontSize: 16,
              lineHeight: 34,
              paddingHorizontal: 8
            }}
          >
            Custom Fee
          </Text>
        </View>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          {customFee ? (
            <TextInput
              label="Fee"
              placeholder="Type your Fee here"
              keyboardType={'numeric'}
              labelStyle={{
                fontSize: 16,
                fontWeight: '700',
                lineHeight: 22,
                color: colors['gray-900'],
                marginBottom: 8
              }}
              onChangeText={text => {
                const fee = new Dec(Number(text.replace(/,/g, '.'))).mul(
                  DecUtils.getTenExponentNInPrecisionRange(6)
                );

                feeConfig.setManualFee({
                  amount: fee.roundUp().toString(),
                  denom: feeConfig.feeCurrency.coinMinimalDenom
                });
              }}
            />
          ) : (
            <FeeButtons
              label="Fee"
              gasLabel="Gas"
              feeConfig={feeConfig}
              gasConfig={gasConfig}
            />
          )}
        </TouchableWithoutFeedback>

        <TouchableOpacity
          onPress={close}
          style={{
            marginBottom: customFee ? 264 : 14,
            marginTop: 32,
            backgroundColor: colors['purple-900'],
            borderRadius: 8
          }}
        >
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontWeight: '700',
              fontSize: 16,
              padding: 16
            }}
          >
            Confirm
          </Text>
        </TouchableOpacity>
      </CardModal>
    );
  }),
  {
    disableSafeArea: true,
    backdropMaxOpacity: 0.5
  }
);

export const FeeInSign: FunctionComponent<{
  isInternal: boolean;

  feeConfig: IFeeConfig;
  gasConfig: IGasConfig;

  signOptions?: OWalletSignOptions;
}> = observer(({ isInternal, signOptions, feeConfig, gasConfig }) => {
  const { chainStore, priceStore } = useStore();

  const style = useStyle();

  const preferNoSetFee = signOptions?.preferNoSetFee ?? false;

  const fee =
    feeConfig.fee ??
    new CoinPretty(
      chainStore.getChain(feeConfig.chainId).stakeCurrency,
      new Dec('0')
    );

  const feePrice = priceStore.calculatePrice(fee);

  // If the signing request is from internal and the "preferNoSetFee" option is set,
  // prevent the user to edit the fee.
  const canFeeEditable = !isInternal || !preferNoSetFee;

  let isFeeLoading = false;

  const error = feeConfig.getError();
  const errorText: string | undefined = (() => {
    if (error) {
      if (error.constructor === NotLoadedFeeError) {
        isFeeLoading = true;
      }

      return getFeeErrorText(error);
    }
  })();

  const [isSetFeeModalOpen, setIsSetFeeModalOpen] = useState(false);

  return (
    <React.Fragment>
      <FeeButtonsModal
        isOpen={isSetFeeModalOpen}
        close={() => setIsSetFeeModalOpen(false)}
        feeConfig={feeConfig}
        gasConfig={gasConfig}
      />
      <View style={style.flatten(['padding-bottom-28'])}>
        <View
          style={style.flatten(['flex-row', 'items-center', 'margin-bottom-4'])}
        >
          <Text style={style.flatten(['subtitle3', 'color-text-black-medium'])}>
            Fee
          </Text>
          <View style={style.get('flex-1')} />
          <Text style={style.flatten(['body3', 'color-text-black-low'])}>
            {feePrice ? feePrice.toString() : '-'}
          </Text>
        </View>
        <View style={style.flatten(['flex-row'])}>
          <View style={style.get('flex-1')} />
          <TouchableOpacity
            style={style.flatten(['flex-row', 'items-center'])}
            disabled={!canFeeEditable}
            onPress={() => {
              setIsSetFeeModalOpen(true);
            }}
          >
            <Text
              style={{
                ...typography['subtitle1'],
                color: canFeeEditable
                  ? colors['purple-700']
                  : colors['text-black-medium']
              }}
            >
              {fee.trim(true).toString()}
            </Text>
            {canFeeEditable ? (
              <View style={style.flatten(['margin-left-6'])}>
                <RightArrowIcon
                  color={style.get('color-primary').color}
                  height={12}
                />
              </View>
            ) : null}
          </TouchableOpacity>
        </View>
        {isFeeLoading ? (
          <View>
            <View
              style={style.flatten([
                'absolute',
                'height-16',
                'justify-center',
                'margin-top-2',
                'margin-left-4'
              ])}
            >
              <LoadingSpinner
                size={14}
                color={style.get('color-loading-spinner').color}
              />
            </View>
          </View>
        ) : null}
        {!isFeeLoading && errorText ? (
          <View>
            <Text
              style={style.flatten([
                'absolute',
                'text-caption1',
                'color-error',
                'margin-top-2',
                'margin-left-4'
              ])}
            >
              {errorText}
            </Text>
          </View>
        ) : null}
      </View>
    </React.Fragment>
  );
});
