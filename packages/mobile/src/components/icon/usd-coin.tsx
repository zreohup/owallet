import React, { FunctionComponent } from 'react';
import Svg, { Path } from 'react-native-svg';

export const UsdcIcon: FunctionComponent<{
  color?: string;
  size?: number;
  onPress?: () => void;
}> = ({ color = '#AEAEB2', size = 20, onPress }) => {
  return (
    <Svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <Path
        d="M20 40C31.084 40 40 31.084 40 20C40 8.916 31.084 0 20 0C8.916 0 0 8.916 0 20C0 31.084 8.916 40 20 40Z"
        fill="#2775CA"
      />
      <Path
        d="M25.4999 23.166C25.4999 20.25 23.7499 19.25 20.2499 18.832C17.7499 18.498 17.2499 17.832 17.2499 16.666C17.2499 15.5 18.0839 14.75 19.7499 14.75C21.2499 14.75 22.0839 15.25 22.4999 16.5C22.5839 16.75 22.8339 16.916 23.0839 16.916H24.4179C24.7519 16.916 25.0019 16.666 25.0019 16.332V16.248C24.6679 14.414 23.1679 12.998 21.2519 12.832V10.832C21.2519 10.498 21.0019 10.248 20.5859 10.166H19.3359C19.0019 10.166 18.7519 10.416 18.6699 10.832V12.748C16.1699 13.082 14.5859 14.748 14.5859 16.832C14.5859 19.582 16.2519 20.666 19.7519 21.082C22.0859 21.498 22.8359 21.998 22.8359 23.332C22.8359 24.666 21.6699 25.582 20.0859 25.582C17.9199 25.582 17.1699 24.666 16.9199 23.416C16.8359 23.082 16.5859 22.916 16.3359 22.916H14.9199C14.5859 22.916 14.3359 23.166 14.3359 23.5V23.584C14.6699 25.668 16.0019 27.168 18.7519 27.584V29.584C18.7519 29.918 19.0019 30.168 19.4179 30.25H20.6679C21.0019 30.25 21.2519 30 21.3339 29.584V27.584C23.8319 27.166 25.4999 25.416 25.4999 23.166Z"
        fill="white"
      />
      <Path
        d="M15.7502 31.916C9.25022 29.582 5.91622 22.332 8.33422 15.916C9.58422 12.416 12.3342 9.74998 15.7502 8.49998C16.0842 8.33398 16.2502 8.08398 16.2502 7.66598V6.49998C16.2502 6.16598 16.0842 5.91598 15.7502 5.83398C15.6662 5.83398 15.5002 5.83398 15.4162 5.91798C7.50022 8.41798 3.16622 16.834 5.66622 24.752C7.16622 29.418 10.7502 33.002 15.4162 34.502C15.7502 34.668 16.0822 34.502 16.1662 34.168C16.2502 34.084 16.2502 34.002 16.2502 33.834V32.668C16.2502 32.416 16.0002 32.084 15.7502 31.916ZM24.5822 5.91598C24.2482 5.74998 23.9162 5.91598 23.8322 6.24998C23.7482 6.33398 23.7482 6.41598 23.7482 6.58398V7.74998C23.7482 8.08398 23.9982 8.41598 24.2482 8.58398C30.7482 10.918 34.0822 18.168 31.6642 24.584C30.4142 28.084 27.6642 30.75 24.2482 32C23.9142 32.166 23.7482 32.416 23.7482 32.834V34C23.7482 34.334 23.9142 34.584 24.2482 34.666C24.3322 34.666 24.4982 34.666 24.5822 34.582C32.4982 32.082 36.8322 23.666 34.3322 15.748C32.8322 11 29.1662 7.41598 24.5822 5.91598Z"
        fill="white"
      />
    </Svg>
  );
};
