"use client";
import { useEffect, useState } from "react";
import GetTokens from "./GetTokens";

export default function Quests() {
  const [balance, setBalance] = useState();
  useEffect(() => {
    async function res() {
      const row: any = await GetTokens(
        "0x91E43809198196aE5011568d3d412A034BFb1234"
      );
      setBalance(row.result[0].balance_formatted);
    }
    res();
  }, []);
  return (
    <>
      <div>{balance ? <div>Баланс: {balance}</div> : <div>Loading...</div>}</div>
    </>
  );
}
