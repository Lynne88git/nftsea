import { NFTCollection } from '@/components/Minting/NFT_Collection'
import { useRouter } from 'next/router'

const Listing = () => {
  const router = useRouter()

  return (
    <div>
      <NFTCollection />
    </div>
  )
}

export default Listing

{
}
