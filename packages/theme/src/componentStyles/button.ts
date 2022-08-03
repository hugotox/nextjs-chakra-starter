/* eslint-disable sort-keys */
// https://chakra-ui.com/docs/styled-system/theming/component-style#styling-single-part-components

import type { ComponentStyleConfig } from '@chakra-ui/theme'

export const Button: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: 6,
    fontWeight: 'regular',
    textTransform: 'none',
  },
  sizes: {
    sm: {
      fontSize: '14px',
      px: 5,
      height: '40px',
    },
    md: {
      fontSize: '16px',
      px: 5,
      height: '44px',
    },
    lg: {
      fontSize: '18px',
      px: 5,
      height: '48px',
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'default',
  },
  variants: {
    default: {
      color: 'white',
      bg: 'primary.800',
      _hover: {
        bg: 'primary.700',
      },
    },
    secondary: {
      color: '#0a0f1c',
      bg: '#EBEAE6',
      _hover: {
        bg: '#E6E5E1',
      },
    },
  },
}
