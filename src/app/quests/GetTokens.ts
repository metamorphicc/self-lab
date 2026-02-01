export default async function GetTokens(address: string) {
    const row: any = await fetch(`api/portfolio?address=${address}`);
    const data = await row.json();
    console.log(`Баланс: ${JSON.stringify(data)}`)
    return data
}
