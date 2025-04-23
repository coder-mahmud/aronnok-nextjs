import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='sec_header max-w-7xl mx-auto flex justify-between py-4 px-4'>
      <Link href="/"> <Image src="/images/Logo_new.png" alt="Logo" width={218} height={52} /> </Link>

      <ul className='flex gap-2 items-center'>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </div>
  )
}

export default Header