import React, { FunctionComponent } from 'react';
import { observer } from 'mobx-react-lite';
import { PageWithScrollView } from '../../components/page';
import { StyleSheet, View } from 'react-native';
import { spacing, typography } from '../../themes';
import { CText as Text } from '../../components/text';
import { DashboardCard } from '../home/dashboard';
import { BlockCard } from './components/block';
import { InfoCard } from './components/info';
import { useTheme } from '@react-navigation/native';

export const DashBoardScreen: FunctionComponent = observer(() => {
  const { colors } = useTheme();

  return (
    <PageWithScrollView>
      <View style={{ paddingVertical: spacing['24'] }}>
        <Text
          style={{
            ...typography['h3'],
            fontWeight: '700',
            textAlign: 'center',
            color: colors['gray-700'],
            paddingBottom: spacing['24']
          }}
        >
          Dashboard
        </Text>
        <BlockCard />
        <DashboardCard canView={false} />
        <InfoCard />
      </View>
    </PageWithScrollView>
  );
});
