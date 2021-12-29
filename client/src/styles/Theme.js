import { extendTheme } from '@chakra-ui/react';
import { ButtonStyles as Button } from './ButtonStyles';

export const theme = extendTheme({
  colors: {
    primary: {
      100: '#C1AFE0',
      200: '#9784B8',
      300: '#35284C',
      400: '#7E69A3',
      500: '#35284C'
    },
    secondary: {
      100: '#DDD5D0',
      200: '#D6CAC3',
      300: '#C7B8AF'
    }
  },
  components: {
    Button,
    Modal: {
      variants: {
        secondary: {
          dialog: {
            bg: '#DDD5D0',
            color: '#35284C'
          }
        }
      }
    }
  }
});
