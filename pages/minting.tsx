import { useRouter } from 'next/router'
import Link from 'next/link'

const Minting = () => {
  const router = useRouter()
  return (
    <div className="absolute flex flex-col items-center justify-center w-full">
      <form className="rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-600 border-dashed rounded-lg cursor-pointer dark:bg-gray-700  dark:border-gray-600 bg-gray-900">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  aria-hidden="true"
                  className="w-10 h-10 mb-3 text-gray-400"
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
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-white">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>
        </div>
        <div className="mb-4">
          <input
            className="w-full text-sm text-white bg-gray-50 rounded-lg border border-gray-300 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-gray-900 py-2 px-3"
            id="username"
            type="text"
            placeholder="NFT Title"
          />
        </div>
        <div className="mb-6">
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-full text-sm text-white bg-gray-50 rounded-lg border border-gray-300 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-gray-900"
            placeholder="Description"
          ></textarea>
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
  )
}

export default Minting
