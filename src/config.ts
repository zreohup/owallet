import { Currency, FiatCurrency } from "./common/currency";
import { BIP44 } from "@everett-protocol/cosmosjs/core/bip44";
import { defaultBech32Config } from "@everett-protocol/cosmosjs/core/bech32Config";
import { ChainInfo, AccessOrigin } from "./background/chains";

export const CoinGeckoAPIEndPoint = "https://api.coingecko.com/api/v3";
export const CoinGeckoGetPrice = "/simple/price";
export const AutoFetchingFiatValueInterval = 300 * 1000; // 5min

export const AutoFetchingAssetsInterval = 15 * 1000; // 15sec

// Endpoint for Ethereum node.
// This is used for ENS.
export const EthereumEndpoint =
  "https://mainnet.infura.io/v3/eeb00e81cdb2410098d5a270eff9b341";

export const NativeChainInfos: ChainInfo[] = [
  {
    rpc: "https://node-cosmoshub-3.keplr.app/rpc",
    rest: "https://node-cosmoshub-3.keplr.app/rest",
    chainId: "cosmoshub-3",
    chainName: "Cosmos",
    nativeCurrency: "atom",
    walletUrl:
      process.env.NODE_ENV === "production"
        ? "https://wallet.keplr.app/#/cosmoshub-3"
        : "http://localhost:8081/#/cosmoshub-3",
    walletUrlForStaking:
      process.env.NODE_ENV === "production"
        ? "https://wallet.keplr.app/#/cosmoshub-3"
        : "http://localhost:8081/#/cosmoshub-3",
    bip44: new BIP44(44, 118, 0),
    bech32Config: defaultBech32Config("cosmos"),
    currencies: ["atom"],
    feeCurrencies: ["atom"],
    coinType: 118
  },
  {
    rpc: "https://node-kava-2.keplr.app/rpc",
    rest: "https://node-kava-2.keplr.app/rest",
    chainId: "kava-2",
    chainName: "Kava",
    nativeCurrency: "kava",
    walletUrl:
      process.env.NODE_ENV === "production"
        ? "https://wallet.keplr.app/#/kava-2"
        : "http://localhost:8081/#/kava-2",
    walletUrlForStaking:
      process.env.NODE_ENV === "production"
        ? "https://wallet.keplr.app/#/kava-2"
        : "http://localhost:8081/#/kava-2",
    bip44: new BIP44(44, 118, 0),
    bech32Config: defaultBech32Config("kava"),
    currencies: ["kava"],
    feeCurrencies: ["kava"],
    coinType: 459
  }
];

/**
 * This declares which origins can access extension without explicit approval.
 */
export const ExtensionAccessOrigins: AccessOrigin[] = [
  {
    chainId: "cosmoshub-3",
    origins:
      process.env.NODE_ENV === "production" ? ["https://wallet.keplr.app"] : []
  },
  {
    chainId: "kava-2",
    origins:
      process.env.NODE_ENV === "production" ? ["https://wallet.keplr.app"] : []
  }
];

/**
 * Currencis include the currency information for matched coin.
 */
export const Currencies: {
  readonly [currency: string]: Currency;
} = {
  atom: {
    coinDenom: "ATOM",
    coinMinimalDenom: "uatom",
    coinDecimals: 6,
    coinGeckoId: "cosmos"
  },
  kava: {
    coinDenom: "KAVA",
    coinMinimalDenom: "ukava",
    coinDecimals: 6,
    coinGeckoId: "kava"
  }
};

export const LanguageToFiatCurrency: {
  [language: string]: FiatCurrency;
} = {
  default: {
    currency: "usd",
    symbol: "$",
    parse: (value: number) => {
      let fractionDigits = 2;
      if (value < 0.01) {
        fractionDigits = 4;
      }
      return value.toLocaleString("en-US", {
        maximumFractionDigits: fractionDigits
      });
    }
  },
  ko: {
    currency: "krw",
    symbol: "￦",
    parse: (value: number) => {
      let fractionDigits = 0;
      if (value < 1) {
        fractionDigits = 1;
      }
      return value.toLocaleString("ko-KR", {
        maximumFractionDigits: fractionDigits
      });
    }
  }
};
