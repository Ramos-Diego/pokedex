import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/core'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider resetCSS>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
