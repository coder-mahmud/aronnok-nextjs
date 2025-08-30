'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react' // optional: for icons

const Header = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/landowners', label: 'LandOwners' },
    { href: '/contact', label: 'Contact' }
  ]

  return (
    <header className="sec_header fixed top-0 left-0 w-full z-50 bg-white ">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8 relative">
        <Link href="/">
          <Image src="/images/logo-2.png" alt="Logo" width={218} height={52} />
        </Link>


        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-black focus:outline-none">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>


        <ul className={`flex flex-col md:flex-row md:items-center gap-4 absolute md:static bg-white md:bg-transparent top-full left-0 w-full md:w-auto px-4 md:px-0 z-50 transition-all duration-300 ${isOpen ? 'block' : 'hidden'} md:flex`}>
          {navLinks.map(({ href, label }) => (
            <li key={href} className="relative group uppercase font-light">
              <Link href={href} onClick={() => setIsOpen(false)} className="inline-block py-2">
                {label}
                <span className={`absolute bottom-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:left-0 group-hover:w-full ${pathname === href ? 'w-full left-0' : 'left-1/2'}`} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Header
