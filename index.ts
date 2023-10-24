import { Address, TonClient } from "ton"
import { getHttpEndpoint } from "@orbs-network/ton-access";

async function main() {

    const wallet = Address.parse('0QDrrFWrdN8B9RgyQHiN7QqGA7yU9AYnS4qSGaJsUh2z8fAM');
    const collection = Address.parse('EQDk8N7xM5D669LC2YACrseBJtDyFqwtSPCNhRWXU7kjEptX');

    // get the decentralized RPC endpoint in Testnet
    const endpoint = await getHttpEndpoint({
        network: "testnet",
    });

    // initialize ton library
    const client = new TonClient({ endpoint });

    const miningData = await client.callGetMethod(collection, 'get_mining_data');

    console.log(miningData);
}

main()