import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../public/static/logo.svg'

interface SideNavProps {
  isNavOpen: boolean
  setIsNavOpen: (isOpen: boolean) => void
}

const SideNav = ({ isNavOpen, setIsNavOpen }: SideNavProps) => {
  const handleNavClose = () => {
    setIsNavOpen(false)
  }

  return (
    <>
      {/* The SideNav backdrop */}
      {isNavOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={handleNavClose}
        />
      )}

      {/* The SideNav content */}
      <aside
        className={`fixed inset-y-0 right-0 z-50 flex-shrink-0 w-64 transition duration-300 transform bg-black ${
          isNavOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="hidden md:flex items-left p-8">
          <ul className="flex items-center">
            <li>
              <button
                className="p-2 rounded-md flex items-center"
                onClick={handleNavClose}
              >
                <div className="text-white hover:text-gray-300 px-3 py-2 rounded">
                  Connect Wallet
                </div>
                <svg
                  className="w-6 h-6 text-gray-500"
                  fill="none"
                  stroke="white"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </div>
        <nav className="px-8 pb-8 md:flex items-center">
          <ul>
            <li>
              <Link href="/">
                <div className="text-gray-800 hover:text-white">Home</div>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <div className="text-gray-800 hover:text-white">About</div>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <div className="text-gray-800 hover:text-white">Contact</div>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  )
}

export default SideNav
