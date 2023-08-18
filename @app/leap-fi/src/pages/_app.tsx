import "@rainbow-me/rainbowkit/styles.css"
import '@app/styles/globals.css'

import type { AppProps } from 'next/app'

import { WagmiConfig } from 'wagmi'
import { RainbowKitProvider } from '@rainbow-me/rainbowkit'
import wagmiConfig, { chains } from "@app/utils/wagmi"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
