import React from 'react'
import Image from 'next/image'
import AnimationScroll from '@/components/ScrollAnimation'
import ImageSlider from '@/components/ImageSlider'
import Link from 'next/link'

const NHQPage = () => {
  return (
    <>
      {/* <section className='sec_hero'>
        <div className="container  mx-auto flex justify-between">
          <div className="h-[350px] lg:h-[500px] hero_wrap relative w-full ">
            <Image className="w-full h-full" src="/images/mohsin-hero.jpg" height={737} width={1723} alt="about image" />
            <h1 className="about_hero_text absolute bottom-14 left-4  lg:left-14 font-medium text-3xl lg:text-5xl text-white z-20">
              
              <AnimationScroll direction="up">Mohsin Residence</AnimationScroll>
              
              
            </h1>
            <div className="overlay absolute bg-black opacity-50 w-full h-full top-0 left-0 z-10"></div>
          </div>
        </div>
      </section>    */}
    
    
      <section className='home_bottom_slider mt-20'>
        <div className="container mx-auto flex justify-between py-4">
          
          <AnimationScroll direction="up">
            <div className="h-[300px] lg:h-[450px] w-full mx-auto relative overflow-hidden">
              <ImageSlider images={['/images/projects/nhq/4.jpg','/images/projects/nhq/2.jpg','/images/projects/nhq/3.jpg','/images/projects/nhq/1.jpg']} />
            </div>
          </AnimationScroll>
        </div>
      </section>

      <section className='project_desc mt-20'>
        <div className="container  mx-auto flex flex-col gap-6 justify-between">
          
          <div className="flex gap-4 xl:gap-6 col-span-2">
            
            <div>
              <AnimationScroll direction="up">
                <h2 className="text-3xl md:text-5xl text-golden ">NHQ Cafeteria</h2>
                <p className="text-lg font-medium">Bangladesh Navy Headquarter, Banani, Dhaka</p>
              </AnimationScroll>
            </div>



          
          </div>

          <AnimationScroll direction='up'>
            <p className="">We designed and built this beautiful cafeteria at the Bangladesh Navy Headquarters, Banani, Dhaka, thoughtfully integrating the existing mature trees into the architecture. The design seamlessly blends nature and structure, featuring open views toward the green playground, irregular column placement, and transparent facades to create a harmonious, organic space for users.</p>
          </AnimationScroll>

          {/* <div className="mt-10">
            <AnimationScroll direction='up'>
              <div className="specs">
                <h2 className="font-medium text-3xl">Project Details</h2>
                <div className="flex flex-col md:flex-row justify-between mt-4 max-w-[850px] text-lg ">
                  
                  <ul className='list-disc pl-4 '>
                    <li><span className='font-medium'>Orientation :</span> North</li>
                    <li><span className='font-medium'>Front Road :</span> 30 Feet (North)</li>
                    <li><span className='font-medium'>Land Size :</span> 10.00  Katha</li>
                    <li><span className='font-medium'>Apartment Size :</span> 4218  SQFT</li>
                  </ul>


                  <ul className='list-disc pl-4 '>
                    <li><span className='font-medium'>Number of Apartments :</span> 06</li>
                    <li><span className='font-medium'>Number of Parking :</span> 10</li>
                    <li><span className='font-medium'>Number of Floors :</span> G+06</li>
                    <li><span className='font-medium'>Handover date :</span> Dec 2027</li>
                  </ul>


                </div>
              </div>
            </AnimationScroll>
          </div> */}


          {/* <div className="mt-10">
            <AnimationScroll direction='up'>
              <div className="w-[400px]">
                <Link href="/images/projects/ismail/ismail-brochure.pdf"  className="bg-golden rounded px-6 py-3 flex justify-center text-white cursor-pointer hover:bg-white hover:text-golden border border-golden w-full font-medium">Download Brochure</Link>
              </div>
            </AnimationScroll>
          </div> */}


        </div>
      </section>

    </>
  )
}

export default NHQPage