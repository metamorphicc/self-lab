"use client" 

import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { config } from '../../../config' 
import { useState } from 'react'
import { RainbowKitProvider } from '@rainbow-me/rainbowkit'

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
        {children}
        </RainbowKitProvider>

      </QueryClientProvider>
    </WagmiProvider>
  )
}