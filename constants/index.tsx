import { MenuIcons } from '../components/MenuIcon/MenuIcon';
import { Window, WindowThemeType } from '../types';
import { MotorheadzWindow } from '../components/windows/MotorheadzWindow';

export const links = [
  {
    name: 'projects',
    href: 'https://channel53.myshopify.com/',
    icon: MenuIcons.INSTAGRAM
  },
  {
    name: 'socials',
    href: 'https://channel53.myshopify.com/',
    icon: MenuIcons.INSTAGRAM
  }
];

const light: WindowThemeType = {
  theme: 'light',
  windowBackground: '#c3c6cb',
  windowAccent: '#BBBBBB',
  windowBorder: '#afb2b7',
  urlTextColor: '#696b6e',
  primaryButtonBackground: '#ff0000',
  primaryButtonBorder: '#c50022',
  primaryButtonText: '#6B001C',
  secondaryButtonBackground: '#fcff00',
  secondaryButtonBorder: '#ffac1d',
  secondaryButtonText: '#8E6900',
  contentBackground: '#f0f2f5',
  textPrimary: '#000000',
  textSecondary: '#696b6e',
  dividerColor: '#696b6e'
};

const dark: WindowThemeType = {
  theme: 'dark',
  windowBackground: '#282828',
  windowAccent: '#1A1A1A',
  windowBorder: '#1E1E1E',
  urlTextColor: '#4D4D4D',
  primaryButtonBackground: '#ff0000',
  primaryButtonBorder: '#c50022',
  primaryButtonText: '#6B001C',
  secondaryButtonBackground: '#fcff00',
  secondaryButtonBorder: '#ffac1d',
  secondaryButtonText: '#8E6900',
  contentBackground: '#161616',
  textPrimary: '#FFFFFF',
  textSecondary: '#C3C3C3',
  dividerColor: '#4D4D4D'
};

export const desktopWindows: Record<string, Window> = {
  motorheadz: {
    urlLabel: 'motorheadz.xyz',
    content: <MotorheadzWindow theme={dark} />,
    theme: dark
  },
  machiMarket: {
    urlLabel: 'machi.market',
    content: <div>this is machi.market</div>,
    theme: dark
  },
  swatches: {
    urlLabel: 'swatches',
    content: <div>this is swatches</div>,
    theme: dark
  }
};
