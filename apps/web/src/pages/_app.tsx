import { ChakraProvider } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import { NextIntlProvider } from 'next-intl'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { theme, globalStyle } from 'theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <ChakraProvider theme={theme}>
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <title>Next.JS/Chakra-UI Starter App</title>
        </Head>
        <Global styles={globalStyle} />
        <Component {...pageProps} />
      </ChakraProvider>
    </NextIntlProvider>
  )
}
