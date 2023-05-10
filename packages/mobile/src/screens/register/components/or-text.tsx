import { View } from 'react-native';
import React from 'react';
import { Text } from '@src/components/text';
import { useTheme } from '@src/themes/theme-provider';

const OrText = () => {
  const { colors } = useTheme();
  return (
    <Text
      typo="bold"
      color={colors['icon-purple-700-gray']}
      style={{
        textAlign: 'center',
        paddingVertical:16
      }}
      variant="body1"
    >
      OR
    </Text>
  );
};

export default OrText;
