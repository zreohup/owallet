import React, { FunctionComponent, useEffect } from 'react';
import ReactDOM from 'react-dom';

import './styles/global.scss';

import { HashRouter, Route } from 'react-router-dom';

import { AccessPage, Secret20ViewingKeyAccessPage } from './pages/access';
import { RegisterPage } from './pages/register';
import { MainPage } from './pages/main';
import { LockPage } from './pages/lock';
import { SendPage } from './pages/send';
import { IBCTransferPage } from './pages/ibc-transfer';
import { SetKeyRingPage } from './pages/setting/keyring';

import { Banner } from './components/banner';

import {
  NotificationProvider,
  NotificationStoreProvider
} from './components/notification';
import { ConfirmProvider } from './components/confirm';
import { LoadingIndicatorProvider } from './components/loading-indicator';

import { configure } from 'mobx';
import { observer } from 'mobx-react-lite';

import { StoreProvider, useStore } from './stores';
import { KeyRingStatus } from '@owallet/background';
import { SignPage } from './pages/sign';
import { ChainSuggestedPage } from './pages/chain/suggest';
import Modal from 'react-modal';
import { SettingPage } from './pages/setting';
import { SettingLanguagePage } from './pages/setting/language';
import { SettingFiatPage } from './pages/setting/fiat';
import {
  SettingConnectionsPage,
  SettingSecret20ViewingKeyConnectionsPage
} from './pages/setting/connections';
import { AddressBookPage } from './pages/setting/address-book';
import { CreditPage } from './pages/setting/credit';
import { ChangeNamePage } from './pages/setting/keyring/change';
import { ClearPage } from './pages/setting/clear';
import { ExportPage } from './pages/setting/export';
import { LedgerGrantPage } from './pages/ledger';
import { AddTokenPage } from './pages/setting/token/add';
import { AddEvmTokenPage } from './pages/setting/token-evm/add';
import { ManageTokenPage } from './pages/setting/token/manage';

// import * as BackgroundTxResult from "../../background/tx/foreground";
import {
  AppIntlProvider,
  AdditonalIntlMessages,
  LanguageToFiatCurrency
} from '@owallet/common';

import manifest from './manifest.json';
import { Ethereum, OWallet } from '@owallet/provider';
import { InExtensionMessageRequester } from '@owallet/router-extension';
import { ExportToMobilePage } from './pages/setting/export-to-mobile';
import { LogPageViewWrapper } from './components/analytics';
import { ValidatorListPage } from './pages/stake/validator-list';
import { IntlProvider } from 'react-intl';
import { SignEthereumPage } from './pages/sign/sign-ethereum';
import { SendEvmPage } from './pages/send-evm';
import './ledger';
import { TokenPage } from './pages/token';
import { Menu } from './pages/main/menu';

const owallet = new OWallet(
  manifest.version,
  'core',
  new InExtensionMessageRequester()
);

const ethereum = new Ethereum(
  manifest.version,
  'core',
  '',
  new InExtensionMessageRequester()
);

//@ts-ignore
window.owallet = owallet;
//@ts-ignore
window.ethereum = ethereum;

// Make sure that icon file will be included in bundle
require('./public/assets/orai_wallet_logo.png');
require('./public/assets/icon/icon-16.png');
require('./public/assets/icon/icon-48.png');
require('./public/assets/icon/icon-128.png');
// require('./public/assets/icon/icon-orai-16.png');
// require('./public/assets/icon/icon-orai-48.png');
// require('./public/assets/icon/icon-orai-128.png');

configure({
  enforceActions: 'always' // Make mobx to strict mode.
});

Modal.setAppElement('#app');
Modal.defaultStyles = {
  content: {
    ...Modal.defaultStyles.content,
    minWidth: '300px',
    maxWidth: '600px',
    minHeight: '250px',
    maxHeight: '500px',
    left: '50%',
    right: 'auto',
    top: '50%',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)'
  },
  overlay: {
    zIndex: 1000,
    ...Modal.defaultStyles.overlay
  }
};

const StateRenderer: FunctionComponent = observer(() => {
  const { keyRingStore } = useStore();

  if (keyRingStore.status === KeyRingStatus.UNLOCKED) {
    return <MainPage />;
  } else if (keyRingStore.status === KeyRingStatus.LOCKED) {
    return <LockPage />;
  } else if (keyRingStore.status === KeyRingStatus.EMPTY) {
    browser.tabs.create({
      url: '/popup.html#/register'
    });
    window.close();
    return (
      <div style={{ height: '100%' }}>
        <Banner
          icon={require('./public/assets/orai_wallet_logo.png')}
          logo={require('./public/assets/logo.svg')}
          subtitle="Cosmos x EVM in one Wallet"
        />
      </div>
    );
  } else if (keyRingStore.status === KeyRingStatus.NOTLOADED) {
    return (
      <div style={{ height: '100%' }}>
        <Banner
          icon={require('./public/assets/orai_wallet_logo.png')}
          logo={require('./public/assets/logo.svg')}
          subtitle="Cosmos x EVM in one Wallet"
        />
      </div>
    );
  } else {
    return <div>Unknown status</div>;
  }
});

const AppIntlProviderWithStorage = ({ children }) => {
  const store = useStore();

  return (
    <AppIntlProvider
      additionalMessages={AdditonalIntlMessages}
      languageToFiatCurrency={LanguageToFiatCurrency}
      // language without region code
      defaultLocale={navigator.language.split(/[-_]/)[0]}
      storage={store.uiConfigStore.Storage}
    >
      {({ language, messages, automatic }) => (
        <IntlProvider
          locale={language}
          messages={messages}
          key={`${language}${automatic ? '-auto' : ''}`}
        >
          {children}
        </IntlProvider>
      )}
    </AppIntlProvider>
  );
};

ReactDOM.render(
  <StoreProvider>
    <AppIntlProviderWithStorage>
      <LoadingIndicatorProvider>
        <NotificationStoreProvider>
          <NotificationProvider>
            <ConfirmProvider>
              <HashRouter>
                <LogPageViewWrapper>
                  <Route exact path="/" component={StateRenderer} />
                  <Route exact path="/unlock" component={LockPage} />
                  <Route exact path="/access" component={AccessPage} />
                  <Route exact path="/token" component={TokenPage} />
                  <Route exact path="/menu" component={Menu} />
                  <Route
                    exact
                    path="/access/viewing-key"
                    component={Secret20ViewingKeyAccessPage}
                  />
                  <Route exact path="/register" component={RegisterPage} />
                  <Route exact path="/send" component={SendPage} />
                  <Route exact path="/send-evm" component={SendEvmPage} />
                  <Route
                    exact
                    path="/ibc-transfer"
                    component={IBCTransferPage}
                  />
                  <Route exact path="/setting" component={SettingPage} />
                  <Route
                    exact
                    path="/ledger-grant"
                    component={LedgerGrantPage}
                  />
                  <Route
                    exact
                    path="/setting/language"
                    component={SettingLanguagePage}
                  />
                  <Route
                    exact
                    path="/setting/fiat"
                    component={SettingFiatPage}
                  />
                  <Route
                    exact
                    path="/setting/connections"
                    component={SettingConnectionsPage}
                  />
                  <Route
                    exact
                    path="/setting/connections/viewing-key/:contractAddress"
                    component={SettingSecret20ViewingKeyConnectionsPage}
                  />
                  <Route
                    exact
                    path="/setting/address-book"
                    component={AddressBookPage}
                  />
                  <Route
                    exact
                    path="/setting/export-to-mobile"
                    component={ExportToMobilePage}
                  />
                  <Route exact path="/setting/credit" component={CreditPage} />
                  <Route
                    exact
                    path="/setting/set-keyring"
                    component={SetKeyRingPage}
                  />
                  <Route
                    exact
                    path="/setting/export/:index"
                    component={ExportPage}
                  />
                  <Route
                    exact
                    path="/setting/clear/:index"
                    component={ClearPage}
                  />
                  <Route
                    exact
                    path="/setting/keyring/change/name/:index"
                    component={ChangeNamePage}
                  />
                  <Route
                    exact
                    path="/setting/token/add"
                    component={AddTokenPage}
                  />
                  <Route
                    exact
                    path="/setting/token-evm/add"
                    component={AddEvmTokenPage}
                  />
                  <Route
                    exact
                    path="/setting/token/manage"
                    component={ManageTokenPage}
                  />
                  <Route
                    exact
                    path="/stake/validator-list"
                    component={ValidatorListPage}
                  />
                  <Route path="/sign" component={SignPage} />
                  <Route path="/sign-ethereum" component={SignEthereumPage} />
                  <Route path="/suggest-chain" component={ChainSuggestedPage} />
                </LogPageViewWrapper>
              </HashRouter>
            </ConfirmProvider>
          </NotificationProvider>
        </NotificationStoreProvider>
      </LoadingIndicatorProvider>
    </AppIntlProviderWithStorage>
  </StoreProvider>,
  document.getElementById('app')
);
