import { useState } from 'react'
import { useEthers } from '@usedapp/core'
import Image from 'next/image'
import TestImage from '../../public/static/test-img.svg'
import { CardModal, CardModalProps } from '../Modals/CardModal'

export interface NFTCollectionProps {
  NFTs: NFTItem[]
}

interface CardType {
  src: string
  alt: string
  title: string
}

const cardData: CardType[] = [
  {
    src: '/test.png',
    alt: 'test',
    title: 'Title'
  }
]

export const NFTCollection = ({ NFTs }: NFTItem) => {
  const [nftCreationOpened, setnftCreationOpened] = useState(false)
  const { account, chainId } = useEthers()
  const [selectedCardData, setSelectedCardData] = useState<CardType | null>(
    null
  )
  const [isModalOpen, setIsModalOpen] = useState(false)

  const setSelectedCard = (card: CardType) => {
    setSelectedCardData(card)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setSelectedCardData(null)
    setIsModalOpen(false)
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="bg-white bg-opacity-10 rounded-lg border border-white w-4/5 p-4 mx-auto text-center mb-8">
          <h1 className="text-center lg-heading mb-4">Listing Owned NFTs</h1>
          <div className="max-w-xs mx-auto"></div>
        </div>
        <div className="grid grid-cols-4 gap-4 w-4/5 mx-auto text-left">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="card bg-white bg-opacity-10 rounded-lg border border-white"
              onClick={() => setSelectedCard(card)}
            >
              <Image
                src={TestImage}
                alt={card.alt}
                className="mx-auto m-4"
                width={257}
                height={216}
              />
              <div className="text-base m-4">{card.title}</div>
            </div>
          ))}
        </div>

        {isModalOpen && selectedCardData && (
          <CardModal card={selectedCardData} onClose={closeModal} />
        )}
      </div>
    </>
  )
}
