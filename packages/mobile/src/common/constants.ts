import images from '@src/assets/images';

export const HEADER_KEY = {
  notShowHeader: 'NOT_SHOW_HEADER',
  showNetworkHeader: 'SHOW_NETWORK_HEADER'
};
export const defaultAll = { label: 'All', value: 'All', image: images.crypto };
export const SCREENS = {
  CreateANewWallet: 'CreateANewWallet',
  Home: 'Home',
  TransactionDetail: 'Transactions.Detail',
  RegisterMain: 'RegisterMain',
  RegisterVerifyMnemonicMain: 'RegisterVerifyMnemonicMain',
  RegisterEnd: 'Register.End',
  RegisterRecoverMnemonicMain: 'RegisterRecoverMnemonicMain',
  RegisterNewLedgerMain: 'RegisterNewLedgerMain',
  Tokens: 'Tokens',
  Nfts: 'Nfts',
  TokenDetail: 'Tokens.Detail',
  NftsDetail: 'Nfts.Detail',
  TransferTokensScreen: 'TransferTokensScreen',
  RegisterIntro: 'Register.Intro',
  RegisterNewUser: 'Register.NewUser',
  RegisterNotNewUser: 'Register.NotNewUser',
  RegisterNewMnemonic: 'Register.NewMnemonic',
  RegisterVerifyMnemonic: 'Register.VerifyMnemonic',
  RegisterRecoverMnemonic: 'Register.RecoverMnemonic',
  RegisterNewLedger: 'Register.NewLedger',
  Send: 'Send',
  TransferNFT: 'TransferNFT',
  Transactions: 'Transactions',
  Dashboard: 'Dashboard',
  Camera: 'Camera',
  Governance: 'Governance',
  GovernanceDetails: 'Governance.Details',
  NetworkSelect: 'Network.select',
  ValidatorDetails: 'Validator.Details',
  ValidatorList: 'Validator.List',
  TxPendingResult: 'TxPendingResult',
  TxSuccessResult: 'TxSuccessResult',
  TxFailedResult: 'TxFailedResult',
  Setting: 'Setting',
  SettingSelectAccount: 'SettingSelectAccount',
  SettingViewPrivateData: 'Setting.ViewPrivateData',
  SettingVersion: 'Setting.Version',
  AddressBook: 'AddressBook',
  AddAddressBook: 'AddAddressBook',
  Browser: 'Browser',
  BookMarks: 'BookMarks',
  WebIntro: 'Web.Intro',
  WebDApp: 'Web.dApp',
  Invest: 'Invest',
  Delegate: 'Delegate',
  SendTron: 'SendTron',
  Notifications: 'Notifications',
  DelegateDetail: 'Delegate.Detail',
  Redelegate: 'Redelegate',
  Undelegate: 'Undelegate',
  TABS: {
    Main: 'Main',
    Home: 'Home',
    Browser: 'Browser',
    Invest: 'Invest_Tab',
    Settings: 'Settings',
    SendNavigation: 'SendNavigation'
  },
  STACK: {
    Unlock: 'Unlock',
    MainTab: 'MainTab',
    Register: 'Register',
    Others: 'Others',
    AddressBooks: 'AddressBooks'
  }
};
export const ICONS_TITLE = {
  [SCREENS.TABS.Invest]: 'invest',
  [SCREENS.TABS.Main]: 'home',
  [SCREENS.TABS.Browser]: 'browser',
  [SCREENS.TABS.Settings]: 'setting',
  [SCREENS.TABS.SendNavigation]: ''
};

export const SCREENS_OPTIONS: IScreenOption = {
  [SCREENS.TABS.Invest]: {
    title: 'Invest'
  },
  [SCREENS.TABS.Main]: {
    title: 'Home'
  },
  [SCREENS.TABS.Browser]: {
    title: 'Browser'
  },
  [SCREENS.TABS.Settings]: {
    title: 'Settings'
  },
  [SCREENS.TABS.SendNavigation]: {
    title: ''
  },
  [SCREENS.Home]: {
    title: HEADER_KEY.showNetworkHeader,
    showTabBar: true
  },
  [SCREENS.TransactionDetail]: {
    title: 'Transaction Detail'
  },
  [SCREENS.RegisterMain]: {
    title: HEADER_KEY.notShowHeader
  },
  [SCREENS.RegisterVerifyMnemonicMain]: {
    title: HEADER_KEY.notShowHeader
  },
  [SCREENS.RegisterEnd]: {
    title: HEADER_KEY.notShowHeader
  },
  [SCREENS.RegisterRecoverMnemonicMain]: {
    title: HEADER_KEY.notShowHeader
  },
  [SCREENS.RegisterNewLedgerMain]: {
    title: HEADER_KEY.notShowHeader
  },
  [SCREENS.Tokens]: {
    title: HEADER_KEY.showNetworkHeader
  },
  [SCREENS.Nfts]: {
    title: HEADER_KEY.showNetworkHeader
  },
  [SCREENS.TokenDetail]: {
    title: 'Token Detail'
  },
  [SCREENS.NftsDetail]: {
    title: HEADER_KEY.showNetworkHeader
  },
  [SCREENS.TransferTokensScreen]: {
    title: HEADER_KEY.showNetworkHeader,
    showTabBar: true
  },
  [SCREENS.RegisterIntro]: {
    title: HEADER_KEY.notShowHeader
  },
  [SCREENS.RegisterNewUser]: {
    title: HEADER_KEY.notShowHeader
  },
  [SCREENS.RegisterNotNewUser]: {
    title: HEADER_KEY.notShowHeader
  },
  [SCREENS.RegisterNewMnemonic]: {
    title: HEADER_KEY.notShowHeader
  },
  [SCREENS.RegisterVerifyMnemonic]: {
    title: HEADER_KEY.notShowHeader
  },
  [SCREENS.RegisterRecoverMnemonic]: {
    title: HEADER_KEY.notShowHeader
  },
  [SCREENS.RegisterNewLedger]: {
    title: HEADER_KEY.notShowHeader
  },
  [SCREENS.Send]: {
    title: HEADER_KEY.showNetworkHeader
  },
  [SCREENS.TransferNFT]: {
    title: HEADER_KEY.showNetworkHeader
  },
  [SCREENS.Transactions]: {
    title: 'Transaction History'
  },
  [SCREENS.Camera]: {
    title: HEADER_KEY.notShowHeader
  },
  [SCREENS.Governance]: {
    title: HEADER_KEY.showNetworkHeader
  },
  [SCREENS.GovernanceDetails]: {
    title: HEADER_KEY.showNetworkHeader
  },
  [SCREENS.Dashboard]: {
    title: HEADER_KEY.showNetworkHeader
  },
  [SCREENS.SendTron]: {
    title: HEADER_KEY.showNetworkHeader
  },
  [SCREENS.Notifications]: {
    title: HEADER_KEY.showNetworkHeader
  },
  [SCREENS.NetworkSelect]: {
    title: HEADER_KEY.showNetworkHeader
  },
  [SCREENS.ValidatorDetails]: {
    title: HEADER_KEY.showNetworkHeader
  },
  [SCREENS.ValidatorList]: {
    title: HEADER_KEY.showNetworkHeader
  },
  [SCREENS.TxPendingResult]: {
    title: HEADER_KEY.notShowHeader
  },
  [SCREENS.TxSuccessResult]: {
    title: HEADER_KEY.notShowHeader
  },
  [SCREENS.TxFailedResult]: {
    title: HEADER_KEY.notShowHeader
  },
  [SCREENS.Setting]: {
    title: HEADER_KEY.notShowHeader,
    showTabBar: true
  },
  [SCREENS.SettingSelectAccount]: {
    title: 'Select Account'
  },
  [SCREENS.SettingViewPrivateData]: {
    title: 'Mnemonic Seed'
  },
  [SCREENS.SettingVersion]: {
    title: 'About'
  },
  [SCREENS.AddressBook]: {
    title: HEADER_KEY.showNetworkHeader
  },
  [SCREENS.AddAddressBook]: {
    title: 'Add new contract'
  },
  [SCREENS.Browser]: {
    title: 'Browser'
  },
  [SCREENS.BookMarks]: {
    title: 'Bookmarks'
  },
  [SCREENS.WebIntro]: {
    title: ''
  },
  [SCREENS.WebDApp]: {
    title: ''
  },
  [SCREENS.Invest]: {
    title: HEADER_KEY.showNetworkHeader,
    showTabBar: true
  },
  [SCREENS.Delegate]: {
    title: HEADER_KEY.showNetworkHeader
  },
  [SCREENS.DelegateDetail]: {
    title: HEADER_KEY.showNetworkHeader
  },
  [SCREENS.Redelegate]: {
    title: HEADER_KEY.showNetworkHeader
  },
  [SCREENS.Undelegate]: {
    title: HEADER_KEY.showNetworkHeader
  },
  [SCREENS.CreateANewWallet]: {
    title: null
  },
  [SCREENS.STACK.Unlock]: {
    title: ''
  },
  [SCREENS.STACK.MainTab]: {
    title: ''
  },
  [SCREENS.STACK.Register]: {
    title: ''
  },
  [SCREENS.STACK.Others]: {
    title: ''
  },
  [SCREENS.STACK.AddressBooks]: {
    title: ''
  }
};
export const TYPE_ACTIONS_COSMOS_HISTORY = {
  ['delegate']: 'delegate',
  ['send']: 'send',
  ['receive']: 'receive',
  ['withdraw_delegator_reward']: 'withdraw_delegator_reward',
  ['begin_redelegate']: 'begin_redelegate',
  ['begin_unbonding']: 'begin_unbonding',
  ['transfer']: 'transfer',
  ['execute']: 'execute',
  ['wasm/MsgExecuteContract']: '/cosmwasm.wasm.v1.MsgExecuteContract',
  ['bank/MsgSend']: '/cosmos.bank.v1beta1.MsgSend',
  ['distribution/MsgWithdrawDelegatorReward']:
    '/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward',
  ['staking/MsgDelegate']: '/cosmos.staking.v1beta1.MsgDelegate',
  ['staking/MsgUndelegate']: '/cosmos.staking.v1beta1.MsgUndelegate',
  ['submit_proposal']: 'submit_proposal',
  ['gov/MsgSubmitProposal']: '/cosmos.gov.v1beta1.MsgSubmitProposal'
};
export const TITLE_TYPE_ACTIONS_COSMOS_HISTORY = {
  [TYPE_ACTIONS_COSMOS_HISTORY.receive]: 'Receive'
};
export const EVENTS = {
  hiddenTabBar: 'hiddenTabBar'
};
