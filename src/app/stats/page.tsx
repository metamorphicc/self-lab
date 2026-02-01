"use client";
import { useState, useEffect } from "react";
import GetTokens from "../quests/GetTokens";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Stats() {
  const router  = useRouter()
  const [balance, setBalance] = useState();
  const [logo, setLogo] = useState();
  useEffect(() => {
    async function res() {
      const row: any = await GetTokens(
        "0x91E43809198196aE5011568d3d412A034BFb1234"
      );
      setBalance(row.result[0].balance_formatted);
      setLogo(row.result[0].logo);
    }
    res();
  }, []);
  console.log(balance);
  return (
    <>
      <div className="h-screen w-screen">
        <div className="px-7 flex items-center justify-center h-full">

          <div className="border h-full w-1/2">
        <button onClick={() => router.replace("/home")}>go back</button>

            <div className="px-5 py-10">
              <div>
                {balance ? (
                  <div className="flex gap-2">
                    <p>[0x91E4...] Polygon Баланс:</p>{" "}
                    <Image
                      src={logo!}
                      width={25}
                      height={20}
                      alt="asd"
                      className="ml-2"
                    ></Image>{" "}
                    {balance}
                  </div>
                ) : (
                  <div>Loading...</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
