import { useState, ReactNode } from 'react'
import MainNav from './MainNav'
import SideNav from './SideNav'
import Footer from './Footer'
import { defaultNavItems } from './defaultNavItems'
import { MainNavProps } from './MainNav'
import { SideNavProps } from './SideNav'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const mainNavProps: MainNavProps = {
    isNavOpen,
    setIsNavOpen,
    navItems: defaultNavItems
  }

  const sideNavProps: SideNavProps = {
    isNavOpen,
    setIsNavOpen,
    navItems: defaultNavItems
  }

  return (
    <div className="flex flex-col min-h-screen">
      <MainNav {...mainNavProps} /> {/* pass mainNavProps here */}
      <SideNav {...sideNavProps} /> {/* pass sideNavProps here */}
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
