import { create } from '@storybook/theming/create';

export default create({
  base: 'light',

  colorPrimary: '#B9C800',
  colorSecondary: '#64A000',

  // UI
  appBg: 'white',
  appContentBg: 'white',
  appBorderColor: '#eee',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#212121',
  textInverseColor: '#424242',

  // Toolbar default and active colors
  barTextColor: '#212121',
  barSelectedColor: '#64A000',
  barBg: '#B9C800',

  // Form colors
  inputBg: 'white',
  inputBorder: '#9e9e9e',
  inputTextColor: '#212121',
  inputBorderRadius: 4,

  brandTitle: 'Cap Catalog',
  brandUrl: 'https://github.com/mmirca/cap-web-components',
  brandImage: '/assets/logo-bankia.svg',
});
