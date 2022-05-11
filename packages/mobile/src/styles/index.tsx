import { createStyleProvider } from './builder';
import { EnumTextTransform, EnumTextDecorationLine } from './builder/types';
import { Platform } from 'react-native';
import { getPlatformFontWeight } from './builder/utils';

export const Colors = {
  primary: '#4762E7',
  'primary-10': '#F1F3FC',
  'primary-50': '#E2E8FF',
  'primary-100': '#B3BEF7',
  'primary-200': '#8E9FF2',
  'primary-300': '#7388F0',
  'primary-400': '#4762E7',
  'primary-500': '#2644DB',
  'primary-600': '#102FCB',
  'primary-700': '#0320B4',
  'primary-800': '#001A9A',
  'primary-900': '#00157D',
  secondary: '#FF63B4',
  'secondary-50': '#FCD1F4',
  'secondary-100': '#F3B1E1',
  'secondary-200': '#FA9DD9',
  'secondary-300': '#FF86CE',
  'secondary-400': '#FF63B4',
  'secondary-500': '#E753A8',
  'secondary-600': '#C84699',
  'secondary-700': '#A23A83',
  'secondary-800': '#762C64',
  'secondary-900': '#471D40',
  danger: '#F5365C',
  'danger-10': '#FFF1F4',
  'danger-50': '#FFD8E0',
  'danger-100': '#FFBCC9',
  'danger-200': '#FC91A6',
  'danger-300': '#FD5778',
  'danger-400': '#F5365C',
  'danger-500': '#DD1E44',
  'danger-600': '#BC1638',
  'danger-700': '#9A0F2A',
  'danger-800': '#810A22',
  'danger-900': '#65081B',
  'profile-sky-blue': '#80CAFF',
  'profile-mint': '#47DDE7',
  'profile-green': '#78F0C5',
  'profile-yellow-green': '#ADE353',
  'profile-purple': '#D378FE',
  'profile-red': '#FF6D88',
  'profile-orange': '#FEC078',
  'profile-yellow': '#F2ED64',
  icon: '#2C4163',
  card: 'rgba(255,255,255,0.95)',
  success: '#2DCE89',
  error: '#F5365C',
  'text-black-very-high': '#030C1D',
  'text-black-high': '#132340',
  'text-black-medium': '#2C4163',
  'text-black-low': '#83838F',
  'text-black-very-low': '#899BB6',
  'text-black-very-very-low': '#C6C6CD',
  'text-black-very-very-very-low': '#DCDCE3',
  'border-gray': '#C6C6CD',
  'border-white': '#F5F5F5',
  white: '#fff',
  black: '#000',
  disabled: '#EEEEF3',
  divider: '#F5F5F5',
  transparent: 'rgba(255,255,255,0)',
  'modal-backdrop': 'rgba(9,18,50,0.6)',
  'card-modal-handle': '#DCDCE3',
  'setting-screen-background': '#FAFBFD',
  'camera-loading-background': 'rgba(255,255,255,0.95)',
  'big-image-placeholder': '#E7E4EF'
};

export const { StyleProvider, useStyle } = createStyleProvider({
  custom: {
    h1: {
      fontSize: 32,
      lineHeight: 56,
      letterSpacing: 0.3,
      ...getPlatformFontWeight('700')
    },
    h2: {
      fontSize: 28,
      lineHeight: 36,
      letterSpacing: 0.3,
      ...getPlatformFontWeight('700')
    },
    h3: {
      fontSize: 24,
      lineHeight: 32,
      letterSpacing: 0.3,
      ...getPlatformFontWeight('700')
    },
    h4: {
      fontSize: 20,
      lineHeight: 28,
      letterSpacing: 0.3,
      ...getPlatformFontWeight('600')
    },
    h5: {
      fontSize: 18,
      lineHeight: 24,
      letterSpacing: 0.3,
      ...getPlatformFontWeight('600')
    },
    h6: {
      fontSize: 16,
      lineHeight: 22,
      letterSpacing: 0.2,
      ...getPlatformFontWeight('600')
    },
    h7: {
      fontSize: 14,
      lineHeight: 20,
      letterSpacing: 0.2,
      ...getPlatformFontWeight('600')
    },
    subtitle1: {
      fontSize: 18,
      lineHeight: 24,
      ...getPlatformFontWeight('500')
    },
    subtitle2: {
      fontSize: 16,
      lineHeight: 22,
      ...getPlatformFontWeight('500')
    },
    subtitle3: {
      fontSize: 14,
      lineHeight: 21,
      letterSpacing: 0.1,
      ...getPlatformFontWeight('500')
    },
    body1: {
      fontSize: 18,
      lineHeight: 26,
      ...getPlatformFontWeight('400')
    },
    body2: {
      fontSize: 16,
      lineHeight: 22,
      letterSpacing: 0.1,
      ...getPlatformFontWeight('400')
    },
    body3: {
      fontSize: 14,
      lineHeight: 20,
      letterSpacing: 0.1,
      ...getPlatformFontWeight('400')
    },
    'text-button1': {
      fontSize: 18,
      lineHeight: 20,
      letterSpacing: 0.2,
      ...getPlatformFontWeight('600')
    },
    'text-button2': {
      fontSize: 16,
      lineHeight: 19,
      letterSpacing: 0.2,
      ...getPlatformFontWeight('600')
    },
    'text-button3': {
      fontSize: 14,
      lineHeight: 18,
      letterSpacing: 0.2,
      textTransform: 'capitalize' as EnumTextTransform,
      ...getPlatformFontWeight('600')
    },
    'text-caption1': {
      fontSize: 13,
      lineHeight: 18,
      letterSpacing: 0.3,
      ...getPlatformFontWeight('400')
    },
    'text-caption2': {
      fontSize: 12,
      lineHeight: 18,
      letterSpacing: 0.3,
      ...getPlatformFontWeight('400')
    },
    'text-overline': {
      fontSize: 11,
      lineHeight: 16,
      letterSpacing: 0.5,
      textTransform: 'uppercase' as EnumTextTransform,
      ...getPlatformFontWeight('400')
    },
    'text-underline': {
      textDecorationLine: 'underline' as EnumTextDecorationLine
    },
    // This style is for the text input and aims to mock the body2 style.
    // In IOS, it is hard to position the input text to the middle vertically.
    // So, to solve this problem, decrease the line height and add the additional vertical padding.
    'body2-in-text-input': Platform.select({
      ios: {
        fontSize: 16,
        lineHeight: 19,
        letterSpacing: 0.25,
        paddingTop: 1.5,
        paddingBottom: 1.5,
        ...getPlatformFontWeight('400')
      },
      android: {
        fontSize: 16,
        lineHeight: 22,
        letterSpacing: 0.25,
        ...getPlatformFontWeight('400')
      }
    })
  },
  colors: {
    ...Colors,
    ...{
      'splash-background': '#FBF8FF',

      // Belows are for the button props and may not be used as styles.
      'rect-button-default-ripple': '#CCCCCC',
      // Active opacity is 0.055 by default.
      'rect-button-default-underlay': Colors['text-black-medium'],

      'drawer-rect-button-underlay': '#F1F3FC',

      // Belows are for the button props and may not be used as styles.
      'button-primary': Colors.primary,
      'button-secondary': Colors.secondary,
      'button-danger': Colors.danger,
      'button-primary-text-pressed': Colors['primary-500'],
      'button-secondary-text-pressed': Colors['secondary-500'],
      'button-danger-text-pressed': Colors['danger-500'],
      'button-primary-disabled': Colors['text-black-very-very-low'],
      'button-secondary-disabled': Colors['text-black-very-very-low'],
      'button-danger-disabled': Colors['text-black-very-very-low'],
      'button-primary-light': Colors['primary-50'],
      'button-secondary-light': Colors['secondary-50'],
      'button-danger-light': Colors['danger-50'],
      // For Android, note that you can't set the opacity of the ripple color.
      'button-primary-fill-ripple': Colors['primary-600'],
      'button-primary-light-ripple': Colors['primary-100'],
      'button-primary-outline-ripple': Colors['primary-100'],
      'button-secondary-fill-ripple': Colors['secondary-600'],
      'button-secondary-light-ripple': Colors['secondary-100'],
      'button-secondary-outline-ripple': Colors['secondary-100'],
      'button-danger-fill-ripple': Colors['danger-600'],
      'button-danger-light-ripple': Colors['danger-100'],
      'button-danger-outline-ripple': Colors['danger-100'],
      // For IOS, note that we just set the active opacity as 1, thus, unlike Android, it is opaque.
      'button-primary-fill-underlay': Colors['primary-500'],
      'button-primary-light-underlay': Colors['primary-100'],
      'button-primary-outline-underlay': Colors['primary-50'],
      'button-secondary-fill-underlay': Colors['secondary-500'],
      'button-secondary-light-underlay': Colors['secondary-100'],
      'button-secondary-outline-underlay': Colors['secondary-50'],
      'button-danger-fill-underlay': Colors['danger-500'],
      'button-danger-light-underlay': Colors['danger-100'],
      'button-danger-outline-underlay': Colors['danger-50'],

      // Belows are for the chip props and may not be used as styles.
      'chip-light-primary': Colors['primary-50'],
      'chip-light-secondary': Colors['secondary-50'],
      'chip-light-danger': Colors['danger-100'],

      // Belows are for the loading spinner props and may not be used as styles.
      'loading-spinner': Colors['text-black-low']
    }
  },
  widths: {
    full: '100%',
    half: '50%',
    '1': 1,
    '4': 4,
    '8': 8,
    '12': 12,
    '16': 16,
    '20': 20,
    '24': 24,
    '32': 32,
    '34': 34,
    '38': 38,
    '40': 40,
    '44': 44,
    '54': 54,
    '56': 56,
    '58': 58,
    '72': 72,
    '80': 80,
    '122': 122,
    '160': 160,
    '240': 240,
    '292': 292,
    '300': 300,

    'card-gap': 12,
    'page-pad': 20
  },
  heights: {
    full: '100%',
    half: '50%',
    '0.5': 0.5,
    '1': 1,
    '4': 4,
    '5': 5,
    '8': 8,
    '12': 12,
    '16': 16,
    '18': 18,
    '20': 20,
    '24': 24,
    '30': 30,
    '32': 32,
    '36': 36,
    '38': 38,
    '40': 40,
    '44': 44,
    '50': 50,
    '56': 56,
    '58': 58,
    '62': 62,
    '66': 66,
    '64': 64,
    '72': 72,
    '74': 74,
    '80': 80,
    '84': 84,
    '87': 87,
    '90': 90,
    '104': 104,
    '116': 116,
    '122': 122,
    '214': 214,
    '400': 400,
    '600': 600,

    'button-small': 38,
    'button-default': 48,
    'button-large': 52,
    'governance-card-body-placeholder': 130,

    'card-gap': 12,
    'page-pad': 20
  },
  paddingSizes: {
    '0': 0,
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '8': 8,
    '10': 10,
    '11': 11,
    '12': 12,
    '14': 14,
    '15': 15,
    '16': 16,
    '18': 18,
    '20': 20,
    '22': 22,
    '24': 24,
    '25.5': 25.5,
    '26': 26,
    '28': 28,
    '31': 31,
    '32': 32,
    '36': 36,
    '38': 38,
    '40': 40,
    '42': 42,
    '48': 48,
    '52': 52,
    '64': 64,
    '66': 66,

    page: 20,
    'card-horizontal': 20,
    'card-vertical': 20,
    'card-vertical-half': 10,
    'card-gap': 12
  },
  marginSizes: {
    '0': 0,
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '6': 6,
    '8': 8,
    '10': 10,
    '12': 12,
    '14': 14,
    '15': 15,
    '16': 16,
    '18': 18,
    '20': 20,
    '21': 21,
    '24': 24,
    '28': 28,
    '30': 30,
    '32': 32,
    '34': 34,
    '38': 38,
    '40': 40,
    '44': 44,
    '46': 46,
    '48': 48,
    '58': 58,
    '64': 64,
    '68': 68,
    '82': 82,
    '87': 87,
    '88': 88,
    '92': 92,
    '102': 102,
    '106': 106,
    '150': 150,
    '288': 288,

    page: 20,
    'card-horizontal': 20,
    'card-vertical': 20,
    'card-gap': 12
  },
  borderWidths: {
    '0': 0,
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '6': 6,
    '8': 8,
    '12': 12,
    '16': 16,
    '32': 32,
    '64': 64
  },
  borderRadiuses: {
    '0': 0,
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '6': 6,
    '8': 8,
    '12': 12,
    '16': 16,
    '32': 32,
    '64': 64
  },
  opacities: {
    transparent: 0,
    '10': 0.1,
    '20': 0.2,
    '30': 0.3,
    '40': 0.4,
    '50': 0.5,
    '60': 0.6,
    '70': 0.7,
    '80': 0.8,
    '90': 0.9,
    '100': 1
  }
});
