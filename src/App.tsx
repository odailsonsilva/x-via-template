import { ChakraProvider } from '@chakra-ui/react';
import { theme } from 'styles';
import HockeyTeamList from 'pages';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <HockeyTeamList/>
    </ ChakraProvider>
  );
}

export default App;
