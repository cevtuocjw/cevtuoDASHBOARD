import { extendTheme, theme as base } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: (props) => ({
    body: {
      bg: mode('#fff', '#2d3142')(props),
    },
  }),
};

const colors = {
  api: {
    100: '#CAF0F8',
    200: '#ADE8F4',
    300: '#90E0EF',
    400: '#48CAE4',
    500: '#00B4D8',
    600: '#0096C7',
    700: '#0077B6',
    800: '#023E8A',
    900: '#03045E',
  },
};

const fonts = {
  heading: `Josefin Sans, ${base.fonts.heading}`,
};

const components = {
  Button: {
    variants: {
      pill: (props) => ({
        ...base.components.Button.variants.outline(props),
        rounded: 'full',
        color: 'gray.500',
      }),
    },
  },
};

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({ config, styles, colors, fonts, components });
export default theme;
