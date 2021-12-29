import { darken, mode, whiten } from '@chakra-ui/theme-tools';

export const ButtonStyles = {
  // Styles for the base style
  baseStyle: {},
  // Styles for the size variations
  sizes: {},
  // Styles for the visual style variations
  variants: {
    primary: props => ({
      bg: 'primary.300',
      color: 'primary.100',
      _hover: {
        bg: mode(darken('primary', 20), whiten('primary', 20))(props),
        boxShadow: 'md'
      }
    }),
    primary2: props => ({
      bg: 'primary.200',
      color: 'primary.100',
      border: '3px solid',
      boxSizing: 'border-box',
      borderColor: 'primary.300',
      _hover: {
        bg: mode(darken('primary.100', 10), whiten('primary.100', 10))(props),
        boxShadow: 'md'
      }
    }),
    primaryOutline: props => ({
      bg: 'secondary.100',
      color: 'primary.300',
      border: '2px solid',
      boxSizing: 'border-box',
      borderColor: 'primary.300',
      _hover: {
        bg: mode(darken('secondary.100', 10), whiten('secondary.100', 10))(
          props
        ),
        boxShadow: 'md'
      }
    })
  },
  // The default `size` or `variant` values
  defaultProps: {}
};
