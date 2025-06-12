'use client';

import { useEffect, useRef } from 'react';
import mixitup from 'mixitup';
import AnimationScroll from '@/components/ScrollAnimation';
import Image from 'next/image';

const page = () => {

  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      mixitup(containerRef.current, {
        selectors: {
          target: '.mix'
        },
        animation: {
          duration: 300
        }
      });
    }
  }, []);


  return (
    <>

      <section className='sec_hero'>
        <div className="container  mx-auto flex justify-between">
          <div className="hero_wrap relative w-full ">
            <Image className="w-full" src="/images/about-hero.jpg" height={737} width={1723} alt="about image" />
            <h1 className="about_hero_text absolute bottom-14 left-14 font-medium text-5xl text-white z-20">
              
            <AnimationScroll direction="up">
              Crafting Art of Living
            </AnimationScroll>
              
              
            </h1>
            <div className="overlay absolute bg-black opacity-50 w-full h-full top-0 left-0 z-10"></div>
          </div>
        </div>
      </section>


      <section className='sec_header'>
        <div className="container  mx-auto">
          <h1>Projects Page</h1>

          <div className="filter_area">

            <div className="mb-4">
              <button data-filter="all">All</button>
              <button data-filter=".category-a">Category A</button>
              <button data-filter=".category-b">Category B</button>
            </div>

            <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="mix category-a bg-blue-300 p-4">Item A1</div>
              <div className="mix category-b bg-green-300 p-4">Item B1</div>
              <div className="mix category-a bg-blue-400 p-4">Item A2</div>
              <div className="mix category-b bg-green-400 p-4">Item B2</div>
            </div>




          </div>
        </div>
      </section>

    </>
  )
}

export default page