export const colorsCode = {
  // primary
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

  // secondary
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

  card: '#000',
  success: '#2DCE89',
  error: '#F5365C',
  'text-black-very-high': '#030C1D',
  'text-black-high': '#132340',
  'text-black-medium': '#2C4163',
  'text-black-low': '#83838F',
  'text-black-very-low': '#899BB6',
  'text-black-very-very-low': '#C6C6CD',
  'text-black-very-very-very-low': '#DCDCE3',
  'text-primary': '#4334F1',
  'border-white': '#F5F5F5',
  'border-pink': '#D7C4F5',
  white: '#ffffff',
  black: '#000',
  disabled: '#EEEEF3',
  divider: '#F5F5F5',
  transparent: '#fff', //rgba(255,255,255,0)
  'modal-backdrop': '#fff', //rgba(9,18,50,0.6)
  'card-modal-handle': '#DCDCE3',
  'setting-screen-background': '#FAFBFD',
  'camera-loading-background': '#fff', // rgba(255,255,255,0.95)
  'big-image-placeholder': '#E7E4EF',
  // red
  'red-10': '#F8EFFF',
  'red-50': '#F3F1F5',
  'red-500': '#E63A3A',
  'red-700': '#FF0000',
  'red-900': '#E53A3A',

  // gray
  'gray-10': '#F3F1F5',
  'gray-50': '#F2F2F7',
  'gray-100': '#F2F6FA',
  'gray-150': '#5F5E77',
  'gray-200': '#D1D1D6',
  'gray-300': '#C7C7CC',
  'gray-301': '#C7C7CC',
  'gray-400': '#AEAEB2',
  'gray-500': '#8E8E93',
  'gray-600': '#636366',
  'gray-700': '#5F5E77',
  'gray-800': '#3A3A3C',
  'gray-900': '#1C1C1E',

  //green
  'green-500': '#4BB10C',

  // purple
  'purple-10': '#F3F1F5',
  'purple-50': '#EAE9FF',
  'purple-100': '#E2DEEB',
  'purple-400': '#AE94DE',
  'purple-700': '#945EF8',
  'purple-900': '#8B1BFB',
  'purple-h1': '#7E58EA',
  // yellow
  'yellow-10': '#FFF6E9',
  //orange
  'orange-800': '#EF6363',
  //blue
  'blue-300': '#8C93A7',
  'blue-600': '#5F5E77',
  'blue/Border-50': '#EDEDF8',
  'bg-icon-coin': '#D3D3DA'
};
//item 1:Dark, item 2: Light
const modeColors = {
  //old colors
  primary: ['#1A1D25', '#fff'],
  'primary-text': ['#E2DEEB', '#1C1C1E'],
  'icon-text': ['#E2DEEB', '#8C93A7'],
  border: ['#83838F', '#E2DEEB'],
  'border-gray': ['#111', '#C6C6CD'],
  //splash-background
  'splash-background': ['#1E1E1E', '#FBF8FF'],
  'sub-primary': ['#434762', '#F3F1F5'],
  'sub-primary-text': ['#E2DEEB', '#3A3A3C'],
  //background
  background: ['#01040D', '#F5F5F5'],
  'sub-background': ['#2B2D3B', '#F8EFFF'],
  'card-background': ['#0E121D', '#fff'],
  'input-background': ['#2B2D3B', '#fff'],
  'primary-background': ['#945EF8', '#F3F1F5'],
  'plain-background': ['#01040D', '#fff'],
  'btn-primary-background': ['#945EF8', '#945EF8'],
  'btn-disable-background': [colorsCode['blue-600'], colorsCode['gray-300']],
  // border
  'border-purple-100-gray-800': [
    colorsCode['gray-800'],
    colorsCode['purple-100']
  ],
  // item
  item: ['#2B2D3B', '#fff'],
  icon: ['#E2DEEB', '#5F5E77'],
  'icon-purple-700-gray': ['#717177', colorsCode['purple-700']],
  // text
  label: ['#fff', '#3A3A3C'],
  'colored-label': ['#fff', '#945EF8'],
  'sub-text': ['#8C93A7', '#5F5E77'],
  'text-title': [colorsCode['white'], colorsCode['gray-900']],
  'text-btn-disable-color': [colorsCode['gray-500'], colorsCode['white']],
  'text-gray-900-purple-700': [
    colorsCode['purple-700'],
    colorsCode['gray-900']
  ],

  //onBoarding page
  'background-container': ['#01040D', '#FFFFFF'], //
  'text-title-sub-onBoarding': ['#7E58EA', '#1C1C1E'], //2 gray-900
  'text-content-onBoarding': ['#C7C7CC', '#5F5E77'], //1:gray-300, 2: Blue-600
  'background-btn-primary': ['#945EF8', '#8B1BFB'], //1: Purple/900, 2: Purple/900
  // 'text-btn-primary':["#FFFFFF","#FFFFFF"], //1: Purple/900, 2: Purple/900

  //Login page
  'text-title-login': ['#FFFFFF', '#1C1C1E'], // 2 gray-900
  // 'text-btn-secondary':["#8B1BFB","#8B1BFB"], //1:Purple/900  2 gray-900
  'background-btn-secondary': ['#F3F1F5', '#F3F1F5'], //1: 2 Purple/10
  'text-placeholder-input-login': ['#717177', '#AEAEB2'],
  'text-label-transaction-detail': ['#AEAEB2', '#636366'],
  'background-btn-disable-primary': ['#5F5E77', colorsCode['gray-300']],
  'background-btn-disable-danger': ['#5F5E77', '#D1D1D6'],
  'text-btn-disable-danger': ['#8E8E93', '#FFFFFF'],
  'text-btn-disabled-primary': ['#8E8E93', colorsCode['white']],
  'border-input-login': ['#3A3A3C', '#E2DEEB'],
  'background-input-modal': ['#0E121D', '#FFFFFF'],
  'text-value-input-login': ['#E2DEEB', '#1C1C1E'], //icon input eyes
  'text-label-input': ['#C7C7CC', '#48484A'], //note under input
  'text-dashboard': [colorsCode['blue-300'], '#48484A'], //note under input
  //login-success
  'text-content-success': ['#E2DEEB', '#5F5E77'],
  'text-btn-link': ['#945EF8', '#8B1BFB'],
  //modal-login-fail
  'title-modal-login-failed': ['#FFFFFF', '#000000'], //content-modal-login-fail
  'btn-icon': ['#945EF8', '#8B1BFB'],
  'btn-mnemonic': ['#945EF8', '#8B1BFB'], //border and text same color
  'background-btn-mnemonic-active': ['rgba(148, 94, 248, 0.25)', '#F3F1F5'],
  'text-btn-advance-options': ['#945EF8', '#8B1BFB'],
  //transaction progress
  'background-btn-input-modal': ['#0E121D', '#F3F1F5'],
  'text-value-input-modal': ['#8C93A7', '#636366'],
  'background-box': ['#0E121D', '#fff'],
  'background-item-list': ['#2B2D3B', '#F3F1F5'],
  'text-place-holder': ['#717177', '#8C93A7'],
  'background-box-shadow': ['#2B2D3B', '#FFFFFF'],
  'text-label-list': [colorsCode['gray-300'], colorsCode['blue-300']],
  'label-bottom-bar': ['#E2DEEB', '#5F5E77'],
  'border-bottom-tab': ['#3B2368', '#F0F0F0'],
  'on-background-toggle': ['#9AE796', '#A0F29B'],
  'off-background-toggle': ['#6F6F76', '#E9E9EA'],
  'bg-icon-token': ['#E5E5EA', '#F3F1F5'],
  'bg-circle-select-modal': [colorsCode['gray-400'], colorsCode['purple-100']],
  'divided-border-transaction-detail': ['#2B2D3B', '#EDEDF8'],
  skeleton: ['#36384a', '#f3f2f2'],
  'border-btn-social':['#808096','#808096'],
  'text-btn-social':[colorsCode['white'],'#717177']
};
const typeColorsTheme = () => modeColors;
type TypeTheme = { [P in keyof ReturnType<typeof typeColorsTheme>]: string };

const handleMode = (isDark): TypeTheme => {
  let data: any = {};
  if (isDark) {
    for (const property in modeColors) {
      data[property] = modeColors[property][0];
    }
  } else {
    for (const property in modeColors) {
      data[property] = modeColors[property][1];
    }
  }
  return data;
};

export const DarkModeColorsTheme: TypeTheme = { ...handleMode(true) };
export const LightModeColorsTheme: TypeTheme = { ...handleMode(false) };
