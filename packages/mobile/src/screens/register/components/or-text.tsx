import { View } from 'react-native';
import React from 'react';
import { Text } from '@src/components/text';
import { useTheme } from '@src/themes/theme-provider';

const OrText = () => {
  const { colors } = useTheme();
  return (
    <Text
      weight="500"
      color={colors['text-place-holder']}
      style={{
        textAlign: 'center',
        paddingVertical: 16
      }}
      variant="body1"
    >
      OR
    </Text>
  );
};

export default OrText;
