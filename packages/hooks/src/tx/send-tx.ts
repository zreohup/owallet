import {
  ChainGetter,
  CosmosMsgOpts,
  CosmwasmMsgOpts,
  ObservableQueryBitcoinBalance,
  SecretMsgOpts
} from '@owallet/stores';
import { ObservableQueryBalances, ObservableQueryEvmBalance } from '@owallet/stores';
import { useFeeConfig } from './fee';
import { useMemoConfig } from './memo';
import { useRecipientConfig } from './recipient';
import { useSendGasConfig } from './send-gas';
import { useAmountConfig } from './amount';

type MsgOpts = CosmosMsgOpts & SecretMsgOpts & CosmwasmMsgOpts;

export const useSendTxConfig = (
  chainGetter: ChainGetter,
  chainId: string,
  sendMsgOpts: MsgOpts['send'],
  sender: string,
  queryBalances: ObservableQueryBalances,
  ensEndpoint?: string,
  queryEvmBalances?: ObservableQueryEvmBalance,
  senderEvm?: string,
  queryBtcBalances?: ObservableQueryBitcoinBalance
) => {
  const chainInfo = chainGetter.getChain(chainId);
  const amountConfig = useAmountConfig(
    chainGetter,
    chainId,
    sender,
    queryBalances,
    chainInfo.networkType === 'evm' && queryEvmBalances,
    chainInfo.networkType === 'evm' && senderEvm,
    chainInfo.networkType === 'bitcoin' && queryBtcBalances
  );

  const memoConfig = useMemoConfig(chainGetter, chainId);
  const gasConfig = useSendGasConfig(chainGetter, chainId, amountConfig, sendMsgOpts);
  const feeConfig = useFeeConfig(
    chainGetter,
    chainId,
    sender,
    queryBalances,
    amountConfig,
    gasConfig,
    true,
    chainInfo.networkType === 'evm' && queryEvmBalances,
    chainInfo.networkType === 'evm' && senderEvm,
    chainInfo.networkType === 'bitcoin' && queryBtcBalances,
    memoConfig
  );
  // Due to the circular references between the amount config and gas/fee configs,
  // set the fee config of the amount config after initing the gas/fee configs.
  amountConfig.setFeeConfig(feeConfig);

  const recipientConfig = useRecipientConfig(chainGetter, chainId, ensEndpoint);

  return {
    amountConfig,
    memoConfig,
    gasConfig,
    feeConfig,
    recipientConfig
  };
};
