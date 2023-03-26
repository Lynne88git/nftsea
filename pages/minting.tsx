import CreateNFTModal from '@/components/Minting/Create_NFT'
import { useRouter } from 'next/router'

const Minting = () => {
  const router = useRouter()

  return (
    <div>
      <CreateNFTModal />
    </div>
  )
}

export default Minting

{
}
