import { Outlet, useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

// Scroll to top on route change
function ScrollToTop() {
  // handled by useEffect in pages
  return null
}

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-[65px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
