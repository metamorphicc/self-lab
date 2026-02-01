import next from "next";
import { NextResponse } from "next/server";

export async function GET(prop: Request) {
    const {searchParams} = new URL(prop.url);
        const address = searchParams.get("address")
    const api_key = process.env.API_KEY_COVALENT || ""
    const response = await fetch(`https://deep-index.moralis.io/api/v2.2/wallets/${address}/tokens?chain=${"0x89"}`, {
        method: 'GET',
        headers: {
          'accept': 'application/json',
          'X-API-Key': api_key
        }
      });

    const rowRow = await response.json().catch(() => {console.log("error at portfolio")});
    return NextResponse.json(rowRow)
}