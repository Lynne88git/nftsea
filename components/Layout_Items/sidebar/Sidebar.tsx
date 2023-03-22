import React, { useRef } from 'react'
import classNames from 'classnames'
import Link from 'next/link'
import Image from 'next/image'
import { defaultNavItems } from '../default_nav_items/defaultNavItems'
import { useOnClickOutside } from 'usehooks-ts'
// define a NavItem prop
export type NavItem = {
  label: string
  href: string
  icon?: React.ReactNode
}
// add NavItem prop to component prop
type Props = {
  open: boolean
  navItems?: NavItem[]
  setOpen(open: boolean): void
}
const Sidebar = ({ open, navItems = defaultNavItems, setOpen }: Props) => {
  const ref = useRef<HTMLDivElement>(null)
  useOnClickOutside(ref, (e) => {
    setOpen(false)
  })
  return (
    <div
      className={classNames({
        'flex flex-col justify-between': true, // layout
        'bg-black text-zinc-50': true, // colors
        'top-0 z-20 fixed': true, // positioning
        'h-full w-[300px]': true, // for height and width
        'transition-transform .3s ease-in-out': true, //animations
        '-translate-x-full': !open //hide sidebar to the left when closed
      })}
      ref={ref}
    >
      <nav className="fixed top-0 md:top-16">
        {/* nav items */}
        <ul className="py-2 flex flex-col gap-2">
          {navItems.map((item, index) => {
            return (
              <Link key={index} href={item.href}>
                <li
                  className={classNames({
                    'text-white bg-indigo-900': true, //colors
                    'flex gap-4 items-center ': true, //layout
                    'transition-colors duration-300': true, //animation
                    'rounded-md p-2 mx-2': true //self style
                  })}
                >
                  {item.icon} {item.label}
                </li>
              </Link>
            )
          })}

          <p>
            Don&apos;t have a wallet? <a>Learn more</a>
          </p>
        </ul>
      </nav>
      {/* account  */}
      <div className="border-t border-t-indigo-800 p-4">
        <div className="flex gap-4 items-center">
          <div className="flex flex-col ">
            <span className="text-indigo-50 my-0">User</span>
            <Link href="/" className="text-indigo-200 text-sm">
              View Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Sidebar
