import type { AppProps } from 'next/app';
import { ChakraProvider, Container, Box } from '@chakra-ui/react';
import { TheHeader } from '../components/general/TheHeader';
function MyApp({ Component, pageProps }: AppProps) {
  // TODO: 認証の仕組みをここに実装する
  return (
    <ChakraProvider>
      <Box minH="100vh" pb={3}>
        <TheHeader />
        <Container minH="50vh" maxW="container.lg" border="1px solid" borderColor="gray.200" py={3}>
          <Component {...pageProps} />
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
