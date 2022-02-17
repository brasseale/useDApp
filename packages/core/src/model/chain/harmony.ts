import { Chain } from '../../constants'

export const Harmony: Chain = {
  chainId: 1666600000,
  chainName: 'Harmony',
  isTestChain: false,
  isLocalChain: false,
  multicallAddress: '0xFE4980f62D708c2A84D3929859Ea226340759320',
  getExplorerAddressLink: (address: string) => `https://explorer.harmony.one/address/${address}`,
  getExplorerTransactionLink: (transactionHash: string) => `https://explorer.harmony.one/tx/${transactionHash}`,
}
export const HarmonyTestnet = {
  chainId: 1666700000,
  chainName: 'HarmonyTestnet',
  isTestChain: true,
  isLocalChain: false,
  multicallAddress: '0xd078799c53396616844e2fa97f0dd2b4c145a685',
  getExplorerAddressLink: (address: string) => `https://explorer.testnet.harmony.one/address/${address}`,
  getExplorerTransactionLink: (transactionHash: string) => `https://explorer.testnet.harmony.one/tx/${transactionHash}`,
};
export default { Harmony, HarmonyTestnet }
