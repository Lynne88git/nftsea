import { useState, ReactNode } from 'react'
import MainNav from './MainNav'
import SideNav from './SideNav'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <MainNav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <SideNav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
