import React from 'react'
import Image from 'next/image'
import AnimationScroll from '@/components/ScrollAnimation'
import ImageSlider from '@/components/ImageSlider'
import Link from 'next/link'

const AhsanResidencePage = () => {
  return (
    <>
    
      <section className='home_bottom_slider mt-20'>
        <div className="container mx-auto flex justify-between py-4">
          
          <AnimationScroll direction="up">
            <div className="h-[300px] lg:h-[450px] w-full mx-auto relative overflow-hidden">
              <ImageSlider images={['/images/projects/nawaz/1.jpeg']} />
            </div>
          </AnimationScroll>
        </div>
      </section>

      <section className='project_desc mt-20'>
        <div className="container  mx-auto flex flex-col gap-6 justify-between">
          
          <div className="flex gap-4 xl:gap-6 col-span-2">
            
            <div>
              <AnimationScroll direction="up">
                <h2 className="text-3xl md:text-5xl text-golden ">Aronnok Nawaz Garden</h2>
                <p className="text-lg font-medium">Plot – 489 & 490, Road 19, Block - L, Bashundhara R/A</p>
              </AnimationScroll>
            </div>



          
          </div>

          {/* <AnimationScroll direction='up'>
            <p className="">Nestled in a prime location, Ahsan Residence, a private project, stands as a true testament to our dedication to contemporary design, exceptional construction quality, and flawless project management. We extend our heartfelt gratitude to our esteemed client, K. M. Rezaul Hasanat (David Hasanat), Chairman and CEO of the Viyellatex Group, for trusting us to bring this vision to life.</p>
          </AnimationScroll> */}

          <div className="mt-10">
            <AnimationScroll direction='up'>
              <div className="specs">
                <h2 className="font-medium text-3xl">Project Details</h2>
                <div className="flex flex-col md:flex-row justify-between mt-4 max-w-[850px] text-lg ">
                  
                  <ul className='list-disc pl-4 '>
                    <li><span className='font-medium'>Orientation :</span> North</li>
                    <li><span className='font-medium'>Front Road :</span> 25 Feet (North)</li>
                    <li><span className='font-medium'>Land Size :</span> 06.00 Katha</li>
                    <li><span className='font-medium'>Apartment Size :</span> 1600 SQFT</li>
                  </ul>


                  <ul className='list-disc pl-4 '>
                    <li><span className='font-medium'>Number of Apartments :</span> 16</li>
                    <li><span className='font-medium'>Number of Parking :</span> 16</li>
                    <li><span className='font-medium'>Number of Floors :</span> G+M+06</li>
                    <li><span className='font-medium'>Handover date :</span> Dec 2029</li>
                  </ul>


                </div>
              </div>
            </AnimationScroll>
          </div>


          <div className="mt-10">
            <AnimationScroll direction='up'>
              <div className="w-[400px]">
                <Link href="#"  className="bg-golden rounded px-6 py-3 flex justify-center text-white cursor-pointer hover:bg-white hover:text-golden border border-golden w-full font-medium">Download Brochure</Link>
              </div>
            </AnimationScroll>
          </div>


        </div>
      </section>

    </>
  )
}

export default AhsanResidencePage