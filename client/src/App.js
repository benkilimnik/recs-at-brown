import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { MainView } from './components/MainView/MainView';
import { theme } from './styles/Theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <MainView />
    </ChakraProvider>
  );
}

export default App;
