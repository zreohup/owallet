import React, { FunctionComponent, useEffect, useState } from 'react';
import {
  Image,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  StyleSheet,
  FlatList
} from 'react-native';
import { Text } from '@src/components/text';
import { useStyle } from '../../styles';
import { TextInput } from '../../components/input';
import { PageWithScrollView, PageWithView } from '../../components/page';
import { useNavigation } from '@react-navigation/core';
import {
  BrowserSectionTitle
  // BrowserSectionModal,
} from './components/section-title';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { _keyExtract, checkValidDomain } from '../../utils/helper';
import { useStore } from '../../stores';
import { SwtichTab } from './components/switch-tabs';
import { BrowserFooterSection } from './components/footer-section';
import { WebViewStateContext } from './components/context';
import { observer } from 'mobx-react-lite';
import { SearchLightIcon, XIcon } from '../../components/icon';
import { useTheme } from '@src/themes/theme-provider';
import OWFlatList from '@src/components/page/ow-flat-list';

export const BrowserBookmark: FunctionComponent<{}> = ({}) => {
  const style = useStyle();
  const navigation = useNavigation();
  const { colors } = useTheme();

  return (
    <View
      style={{ borderBottomColor: colors['border'], borderBottomWidth: 0.2 }}
    >
      <View
        style={style.flatten([
          'width-full',
          'height-66',
          'flex-row',
          'justify-between',
          'items-center',
          'padding-20'
        ])}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: '700',
            color: colors['label']
          }}
        >
          Bookmarks
          <Text
            style={{
              fontSize: 18,
              fontWeight: '400',
              color: colors['label']
            }}
          >
            (recent history)
          </Text>
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('BookMarks')}>
          <Text weight="400" size={14} color={colors['purple-700']}>
            View all
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const Browser: FunctionComponent<any> = observer((props) => {
  const style = useStyle();
  const [isSwitchTab, setIsSwitchTab] = useState(false);
  const navigation = useNavigation();
  const { deepLinkUriStore, browserStore } = useStore();
  const { colors } = useTheme();

  useEffect(() => {
    navigation
      .getParent()
      ?.setOptions({ tabBarStyle: { display: 'none' }, tabBarVisible: false });
    return () =>
      navigation
        .getParent()
        ?.setOptions({ tabBarStyle: undefined, tabBarVisible: undefined });
  }, [navigation]);

  const [url, setUrl] = useState('');
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    setTimeout(function () {
      if (checkValidDomain(props?.route?.params?.url?.toLowerCase())) {
        const tabUri =
          props.route.params.url?.toLowerCase().indexOf('http') >= 0
            ? props.route.params.url?.toLowerCase()
            : 'https://' + props.route.params?.url?.toLowerCase();
        navigation.navigate('Web.dApp', {
          name: tabUri,
          uri: tabUri
        });
      }
    }, 1000);
  }, [props?.route?.params?.url]);

  useEffect(() => {
    setTimeout(function () {
      deepLinkUriStore.updateDeepLink('');
      if (checkValidDomain(deepLinkUriStore.link.toLowerCase())) {
        const tabUri =
          deepLinkUriStore.link?.toLowerCase().indexOf('http') >= 0
            ? deepLinkUriStore.link?.toLowerCase()
            : 'https://' + deepLinkUriStore.link?.toLowerCase();
        navigation.navigate('Web.dApp', {
          name: tabUri,
          uri: tabUri
        });
      }
    }, 1000);
  }, []);

  const onHandleUrl = (uri) => {
    let currentUri = uri ?? url;
    if (currentUri !== '') {
      if (checkValidDomain(currentUri?.toLowerCase())) {
        const tab = {
          id: Date.now(),
          name: currentUri,
          uri:
            currentUri?.toLowerCase().indexOf('http') >= 0
              ? currentUri?.toLowerCase()
              : 'https://' + currentUri?.toLowerCase()
        };

        let tabOpened = browserStore.checkTabOpen(tab);

        browserStore.updateSelectedTab(tabOpened ?? tab);
        if (!!!tabOpened) {
          browserStore.addTab(tab);
        }
        setUrl(currentUri);
        navigation.navigate('Web.dApp', tab);
      } else {
        let uri = `https://www.google.com/search?q=${currentUri ?? ''}`;
        navigation.navigate('Web.dApp', {
          name: 'Google',
          uri
        });
      }
    }
  };

  const handleClickUri = (uri: string, name: string) => {
    navigation.navigate('Web.dApp', {
      name,
      uri
    });
  };

  const handlePressItem = ({ name, uri }) => {
    handleClickUri(uri, name);
    setIsSwitchTab(false);
    setUrl(uri);
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const renderBrowser = () => {
    return (
      <View
        style={styles.container}
        onLayout={() => {
          if (isKeyboardVisible) Keyboard.dismiss();
        }}
      >
        <TextInput
          containerStyle={{
            width: '100%',
            paddingHorizontal: 20
          }}
          inputStyle={[
            StyleSheet.flatten([
              style.flatten([
                'flex-row',
                'items-center',
                'padding-16',
                'border-radius-8'
              ])
            ]),
            {
              backgroundColor: colors['background'],
              borderColor: colors['border']
            }
          ]}
          returnKeyType={'next'}
          placeholder={'Search website'}
          placeholderTextColor={'#AEAEB2'}
          onSubmitEditing={(e) => onHandleUrl(e.nativeEvent.text)}
          value={url}
          onChangeText={(txt) => setUrl(txt.toLowerCase())}
          inputLeft={
            <TouchableOpacity style={{ paddingRight: 16 }}>
              <SearchLightIcon />
            </TouchableOpacity>
          }
          inputRight={
            url ? (
              <TouchableOpacity
                style={{ width: 30 }}
                onPress={() => setUrl('')}
              >
                <XIcon />
              </TouchableOpacity>
            ) : null
          }
        />
        <BrowserBookmark />
        <OWFlatList
          style={{
            paddingHorizontal: 20,
            paddingTop: 20
          }}
          data={browserStore.getBookmarks}
          keyExtractor={_keyExtract}
          renderItem={({ item }) => {
            const e = item;
            return (
              <TouchableOpacity
                key={e.id ?? e.uri}
                style={style.flatten([
                  'height-44',
                  'margin-bottom-15',
                  'flex-row'
                ])}
                onPress={() => onHandleUrl(e.uri)}
              >
                <View style={style.flatten(['padding-top-5'])}>
                  <Image
                    style={{
                      width: 20,
                      height: 22
                    }}
                    source={e.logo}
                    fadeDuration={0}
                  />
                </View>
                <View style={style.flatten(['padding-x-15'])}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '700',
                      color: colors['label']
                    }}
                  >
                    {e.name}
                  </Text>
                  <Text style={{ color: colors['sub-text'], fontSize: 14 }}>
                    {e.uri}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  };

  return (
    <PageWithView disableSafeArea backgroundColor={colors['background']}>
      {isSwitchTab ? (
        <SwtichTab onPressItem={handlePressItem} />
      ) : (
        renderBrowser()
      )}
      <WebViewStateContext.Provider
        value={{
          webView: null,
          name: 'Browser',
          url: url,
          canGoBack: false,
          canGoForward: false
        }}
      >
        <BrowserFooterSection
          isSwitchTab={isSwitchTab}
          setIsSwitchTab={setIsSwitchTab}
          onHandleUrl={onHandleUrl}
          typeOf={'browser'}
        />
      </WebViewStateContext.Provider>
    </PageWithView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 80,
    marginTop:24
  }
});
