import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './styles/theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div>
        <p>teste</p>
      </div>
    </ChakraProvider>
  );
}

export default App;
