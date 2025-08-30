import React from 'react'
import Image from 'next/image'
import AnimationScroll from './ScrollAnimation'
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';



const Footer = () => {
  return (
    <section className='sec_footer mt-20 bg-gray-200 py-10'>
      <div className="container  mx-auto flex justify-between flex-col">
        
        <AnimationScroll direction="up">
          <div className="footer_top flex justify-center">
            <Image src="/images/logo-2.png" alt="Logo" width={218} height={52} />
          </div>
        </AnimationScroll>


        <AnimationScroll direction="up">
          <div className="footer_socials flex justify-center gap-6 my-8">
            
            <Link href="">
              <div className="icon_wrap bg-white h-10 w-10 rounded-[50%] flex items-center justify-center"><Facebook size='24' /></div>
            </Link>

            <Link href="">
              <div className="icon_wrap bg-white h-10 w-10 rounded-[50%] flex items-center justify-center"><Instagram size='24' /></div>
            </Link>

            <Link href="">
              <div className="icon_wrap bg-white h-10 w-10 rounded-[50%] flex items-center justify-center"><Twitter size='24' /></div>
            </Link>
                    
            <Link href="">
              <div className="icon_wrap bg-white h-10 w-10 rounded-[50%] flex items-center justify-center"><Linkedin size='24' /></div>
            </Link>


          </div>
        </AnimationScroll>

        <AnimationScroll direction="up">
          <div className="bar h-[1px] w-full max-w-[450px] mx-auto bg-black"></div>
        </AnimationScroll>


        <AnimationScroll direction="up">
          <ul className="footer_nav flex gap-4 mt-10 justify-center uppercase flex-col xs:flex-row text-md">
            <li><Link href="">Home</Link></li>
            <li><Link href="">About</Link></li>
            <li><Link href="">Projects</Link></li>
            <li><Link href="">Land Owners</Link></li>
            <li><Link href="">Contact</Link></li>
          </ul>
        </AnimationScroll>

        <AnimationScroll direction="up">
          <p className="footer_coptright text-center mt-4 text-sm">
            © 2025 Aronnok Developments Limited. All Rights Reserved.
          </p>
        </AnimationScroll>
        


      </div>
    </section>
  )
}

export default Footer