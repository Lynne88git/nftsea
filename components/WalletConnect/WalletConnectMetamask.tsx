import { useEthers } from '@usedapp/core'
import Image from 'next/image'
import MetaMask from '../../public/static/metamask.svg'

export const WalletConnectMetamask = () => {
  const { activateBrowserWallet, account, deactivate, chainId, switchNetwork } =
    useEthers()
  if (account) {
    if (chainId === 5) {
      return (
        <button
          className="bg-customGray hover:bg-customLightGray text-white font-normal flex py-2 px-4 rounded w-52 my-2 text-left"
          onClick={deactivate}
        >
          Disconnect
        </button>
      )
    } else {
      return (
        <>
          <div className="container">
            <p className="text-red">Wrong Network</p>
          </div>
          <button
            className="bg-customGray hover:bg-customLightGray text-white font-normal flex py-2 px-4 rounded w-52 my-2 text-left"
            onClick={() => switchNetwork(5)}
          >
            Switch Network
          </button>
        </>
      )
    }
  } else {
    return (
      <button
        className="bg-customGray hover:bg-customLightGray text-white font-normal flex py-2 px-4 rounded w-52 my-2 text-left"
        onClick={activateBrowserWallet}
      >
        <Image
          src={MetaMask}
          alt="connect-metamask"
          className="mr-2"
          width={20}
          height={20}
        />
        Connect MetaMask
      </button>
    )
  }
}
