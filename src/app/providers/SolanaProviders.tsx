"use client";
import { useCallback, useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-phantom"; // Импортируй напрямую
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";

export const SolanaProvider = ({ children }: { children: React.ReactNode }) => {
  const endpoint = "https://solana-mainnet.g.alchemy.com/v2/F6AAfcAUEeGEEAU6PWdwwIeb4sz1cMai";
  
  const wallets = useMemo(() => [], []);
  const onError = useCallback((error: any) => {
    console.error("Ошибка кошелька:", error.name);
        
        if (error.name) {
            alert("Вы отменили подключение в кошельке!");
        } else {
            alert("Что-то пошло не так при подключении.");
        }
  }, [])
  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} onError={onError} autoConnect >
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};
