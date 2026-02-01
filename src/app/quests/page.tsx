"use client";
import { useEffect, useState } from "react";
import GetTokens from "./GetTokens";
import Image from "next/image";

export default function Quests() {
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
  return (
    <>
      <div>{balance ? <div className="flex gap-2">Баланс: <Image src={logo!} width={25} height={20} alt="asd" className="ml-2"></Image> {balance}</div> : <div>Loading...</div>}</div>
    </>
  );
}
