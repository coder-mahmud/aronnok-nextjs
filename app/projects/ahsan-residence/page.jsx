import React from 'react'
import Image from 'next/image'
import AnimationScroll from '@/components/ScrollAnimation'
import ImageSlider from '@/components/ImageSlider'

const AhsanResidencePage = () => {
  return (
    <>
      <section className='sec_hero'>
        <div className="container  mx-auto flex justify-between">
          <div className="h-[350px] lg:h-[500px] hero_wrap relative w-full ">
            <Image className="w-full h-full" src="/images/projects.webp" height={737} width={1723} alt="about image" />
            <h1 className="about_hero_text absolute bottom-14 left-4  lg:left-14 font-medium text-3xl lg:text-5xl text-white z-20">
              
            <AnimationScroll direction="up">
              Ahsan Residence
            </AnimationScroll>
              
              
            </h1>
            <div className="overlay absolute bg-black opacity-50 w-full h-full top-0 left-0 z-10"></div>
          </div>
        </div>
      </section>   
    
    
      <section className='home_bottom_slider mt-20'>
        <div className="container mx-auto flex justify-between py-4">
          
          <AnimationScroll direction="up">
            <div className="h-[300px] lg:h-[450px] w-full mx-auto relative overflow-hidden">
              <ImageSlider images={['/images/projects/ahsan/ahsan1.webp','/images/projects/ahsan/ahsan2.webp']} />
            </div>
          </AnimationScroll>
        </div>
      </section>

      <section className='project_desc mt-20'>
        <div className="container  mx-auto flex flex-col gap-6 justify-between">
          
          <div className="flex gap-4 xl:gap-6 col-span-2">
            
            <div>
              <AnimationScroll direction="up">
                <h2 className="text-3xl md:text-5xl text-golden ">Ahsan Residence</h2>
                <p className="text-lg font-medium">Plot no. 377-380, Road-5, Block-I, Bashundhara R/A, Dhaka, Bangladesh.
                </p>
              </AnimationScroll>
            </div>



          
          </div>

          <AnimationScroll direction='up'>
            <p className="">Nestled in a prime location, Ahsan Residence, a private project, stands as a true testament to our dedication to contemporary design, exceptional construction quality, and flawless project management. We extend our heartfelt gratitude to our esteemed client, K. M. Rezaul Hasanat (David Hasanat), Chairman and CEO of the Viyellatex Group, for trusting us to bring this vision to life.</p>
          </AnimationScroll>

          <div className="mt-10">
            <AnimationScroll direction='up'>
              <div className="specs">
                <h2 className="font-medium text-3xl">Project Details</h2>
                <div className="flex flex-col md:flex-row justify-between mt-4 max-w-[850px] text-lg ">
                  
                  <ul className='list-disc pl-4 '>
                    <li><span className='font-medium'>Orientation :</span> North, South</li>
                    <li><span className='font-medium'>Front Road :</span> 25 Feet (North, South, East)</li>
                    <li><span className='font-medium'>Land Size :</span> 16.00 Katha</li>
                    <li><span className='font-medium'>Apartment Size :</span> 6000 SQFT</li>
                  </ul>


                  <ul className='list-disc pl-4 '>
                    <li><span className='font-medium'>Number of Apartments :</span> Single</li>
                    <li><span className='font-medium'>Number of Parking :</span> 07</li>
                    <li><span className='font-medium'>Number of Floors :</span> G+03</li>
                    <li><span className='font-medium'>Handover date :</span> Dec 2023</li>
                  </ul>


                </div>
              </div>
            </AnimationScroll>
          </div>


        </div>
      </section>

    </>
  )
}

export default AhsanResidencePage