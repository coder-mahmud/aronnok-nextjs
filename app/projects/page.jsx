'use client'

import { useEffect, useRef } from 'react';
// import mixitup from 'mixitup';
import AnimationScroll from '@/components/ScrollAnimation';
import Image from 'next/image';
import Link from 'next/link';

const page = () => {

  const containerRef = useRef(null);

  // useEffect(() => {

  //   if (containerRef.current) {
  //     mixitup(containerRef.current, {
  //       selectors: {
  //         target: '.mix'
  //       },
  //       animation: {
  //         duration: 300
  //       }
  //     });
  //   }

  // }, []);

  useEffect(() => {
    const initMixitup = async () => {
      const mixitup = (await import('mixitup')).default;
  
      if (containerRef.current) {
        mixitup(containerRef.current, {
          selectors: {
            target: '.mix',
          },
          animation: {
            duration: 300,
          },
        });
      }
    };
  
    initMixitup();
  }, []);





  return (
    <>

      <section className='sec_hero'>
        <div className="container  mx-auto flex justify-between">
          <div className="h-[350px] lg:h-[500px] hero_wrap relative w-full ">
            <Image className="w-full h-full" src="/images/projects.webp" height={737} width={1723} alt="about image" />
            <h1 className="about_hero_text absolute bottom-14 left-4  lg:left-14 font-medium text-3xl lg:text-5xl text-white z-20">
              
            <AnimationScroll direction="up">
              Crafting Art of Living
            </AnimationScroll>
              
              
            </h1>
            <div className="overlay absolute bg-black opacity-50 w-full h-full top-0 left-0 z-10"></div>
          </div>
        </div>
      </section>


      <section className='sec_header py-14'>
        <div className="container  mx-auto">
          

          <div className="filter_area">

            <div className="mb-4 text-sm md:text-xl uppercase flex gap-4 filter_header">
              <button data-filter="all">All</button>
              <button data-filter=".completed">Completed</button>
              <button data-filter=".ongoing">Ongoing</button>
              <button data-filter=".upcoming">Upcoming</button>
            </div>

            <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              
              <div className="mix completed ">
                <Link href="/projects/ahsan-residence">
                  <div className="border rounded p-8">
                    <Image className='block mx-auto rounded w-auto max-h-[336px]' src="/images/projects/ahsan/ahsan1.webp" alt="Project Image" width={350} height={350} />
                    <div className="project_info flex flex-col justify-center items-center mt-4">
                      <p className="font-light uppercase ">Residential</p>
                      <p className="title text-xl font-medium text-golden">Aronnok Ahsan Residence</p>
                      <p className="title text-sm font-medium">6000 sft.</p>
                      <p className="title font-medium">Bashundhara R/A</p>
                    </div>
                  </div>                
                </Link>
               
              </div>


              <div className="mix ongoing">
                <Link href="/projects/ismail-garden">
              
                  <div className="border rounded p-8">
                    <Image className='block mx-auto rounded w-auto h-[336px]' src="/images/projects/ismail/ismail-thumb.png" alt="Project Image" width={350} height={350} />
                    <div className="project_info flex flex-col justify-center items-center mt-4">
                      <p className="font-light uppercase ">Residential</p>
                      <p className="title text-xl font-medium text-golden">Aronnok Ismail Garden </p>
                      <p className="title text-sm font-medium">1850 sft.</p>
                      <p className="title font-medium">Bashundhara R/A</p>
                    </div>
                  </div>
                </Link>

              </div>

              
              <div className="mix ongoing">
                <Link href="/projects/kumkum-heights">

                  <div className="border rounded p-8">
                    <Image className='block mx-auto rounded  w-auto h-[336px]' src="/images/projects/kumkum/thumb.jpg" alt="Project Image" width={350} height={350} />
                    <div className="project_info flex flex-col justify-center items-center mt-4">
                      <p className="font-light uppercase ">Residential</p>
                      <p className="title text-xl font-medium text-golden">Aronnok Kumkum Heights</p>
                      <p className="title text-sm font-medium">1680 sft.</p>
                      <p className="title font-medium">Aftabnagar</p>
                    </div>
                  </div>
                </Link>               
              </div>


              <div className="mix ongoing">
                <Link href="/projects/mohsin-residence">

                  <div className="border rounded p-8">
                    <Image className='block mx-auto rounded  w-auto h-[336px]' src="/images/projects/mohsin/1.jpg" alt="Project Image" width={350} height={350} />
                    <div className="project_info flex flex-col justify-center items-center mt-4">
                      <p className="font-light uppercase ">Residential</p>
                      <p className="title text-xl font-medium text-golden">Aronnok Mohsin Residence</p>
                      <p className="title text-sm font-medium">4218 sft.</p>
                      <p className="title font-medium">Aftabnagar</p>
                    </div>
                  </div>
                </Link>               
              </div>



            </div>




          </div>
        </div>
      </section>

    </>
  )
}

export default page