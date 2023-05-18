import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  ImageStyle
} from 'react-native';
import Icon, { IconProps } from './icomoon';
export interface IOWIconProps extends IconProps {
  type?: 'images';
  source?: ImageSourcePropType;
  styleImage?: ImageStyle;
}
const OWIcon = ({ type, ...props }: IOWIconProps) => {
  if (type == 'images')
    return (
      <Image
        style={{
          width: props.size,
          height: props.size,
          tintColor: props.color,
          ...props.styleImage
        }}
        source={props.source}
        resizeMode="contain"
      />
    );
  return <Icon {...props} />;
};

export default OWIcon;

const styles = StyleSheet.create({});
