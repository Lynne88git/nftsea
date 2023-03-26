import { DAppProvider, Config, Goerli } from '@usedapp/core'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout_Items/Layout'

export const config: Config = {
  readOnlyChainId: 5,
  readOnlyUrls: {
    [Goerli.chainId]:
      'https://goerli.infura.io/v3/0a9a463708f349f5aa9b37844b6e1e17'
  }
}

function App({ Component, pageProps }: AppProps) {
  return (
    <DAppProvider config={config}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DAppProvider>
  )
}

export default App
