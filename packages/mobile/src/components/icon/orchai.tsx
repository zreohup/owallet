import React, { FunctionComponent } from 'react';
import Svg, { Path, G, ClipPath, Circle, Defs } from 'react-native-svg';

export const ScOraiIcon: FunctionComponent<{
  color?: string;
  size?: number;
  onPress?: () => void;
}> = ({ color = '#AEAEB2', size = 20, onPress }) => {
  return (
    <Svg width="71" height="71" viewBox="0 0 71 71">
      <Defs>
        <ClipPath id="clip-Path">
          <rect
            data-name="Rectangle 3074"
            width="59"
            height="59"
            transform="translate(0 0)"
            fill="#fff"
          />
        </ClipPath>
      </Defs>
      <G data-name="Group 14324" transform="translate(-1160 -376)">
        <Circle
          data-name="Ellipse 728"
          cx="35.5"
          cy="35.5"
          r="35.5"
          transform="translate(1160 376)"
          fill="#578498"
        />
        <G transform="translate(1166 382)" clip-Path="url(#clip-Path)">
          <Path
            data-name="Path 12026"
            d="M33.953,34.7,35.8,40.155H31.635L33.588,34.7Zm9.958,8.37H40.863v1.073h7.511V43.073h-3V34.489h3V33.416H40.863v1.073h3.047ZM30.2,44.146l1.03-2.876h4.957l.966,2.876h1.588l-3.863-10.73H32.687l-3.927,10.73ZM54.362,54.362H23.545V23.544H54.362Z"
            transform="translate(-9.831 -9.831)"
            fill="#fff"
          />
          <Path
            data-name="Path 12027"
            d="M55.158,81.276A29.33,29.33,0,0,0,81.276,55.158H77.649A25.365,25.365,0,0,1,55.158,77.949Z"
            transform="translate(-23.032 -23.032)"
            fill="#fff"
          />
          <Path
            data-name="Path 12028"
            d="M0,55.158A29.33,29.33,0,0,0,26.117,81.276V77.949A25.4,25.4,0,0,1,3.627,55.158Z"
            transform="translate(0 -23.032)"
            fill="#fff"
          />
          <Path
            data-name="Path 12029"
            d="M81.276,26.117A29.33,29.33,0,0,0,55.158,0V3.326A25.4,25.4,0,0,1,77.649,26.117Z"
            transform="translate(-23.032)"
            fill="#fff"
          />
          <Path
            data-name="Path 12030"
            d="M26.117,0A29.33,29.33,0,0,0,0,26.117H3.627A25.365,25.365,0,0,1,26.117,3.326Z"
            fill="#fff"
          />
        </G>
      </G>
    </Svg>
  );
};
