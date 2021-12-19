import type { AppProps } from 'next/app'
import { ChakraProvider, Container,Box } from "@chakra-ui/react";
import {TheHeader} from '../components/general/TheHeader';

function MyApp({ Component, pageProps }: AppProps) {
  // TODO: 認証の仕組みをここに実装する
  return(
    <ChakraProvider>
      <Box bgColor="gray.200" minH="100vh">
        <TheHeader />
        <Container  my="3" minH="50vh" maxW="container.lg" bgColor="gray.100" shadow="sm">
          <Component  {...pageProps} />
        </Container>
      </Box>
    </ChakraProvider>
  )
}

export default MyApp
