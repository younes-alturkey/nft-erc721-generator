import CollectionConfigInterface from "../lib/CollectionConfigInterface"
import * as Networks from "../lib/Networks"
import * as Marketplaces from "../lib/Marketplaces"
import whitelistAddresses from "./whitelist.json"

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: "CoolAnubis",
  tokenName: "Cool Anubis",
  tokenSymbol: "ANBS",
  hiddenMetadataUri:
    "ipfs://QmcUwJvQpsK4MyFFfzizeCrzVmCyn7WUPU3GbtHjJm4MYU/hidden.json",
  maxSupply: 20,
  whitelistSale: {
    price: 0.05,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.07,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.09,
    maxMintAmountPerTx: 5,
  },
  contractAddress: "0xB3dFeb27524973d5890483aD343eCFdcD217D394",
  marketplaceIdentifier: "my-nft-token",
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
}

export default CollectionConfig
