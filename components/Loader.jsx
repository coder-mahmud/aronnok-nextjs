'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import useAppStore from '@/components/store';
import { motion } from "framer-motion";

const Loader = () => {

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
    <div
      className={`overlay fixed top-0 left-0 w-full h-full bg-gray-300 flex items-center transition-transform duration-1000 z-100 ${
        // hideOverlay ? "-translate-y-full" : "translate-y-0"
        showedAnimation ? "-translate-y-full" : "translate-y-0"
        // showedAnimation ? "translate-y-0" : "translate-y-0"

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
  )
}

export default Loader