import Image from 'next/image'
import AnimationScroll from '@/components/ScrollAnimation'
import ImageSlider from '@/components/ImageSlider'
import HeroSlider from '@/components/HeroSlider'
import Loader from '@/components/Loader'



export default function VerticalSwiper() {




  return (
    <>
      <Loader />


      <section className='sec_home_hero'>
        <div className="container mx-auto flex justify-between py-4">
          <div className="h-[350px] lg:h-[470px] w-full mx-auto relative overflow-hidden">
            <HeroSlider />
          </div>
        </div>
      </section>

      <section className="design_excellence mt-10 md:mt-20">
        <div className="container  mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-5 gap-4 md:gap-10">
          
              <div className="flex gap-4 xl:gap-6 col-span-2">
                <div className="hidden xl:block ">
                  <AnimationScroll direction="right">
                    <div className="min-w-[50px] 2xl:min-w-[70px] w-full h-[1px] right-0 top-0 bg-golden mt-4"></div>
                  </AnimationScroll>
                </div>

                <div>
                  <AnimationScroll direction="right">
                    <h2 className="text-3xl md:text-5xl text-golden ">Your Next Great Inspiration</h2>
                  </AnimationScroll>
                </div>
              
              </div>

              {/* <div className='hidden md:block xl:order-2 '></div> */}

              <div className="col-span-2">
                <AnimationScroll direction="left">
                  <div className="relative pb-4">
                    <p className="text-lg md:text-xl">We don't just build structures—we design spaces that inspire. From elegant homes to vibrant commercial hubs, we bring modern architecture to life. Every project reflects thoughtful design, enduring quality, and a deep connection with nature.</p>
                    <p className="mt-4 text-lg md:text-xl">Our team of visionary architects and expert engineers ensure each space is built to inspire, breathe, and last.</p>
                  </div>
                </AnimationScroll>

              </div>



              
          </div>
        </div>
      </section>




      <section className='mt-20 px-0'>
        <div className="mx-auto py-4 min-h-[300px] w-full max-w-[1500px]"  >


          <AnimationScroll direction="up">
            <Image className='w-full h-auto' src="/images/living-resized.webp" alt="Home Image" width={1920} height={1080}  />
          </AnimationScroll>

        </div>
      </section>


      <section className="mt-20">
        <div className="container  mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 ">
          
              <div className="xl:col-span-2 ">
                <AnimationScroll direction="right">
                  <div className="relative pr-4 pt-4">
                    <div className="top_right_horizontal_border absolute w-[100px] h-[1px] right-0 top-0 bg-golden"></div>
                    <div className="top_right_vertical_border absolute w-[1px] h-[100px] right-0 top-0 bg-golden"></div>
                    <Image src="/images/iconic.webp" alt="" width={1920} height={1080} />
                  </div>
                </AnimationScroll>
              </div>

              
              <div className="flex gap-4 xl:gap-6 xl:mt-10">
                
                <div className="hidden xl:block">
                  <div className="min-w-[50px] 2xl:min-w-[70px] w-full h-[1px] right-0 top-0 bg-golden mt-4"></div>
                </div>

                <div>
                  <AnimationScroll direction="up">
                    <h2 className="text-3xl md:text-5xl text-golden">Iconic Spaces</h2>
                    <p className="mt-4">Our properties, nestled in prime locations, showcase one-of-a-kind designs that embody aspirational living, blending seamlessly into vibrant communities where each space tells its own story.</p>
                  </AnimationScroll>
                </div>
              </div>
              
              
          </div>
        </div>
      </section>

      <section className="design_excellence mt-20">
        <div className="container  mx-auto">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
          
             
              <div className="flex gap-4 xl:gap-6 order-2  xl:order-1 xl:mt-10">
                
                <div className="hidden xl:block ">
                  <div className="min-w-[50px] 2xl:min-w-[70px] w-full h-[1px] right-0 top-0 bg-golden mt-4"></div>
                </div>

                <div>
                  <AnimationScroll direction="up">
                    <h2 className="text-3xl md:text-5xl text-golden ">Enduring Quality</h2>
                    <p className="mt-4">Our leadership team consists of seasoned professionals with extensive industry experience, ensuring our position as a top-tier real estate developer. We are committed to delivering enduring quality in every project, shaping communities that stand the test of time.</p>
                  </AnimationScroll>
                </div>
              </div>

              <div className="xl:col-span-2 order-1  xl:order-2">
                <AnimationScroll direction="right">
                  <div className="relative pl-4 pb-4">
                    <Image className='' src="/images/enduring.webp" alt="" width={1920} height={1080} />
                  </div>
                </AnimationScroll>

              </div>



              
          </div>
        </div>
      </section>

      <section className='home_bottom_slider mt-20'>
        <div className="container mx-auto flex justify-between py-4">
          
          <AnimationScroll direction="up">
            <div className="h-[300px] lg:h-[600px] w-full mx-auto relative overflow-hidden">
              <ImageSlider images={['/images/slides/ds-1.webp','/images/slides/ds-2.webp','/images/slides/ds-3.webp','/images/slides/ds-4.webp','/images/slides/ds-5.webp','/images/slides/ds-6.webp']} />
            </div>
          </AnimationScroll>
        </div>
      </section>


    </>
    
  )
}