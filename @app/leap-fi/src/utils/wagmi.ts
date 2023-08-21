import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import { okxWallet, metaMaskWallet, coinbaseWallet, injectedWallet, walletConnectWallet, rainbowWallet } from '@rainbow-me/rainbowkit/wallets';
import {
  Chain,
  configureChains,
  createConfig
} from 'wagmi';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { PROJECT_ID } from '@app/config/index'

const bscExplorer = { name: 'BscScan', url: 'https://bscscan.com' }
export const bsc: Chain = {
  id: 56,
  name: 'BNB Smart Chain',
  network: 'bsc',
  rpcUrls: {
    default: {
      http: ['https://bsc-dataseed1.binance.org']
    },
    public: {
      http: ['https://bsc-dataseed1.binance.org']
    }
  },
  blockExplorers: {
    default: bscExplorer,
    etherscan: bscExplorer,
  },
  nativeCurrency: {
    name: 'Binance Chain Native Token',
    symbol: 'BNB',
    decimals: 18,
  }
}
export const bscTest: Chain = {
  id: 97,
  name: 'BNB Smart Chain Testnet',
  network: 'bsc-testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Binance Chain Native Token',
    symbol: 'tBNB',
  },
  rpcUrls: {
    default: {
      http: ['https://data-seed-prebsc-2-s2.binance.org:8545/']
    },
    public: {
      http: ['https://data-seed-prebsc-2-s2.binance.org:8545/']
    },
  },
  blockExplorers: {
    default: { name: 'BscScan', url: 'https://testnet.bscscan.com' },
  },
  testnet: true
}

export const SUPPORT_CHAINS = [bscTest, bsc]

export const { chains, publicClient } = configureChains(SUPPORT_CHAINS, [
  jsonRpcProvider({
    rpc: (chain) => {
      if (chain.rpcUrls.nodeReal) {
        return (
          {
            http: chain.rpcUrls.nodeReal.http[0],
          }
        )
      }
      return { http: chain.rpcUrls.default.http[0] }
    },
  })
])

const connectors = connectorsForWallets([
  {
    groupName: 'Recommended',
    wallets: [
      metaMaskWallet({ projectId: PROJECT_ID, chains }),
      okxWallet({ projectId: PROJECT_ID, chains }),
      rainbowWallet({ projectId: PROJECT_ID, chains }),
      walletConnectWallet({ projectId: PROJECT_ID, chains }),
      coinbaseWallet({ appName: 'LeapFI', chains })
    ],
  },
]);

const wagmiConfig = createConfig({
  autoConnect: false,
  connectors,
  publicClient
});

export default wagmiConfig;