import { useEthers } from '@usedapp/core'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Modal } from '../Layout_Items/Modal'

export default function CreateNFTModal() {
  const [isOpen, setIsOpen] = useState(false)
  const { account, chainId } = useEthers()

  interface FormData {
    ownerName: string
    title: string
    description: string
    link?: string
    image: string
  }

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>()
  const onSubmit = (data: FormData) => {
    console.log(data)
  }

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        disabled={!account || chainId !== 5}
      >
        Mint NFT
      </button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="flex flex-col justify-center items-center">
          <div className="bg-white bg-opacity-20 rounded-lg border border-white w-4/5 p-4 mx-auto text-center my-8">
            <h1 className="text-center lg-heading mb-4">Mint New NFT</h1>
            <div className="max-w-xs mx-auto">
              <p className="font-open-sans text-white text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <form className="rounded mb-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <div className="flex items-center justify-center w-full">
                <label className="h-20 flex flex-col items-center justify-center w-full h-64 border-2 border-gray-600 border-dashed rounded-lg cursor-pointer bg-customGray">
                  <div className="flex flex-col items-center justify-center py-6">
                    <svg
                      aria-hidden="true"
                      className="w-7 h-7 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      ></path>
                    </svg>
                    <p className="mb-2 text-sm text-white">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-white">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                    {...register('image')}
                  />
                </label>
              </div>
            </div>
            <div className="mb-4">
              <input
                className="w-full text-sm text-white bg-customGray rounded-lg border border-gray-300 focus:ring-gray-500 focus:border-gray-500 dark:bg-customGray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-customGray-900 py-2 px-3"
                id="username"
                type="text"
                placeholder="NFT Title"
                {...register('title')}
              />
            </div>
            <div className="mb-6">
              <textarea
                id="message"
                rows="4"
                className="block p-2.5 w-full text-sm text-white bg-customGray rounded-lg border border-gray-300 focus:ring-gray-500 focus:border-gray-500 dark:bg-customGray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-customGray-900"
                placeholder="Description"
                {...register('description')}
              ></textarea>
            </div>
            <div className="mb-4">
              <input
                className="w-full text-sm text-white bg-customGray rounded-lg border border-gray-300 focus:ring-gray-500 focus:border-gray-500 dark:bg-customGray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-customGray-900 py-2 px-3"
                id="username"
                type="text"
                placeholder="NFT Owner Name"
                {...register('ownerName')}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="hover:text-gray-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Mint without listing
              </button>
              <button
                className="bg-gradient-to-r
from-indigo-600
via-indigo-400
to-pink-500 text-white p-4 rounded-sm"
              >
                Mint and list immediately
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  )
}
