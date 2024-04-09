import '../styles/globals.scss';
import '../styles/theme.scss';
import '../styles/mixins.scss';

import type { AppProps } from 'next/app';
import DesktopContextProvider from '../context/DesktopContextProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import '@rainbow-me/rainbowkit/styles.css';

import { WagmiProvider } from 'wagmi';
import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  sepolia,
} from 'wagmi/chains';
import {
  darkTheme,
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';

const config = getDefaultConfig({
  appName: 'RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains: [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [sepolia] : []),
  ],
  ssr: true,
});

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  console.log('config', config);
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <DesktopContextProvider>
          <RainbowKitProvider modalSize="compact" theme={darkTheme()}>
            <Component {...pageProps} />
          </RainbowKitProvider>
        </DesktopContextProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
