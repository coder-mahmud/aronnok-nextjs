'use client';

import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import useAppStore from '@/components/store';
import Image from 'next/image';

export default function Home() {
  // const [hideOverlay, setHideOverlay] = useState(false);
  const makeAnimated = useAppStore((state) => state.makeAnimated);
  const showedAnimation = useAppStore((state) => state.showedAnimation);

  console.log("showedAnimation",showedAnimation)

  useEffect(() => {
    if(!showedAnimation){
      const timer = setTimeout(() => {
        // setHideOverlay(true);
        makeAnimated();
      }, 2000); // Hide after 2s

      return () => clearTimeout(timer);
    }
    

    
  }, [showedAnimation]);

  const MotionImage = motion(Image);

  return (
    <section className='sec_header'>
      <div className="container  mx-auto flex justify-between py-4">
      
        <div
          className={`overlay fixed top-0 left-0 w-full h-full bg-gray-300 flex items-center transition-transform duration-1000 ${
            // hideOverlay ? "-translate-y-full" : "translate-y-0"
            showedAnimation ? "-translate-y-full" : "translate-y-0"

          }`}
        >
          <div className="overlay_inner flex items-center justify-center max-w-sm mx-auto  p-20 rounded">
              
            <MotionImage 
              src="/images/logo.png" 
              width={600} 
              height={150} 
              alt="Logo"
              initial={{ y: 100, opacity: 0 }} // Start position
              animate={{ y: 0, opacity: 1 }}   // End position
              transition={{ duration: 1 }} 
            />


          </div>
        </div>
        
        <div className="home_content flex flex-col gap-16 items-center justify-center h-full w-full min-h-dvh">
          <Image src="/images/logo.png" alt="Logo" width={600} height={150} />
          <div className="info flex justify-center flex-col">
            <h1 className='text-2xl md:text-4xl font-medium mb-4 text-center'>Website is coming soon!</h1>
            <p className='text-xl md:text-2xl font-bold text-center' >If you have any query please contact:</p>
            <a className='text-lg font-bold text-center' href="mailto:info@aronnokbd.com/">info@aronnokbd.com</a>
          </div>
        </div>


        
      </div>
    </section>
  );
}
