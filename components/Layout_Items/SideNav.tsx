import { useState } from 'react'
import Image from 'next/image'
import Logo from '../../public/static/logo.svg'
import Close from '../../public/static/close.svg'

export interface SideNavProps {
  isNavOpen: boolean
  setIsNavOpen: (isOpen: boolean) => void
  navItems: NavItem[]
}

export interface NavItem {
  label: string
  href: string
  icon: React.ReactElement
}

const SideNav = ({ isNavOpen, setIsNavOpen, navItems }: SideNavProps) => {
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
        className={`fixed inset-y-0 right-0 z-50 flex-shrink-0 w-64 transition duration-300 transform bg-black w-96 ${
          isNavOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="pl-6 flex-col justify-between w-full">
          <button
            className="p-2 rounded-md flex items-center"
            onClick={handleNavClose}
          >
            <div className="text-white px-3 py-2 sm-heading font-bold">
              Connect Wallet
            </div>
            <Image
              src={Close}
              alt="close-sidenav"
              className="ml-12"
              width={20}
              height={20}
            />
          </button>
        </div>
        <nav className="px-12 pb-8 flex-col items-start">
          {navItems?.map((item) => (
            <button
              key={item.label}
              className="bg-customGray hover:bg-customLightGray text-white font-normal flex py-2 px-4 rounded w-52 my-2 text-left"
              onClick={() => console.log(`Clicked ${item.label}`)} // added onClick handler
            >
              {item.icon}
              {item.label}
            </button>
          ))}
          <p className="py-4  font-normal">
            Dont have a wallet?
            <a className="ml-2 bg-gradient-to-r from-indigo-600 via-indigo-400 to-pink-500">
              Learn More
            </a>
          </p>
        </nav>
      </aside>
    </>
  )
}

export default SideNav
