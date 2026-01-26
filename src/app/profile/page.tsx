"use client";
import { useRouter } from "next/navigation";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useWallet } from "@solana/wallet-adapter-react";
import { PhantomWalletName } from "@solana/wallet-adapter-phantom";
import { useConnect, useConnection } from "wagmi";
import { SolanaBalance } from "../components/SolanaBalance";
export default function Profile() {
  const router = useRouter();
  const { select, wallets } = useWallet();
  const { publicKey, connected } = useWallet();
  const connection = useConnection();
  const address = publicKey?.toBase58();
  return (
    <>
      <div className="h-screen ">
        <button onClick={() => router.replace("/home")}>go back</button>
        <div className="px-85 h-full">
          <div className="h-60 flex items-center justify-center border rounded-[50px] shadow-xl ">
            <p className="text-[20px] font-bold tracking-[2px]">Profile</p>
          </div>
          <div className="w-full flex gap-5">
            <div className="h-90 w-1/2 flex items-center justify-center border rounded-[30px] shadow-xl mt-5 flex-col">
              <div>
                <p className="py-5 font-bold text-[20px]">Today quests:</p>
              </div>
              <div className="w-full h-full">
                <ul className="h-full grid flex flex-col px-5">
                  <li className="h-full rounded-xl group">
                    <label className="flex items-center gap-4 p-4  rounded-2xl border  cursor-pointer transition-all ">
                      <input type="checkbox" className="peer hidden" />

                      <div className="w-6 h-6 rounded-md border-2 border flex items-center justify-center transition-all peer-checked:bg-white">
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
                    <label className="flex items-center gap-4 p-4  rounded-2xl border  cursor-pointer transition-all ">
                      <input type="checkbox" className="peer hidden" />

                      <div className="w-6 h-6 rounded-md border-2 border flex items-center justify-center transition-all peer-checked:bg-white">
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
                    <label className="flex items-center gap-4 p-4  rounded-2xl border  cursor-pointer transition-all ">
                      <input type="checkbox" className="peer hidden" />

                      <div className="w-6 h-6 rounded-md border-2 border flex items-center justify-center transition-all peer-checked:bg-white">
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
                    <label className="flex items-center gap-4 p-4  rounded-2xl border  cursor-pointer transition-all ">
                      <input type="checkbox" className="peer hidden" />

                      <div className="w-6 h-6 rounded-md border-2 border flex items-center justify-center transition-all peer-checked:bg-white">
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
            <div className="h-90 w-1/2 flex flex-col items-center justify-center border rounded-[30px] shadow-xl mt-5">
              <div>
                <p className="py-5 font-bold text-[20px]">Monthly quests:</p>
              </div>
              <div className="w-full h-full">
                <ul className="h-full grid flex flex-col px-5">
                  <li className="h-full rounded-xl group">
                    <label className="flex items-center gap-4 p-4  rounded-2xl border  cursor-pointer transition-all ">
                      <input type="checkbox" className="peer hidden" />

                      <div className="w-6 h-6 rounded-md border-2 border flex items-center justify-center transition-all peer-checked:bg-white">
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
                    <label className="flex items-center gap-4 p-4  rounded-2xl border  cursor-pointer transition-all ">
                      <input type="checkbox" className="peer hidden" />

                      <div className="w-6 h-6 rounded-md border-2 border flex items-center justify-center transition-all peer-checked:bg-white">
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
                    <label className="flex items-center gap-4 p-4  rounded-2xl border  cursor-pointer transition-all ">
                      <input type="checkbox" className="peer hidden" />

                      <div className="w-6 h-6 rounded-md border-2 border flex items-center justify-center transition-all peer-checked:bg-white">
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
                    <label className="flex items-center gap-4 p-4  rounded-2xl border  cursor-pointer transition-all ">
                      <input type="checkbox" className="peer hidden" />

                      <div className="w-6 h-6 rounded-md border-2 border flex items-center justify-center transition-all peer-checked:bg-white">
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
          <div className="h-90  flex flex-col justify-center border rounded-[30px] shadow-xl mt-5">
            <div>
              <p className="py-5 font-bold text-[30px] pl-10">
                Control Center{" "}
              </p>
            </div>
            <div className="h-full px-10 ">
              <ConnectButton />
              {address && connected ? (
                <>
                  <div className="mt-10"><span className="font-bold ">Address Solana:</span> {address} <SolanaBalance/></div>
                </>
              ) : (
                <button onClick={() => {

                    select(PhantomWalletName)
                  }
                  } className="mt-10">
                  Войти через фантом
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
