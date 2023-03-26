import Link from 'next/link'

const WalletInstallation = () => {
  return (
    <div>
      <h3>MetMask is required</h3>
      <p>Follow the link to install:</p>
      <Link href="https://metamask.io/download/">
        <p>MetaMask</p>
      </Link>
    </div>
  )
}

export default WalletInstallation
