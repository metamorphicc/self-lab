"use client";
import { useRouter } from "next/navigation";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useWallet } from "@solana/wallet-adapter-react";
import { PhantomWalletName } from "@solana/wallet-adapter-phantom";
import { useConnect, useConnection } from "wagmi";
import { SolanaBalance } from "../components/SolanaBalance";
import Image from "next/image";
import { ExpBar } from "../components/levelUp";
import { useAccount, useBalance } from "wagmi";

export default function Profile() {
  const router = useRouter();
  const { address, isConnected, status } = useAccount();
  const { select, wallets } = useWallet();
  const { publicKey, connected } = useWallet();
  const connection = useConnection();
  const addressSol = publicKey?.toBase58();
  // const balanceETH = useBalance()
  // console.log(balanceETH.data)
  return (
    <>
      <div className="h-screen ">
        <button onClick={() => router.replace("/home")}>go back</button>
        <div className="px-85 h-full ">
          <div className="h-60 flex items-center justify-between border border-zinc-700 rounded-[50px] shadow-xl px-12">
            <div className="flex-1 flex items-center gap-5">
              <div
                className="relative group w-[100px] h-[100px] cursor-pointer"
                id="avatarClickZone"
              >
                <Image
                  src={"/morph.jpg"}
                  alt="userpic"
                  width={100}
                  height={100}
                  className="rounded-full border-2 border-blue-500 object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-[10px] text-white text-center px-2">
                  Поменять аватарку
                </div>
                <input
                  type="file"
                  id="avatarInput"
                  className="hidden"
                  accept="image/*"
                />
              </div>

              <div>
                <p className="font-bold text-[32px] text-white leading-tight">
                  Morph
                </p>
                <span className="text-zinc-400 text-lg">You have no title</span>
              </div>
            </div>

            <div className="flex-[1.5] flex flex-col items-center px-10">
              <div className="w-full flex justify-between mb-2 px-1">
                <span className="text-zinc-300 font-medium">Level 12</span>
                <span className="text-zinc-300 text-sm">7000 / 10000 XP</span>
              </div>
              <ExpBar xp={7000} maxXp={10000} />
            </div>

            <div className="flex-1 flex justify-end gap-8 text-zinc-300">
              <div className="text-center">
                <p className="text-2xl font-bold text-yellow-500">1111</p>
                <p className="text-[10px] uppercase tracking-widest text-zinc-300">
                  Coins
                </p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-400">43</p>
                <p className="text-[10px] uppercase tracking-widest text-zinc-300">
                  Quests
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex gap-5">
            <div className="h-90 w-1/2 flex items-center justify-center border border-zinc-700 rounded-[30px] shadow-xl mt-5 flex-col">
              <div>
                <p className="py-5 font-bold text-[20px]">Today quests:</p>
              </div>
              <div className="w-full h-full">
                <ul className="h-full grid flex flex-col px-5">
                  <li className="h-full rounded-xl group">
                    <label className="flex items-center gap-4 p-4  rounded-2xl border  border-zinc-700 cursor-pointer transition-all ">
                      <input type="checkbox" className="peer hidden" />

                      <div className="w-6 h-6 rounded-md border-2 border border-zinc-700 flex items-center justify-center transition-all peer-checked:bg-white">
                        <svg
                          className="w-4 h-4 text-black hidden peer-checked:block"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>

                      <span className="text-zinc-300 transition-all peer-checked:text-zinc-400 peer-checked:line-through">
                        Random quest
                      </span>
                    </label>
                  </li>
                  <li className="h-full rounded-xl">
                    <label className="flex items-center gap-4 p-4  rounded-2xl border border-zinc-700 cursor-pointer transition-all ">
                      <input type="checkbox" className="peer hidden" />

                      <div className="w-6 h-6 rounded-md border-2 border border-zinc-700 flex items-center justify-center transition-all peer-checked:bg-white">
                        <svg
                          className="w-4 h-4 text-black hidden peer-checked:block"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>

                      <span className="text-zinc-300 transition-all peer-checked:text-zinc-400 peer-checked:line-through">
                        Random quest
                      </span>
                    </label>
                  </li>
                  <li className="h-full ">
                    <label className="flex items-center gap-4 p-4  rounded-2xl border border-zinc-700 cursor-pointer transition-all ">
                      <input type="checkbox" className="peer hidden" />

                      <div className="w-6 h-6 rounded-md border-2 border border-zinc-700 flex items-center justify-center transition-all peer-checked:bg-white">
                        <svg
                          className="w-4 h-4 text-black hidden peer-checked:block"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>

                      <span className="text-zinc-300 transition-all peer-checked:text-zinc-400 peer-checked:line-through">
                        Random quest
                      </span>
                    </label>
                  </li>
                  <li className="h-full ">
                    <label className="flex items-center gap-4 p-4  rounded-2xl border border-zinc-700 cursor-pointer transition-all ">
                      <input type="checkbox" className="peer hidden" />

                      <div className="w-6 h-6 rounded-md border-2 border border-zinc-700 flex items-center justify-center transition-all peer-checked:bg-white">
                        <svg
                          className="w-4 h-4 text-black hidden peer-checked:block"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>

                      <span className="text-zinc-300 transition-all peer-checked:text-zinc-400 peer-checked:line-through">
                        Random quest
                      </span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
            <div className="h-90 w-1/2 flex flex-col items-center justify-center border border-zinc-700 rounded-[30px] shadow-xl mt-5">
              <div>
                <p className="py-5 font-bold text-[20px]">Monthly quests:</p>
              </div>
              <div className="w-full h-full">
                <ul className="h-full grid flex flex-col px-5">
                  <li className="h-full rounded-xl group">
                    <label className="flex items-center gap-4 p-4  rounded-2xl border border-zinc-700 cursor-pointer transition-all ">
                      <input type="checkbox" className="peer hidden" />

                      <div className="w-6 h-6 rounded-md border-2 border border-zinc-700 flex items-center justify-center transition-all peer-checked:bg-white">
                        <svg
                          className="w-4 h-4 text-black hidden peer-checked:block"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>

                      <span className="text-zinc-300 transition-all peer-checked:text-zinc-400 peer-checked:line-through">
                        Random quest
                      </span>
                    </label>
                  </li>
                  <li className="h-full rounded-xl">
                    <label className="flex items-center gap-4 p-4  rounded-2xl border border-zinc-700 cursor-pointer transition-all ">
                      <input type="checkbox" className="peer hidden" />

                      <div className="w-6 h-6 rounded-md border-2 border border-zinc-700 flex items-center justify-center transition-all peer-checked:bg-white">
                        <svg
                          className="w-4 h-4 text-black hidden peer-checked:block"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>

                      <span className="text-zinc-300 transition-all peer-checked:text-zinc-400 peer-checked:line-through">
                        Random quest
                      </span>
                    </label>
                  </li>
                  <li className="h-full ">
                    <label className="flex items-center gap-4 p-4  rounded-2xl border border-zinc-700 cursor-pointer transition-all ">
                      <input type="checkbox" className="peer hidden" />

                      <div className="w-6 h-6 rounded-md border-2 border border-zinc-700 flex items-center justify-center transition-all peer-checked:bg-white">
                        <svg
                          className="w-4 h-4 text-black hidden peer-checked:block"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>

                      <span className="text-zinc-300 transition-all peer-checked:text-zinc-400 peer-checked:line-through">
                        Random quest
                      </span>
                    </label>
                  </li>
                  <li className="h-full ">
                    <label className="flex items-center gap-4 p-4  rounded-2xl border border-zinc-700 cursor-pointer transition-all ">
                      <input type="checkbox" className="peer hidden" />

                      <div className="w-6 h-6 rounded-md border-2 border border-zinc-700 flex items-center justify-center transition-all peer-checked:bg-white">
                        <svg
                          className="w-4 h-4 text-black hidden peer-checked:block"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>

                      <span className="text-zinc-300 transition-all peer-checked:text-zinc-400 peer-checked:line-through">
                        Random quest
                      </span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="h-90  flex flex-col justify-center border border-zinc-700 rounded-[30px] shadow-xl mt-5">
            <div>
              <p className="py-5 font-bold text-[30px] pl-10">
                Control Center{" "}
              </p>
            </div>
            <div className="h-full px-10 ">
              <ConnectButton />
              {address && isConnected ? (
                <>
                  {/* <div>balance: {balanceETH.data?.decimals}</div> */}
                </>
              ) : (
                <div></div>
              )}
              {addressSol && connected ? (
                <>
                  <div className="mt-10">
                    <span className="font-bold ">Address Solana:</span>{" "}
                    {address} <SolanaBalance />
                  </div>
                </>
              ) : (
                <button
                  onClick={() => {
                    select(PhantomWalletName);
                  }}
                  className="mt-10 bg-black p-2 rounded-[10px] px-4 cursor-pointer hover:scale-105 transform transition-transform shadow-xl"
                >
                  <span className="font-bold">Войти через фантом</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
