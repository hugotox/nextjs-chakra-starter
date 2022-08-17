import { Theme as ChakraTheme, extendTheme } from '@chakra-ui/react'

import { Button, Heading, Link } from './componentStyles'

export type ColorNames = keyof ChakraTheme['colors']

export interface Theme extends ChakraTheme {}

export const theme = extendTheme({
  colors: {
    // override colors here
    primary: {
      50: '#e4fdfe',
      100: '#c1ebf1',
      200: '#9bdae6',
      300: '#74c6da',
      400: '#50b1d0',
      500: '#3994b6',
      600: '#2c708f',
      700: '#1d4d66',
      800: '#0e2d3e',
      900: '#001119',
    },
  },
  components: {
    Button,
    Heading,
    Link,
  },
  fontWeights: {
    medium: 600, // makes medium=semibold
  },
  fonts: {
    body: 'Open Sans, Helvetica, Arial, sans-serif',
    heading: 'Open Sans, Helvetica, Arial, sans-serif;',
    mono: "ui-monospace, SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace",
  },
  initialColorMode: 'light',
  shadows: {
    outline: '0 0 0 3px var(--chakra-colors-gray-300)',
  },
  useSystemColorMode: true,
})
