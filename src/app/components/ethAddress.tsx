"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function EthAddress({ address }: { address: string }) {
  const [data, setData] = useState<any>();
  const [balance, setBalance] = useState();
  const [logo, setLogo] = useState();
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`/api/portfolio?address=${address}`);
        console.log(res);
        if (!res.ok) throw new Error(`Status: ${res.status}`);
        const result: any = await res.json();
        setData(result);
        setBalance(result.result);
        setFlag(true)
      } catch (e) {
        console.error("Ошибка запроса:", e);
      }
    };

    if (address) load();
  }, [address]);
// console.log(typeof data.result[0].usd_price);

  return (
    <div>
      <ul>
        {
            flag ? <div className="flex gap-2">balance POL: <Image src={data.result[0].logo} alt="asd" width={25} height={23}></Image>{data.result[0].balance_formatted}</div> : <div>Загрузка...</div>
        }
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}
