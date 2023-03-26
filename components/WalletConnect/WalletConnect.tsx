import { useEthers } from '@usedapp/core'

export const WalletConnect = () => {
  const { activateBrowserWallet, account, deactivate } = useEthers()
  if (account) {
    return <button onClick={deactivate}>Disconnect</button>
  } else {
    return <button onClick={activateBrowserWallet}>Connect to MetaMask</button>
  }
}
