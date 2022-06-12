import { ChakraProvider } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { theme, globalStyle } from 'theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <title>Turbo/Next/Chakra App</title>
      </Head>
      <Global styles={globalStyle} />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
