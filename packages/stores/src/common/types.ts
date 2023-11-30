import { AddressBtcType, AppCurrency, ChainInfo } from '@owallet/types';

export interface ChainGetter {
  // Return the chain info matched with chain id.
  // Expect that this method will return the chain info reactively,
  // so it is possible to detect the chain info changed without any additional effort.
  getChain(chainId: string): ChainInfo & {
    raw: ChainInfo;
    addUnknownCurrencies(...coinMinimalDenoms: string[]): void;
    findCurrency(coinMinimalDenom: string): AppCurrency | undefined;
    forceFindCurrency(coinMinimalDenom: string): AppCurrency;
    setAddressType(type: AddressBtcType): void;
  };
}

export type CoinPrimitive = {
  denom: string;
  amount: string;
};

export type StdFeeEthereum = {
  gas: string;
  gasPrice: string;
};
