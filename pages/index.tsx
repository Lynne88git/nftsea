import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
// import { Cinzel_700Bold } from '../public/fonts/Cinzel_700Bold.ttf'
// import { OpenSans_400Regular, OpenSans_600SemiBold } from '@fontsource/open-sans';
import { useEthers } from '@usedapp/core'
import { NFTCollection } from '@/components/Minting/NFT_Collection'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

interface CustomWindow extends Window {
  ethereum?: any
}

const WalletInstallation = dynamic(
  () =>
    import('@/components/User_Profile/Wallet_Installation/walletInstallation'),
  { ssr: false }
)

export default function Home() {
  const [ethereum, setEthereum] = useState(null)
  const { account } = useEthers()
  const router = useRouter()

  useEffect(() => {
    setEthereum((window as CustomWindow).ethereum)
  }, [])

  const handleMintingPage = () => {
    router.push('/minting')
  }

  return (
    <>
      <Head>
        <title>NFT Sea</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="absolute flex flex-col items-center justify-center w-full">
        <div>
          <p>Account: {account}</p>
          {/* <p>Chain ID: {chainId}</p>
        <p>Balance: {etherBalance}</p> */}
        </div>
        {!ethereum ? (
          <WalletInstallation />
        ) : (
          <button onClick={handleMintingPage}>Go to Minting Page</button>
        )}
      </div>
    </>
  )
}
