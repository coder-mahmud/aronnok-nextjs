// app/components/VerticalSwiper.tsx
'use client'

import { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel, Pagination, Autoplay, EffectCreative } from 'swiper/modules'
import Image from 'next/image'
import useAppStore from '@/components/store';
import { motion } from "framer-motion";
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-creative'
import AnimationScroll from '@/components/ScrollAnimation'



export default function VerticalSwiper() {

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
    <>
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


      <section className='sec_home_hero'>
        <div className="container mx-auto flex justify-between py-4">
          <div className="h-[600px] w-full mx-auto relative overflow-hidden">
            <Swiper
              direction="vertical"
              slidesPerView={1}
              spaceBetween={0}
              mousewheel={false}
              pagination={{ clickable: true }}
              // autoplay={{ delay: 3000 }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                stopOnLastSlide: true,
              }}
              loop={false}
              modules={[Mousewheel, Pagination, Autoplay, EffectCreative]}
              className="h-full"
              speed={1000} // Slower transition for better parallax visibility
              effect={'creative'} // Using creative effect for parallax between slides
              creativeEffect={{
                prev: {
                  shadow: true,
                  translate: [0, '-20%', 0],
                  opacity: 0,
                },
                next: {
                  translate: [0, '100%', 0],
                  opacity: 1,
                },
              }}
            >
              <SwiperSlide>
                <div className="relative h-full w-full">
                  <div className="absolute inset-0 z-0">
                    <Image 
                      src="/images/slides/1.jpg" 
                      fill
                      alt="Slide 1"
                      className="object-cover"
                    />
                  </div>
                  {/* <div className="absolute bottom-20 left-10 z-10 text-white">
                    <h2 className="text-4xl font-bold mb-4">Slide 1 Title</h2>
                    <p className="text-xl">This content will stay fixed during transition</p>
                  </div> */}
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="relative h-full w-full">
                  <div className="absolute inset-0 z-0 bg-yellow-300">
                    <Image 
                      src="/images/slides/2.jpg" 
                      fill
                      alt="Slide 1"
                      className="object-cover"
                    />
                  </div>
                  {/* <div className="absolute bottom-20 left-10 z-10 text-black">
                    <h2 className="text-4xl font-bold mb-4">Slide 2 Title</h2>
                    <p className="text-xl">Content appears with depth effect</p>
                  </div> */}
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="relative h-full w-full">
                  <div className="absolute inset-0 z-0 bg-green-300">
                    <Image 
                      src="/images/slides/3.jpg" 
                      fill
                      alt="Slide 1"
                      className="object-cover"
                    />
                  </div>
                  {/* <div className="absolute bottom-20 left-10 z-10 text-black">
                    <h2 className="text-4xl font-bold mb-4">Slide 3 Title</h2>
                    <p className="text-xl">Parallax transition effect</p>
                  </div> */}
                </div>
              </SwiperSlide>
            </Swiper>
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
                    <h2 className="text-5xl text-golden ">Your Next Great Inspiration</h2>
                    <p className="mt-4">We don't just build structures—we design spaces that inspire. From elegant homes to vibrant commercial hubs, we bring modern architecture to life. Every project reflects thoughtful design, enduring quality, and a deep connection with nature. Our team of visionary architects and expert engineers ensure each space is built to inspire, breathe, and last.</p>
                  </AnimationScroll>
                </div>
              </div>

              <div className="xl:col-span-2 order-1  xl:order-2">
                <AnimationScroll direction="right">
                  <div className="relative pl-4 pb-4">
                    <Image className='' src="/images/philosophy.jpg" alt="" width={1920} height={1080} />
                  </div>
                </AnimationScroll>

              </div>



              
          </div>
        </div>
      </section>




      <section className='mt-20 px-0'>
        <div className="mx-auto py-4 min-h-[300px]"  >


          <AnimationScroll direction="up">
            <Image className='w-full h-auto' src="/images/home_big_1.jpg" alt="Home Image" width={1920} height={1080}  />
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
                    <Image src="/images/philosophy.jpg" alt="" width={1920} height={1080} />
                  </div>
                </AnimationScroll>
              </div>

              
              <div className="flex gap-4 xl:gap-6 xl:mt-10">
                
                <div className="hidden xl:block">
                  <div className="min-w-[50px] 2xl:min-w-[70px] w-full h-[1px] right-0 top-0 bg-golden mt-4"></div>
                </div>

                <div>
                  <AnimationScroll direction="up">
                    <h2 className="text-5xl text-golden">Iconic Spaces</h2>
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
                    <h2 className="text-5xl text-golden ">Enduring Quality</h2>
                    <p className="mt-4">Our leadership team consists of seasoned professionals with extensive industry experience, ensuring our position as a top-tier real estate developer. We are committed to delivering enduring quality in every project, shaping communities that stand the test of time.</p>
                  </AnimationScroll>
                </div>
              </div>

              <div className="xl:col-span-2 order-1  xl:order-2">
                <AnimationScroll direction="right">
                  <div className="relative pl-4 pb-4">
                    <Image className='' src="/images/philosophy.jpg" alt="" width={1920} height={1080} />
                  </div>
                </AnimationScroll>

              </div>



              
          </div>
        </div>
      </section>

      <section className='home_bottom_slider mt-20'>
        <div className="container mx-auto flex justify-between py-4">
          
          <AnimationScroll direction="up">
            <div className="h-[600px] w-full mx-auto relative overflow-hidden">
              <Swiper
                // direction="vertical"
                slidesPerView={1}
                spaceBetween={0}
                mousewheel={false}
                pagination={{ clickable: true }}
                // autoplay={{ delay: 3000 }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  stopOnLastSlide: true,
                }}
                loop={false}
                modules={[Mousewheel, Pagination, Autoplay, EffectCreative]}
                className="h-full"
                speed={1000} // Slower transition for better parallax visibility
                // effect={'creative'}
                // creativeEffect={{
                //   prev: {
                //     shadow: true,
                //     translate: [0, '-20%', 0],
                //     opacity: 0,
                //   },
                //   next: {
                //     translate: [0, '100%', 0],
                //     opacity: 1,
                //   },
                // }}


              >
                <SwiperSlide>
                  <div className="relative h-full w-full">
                    <div className="absolute inset-0 z-0">
                      <Image 
                        src="/images/slides/1.jpg" 
                        fill
                        alt="Slide 1"
                        className="object-cover"
                      />
                    </div>
                    {/* <div className="absolute bottom-20 left-10 z-10 text-white">
                      <h2 className="text-4xl font-bold mb-4">Slide 1 Title</h2>
                      <p className="text-xl">This content will stay fixed during transition</p>
                    </div> */}
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="relative h-full w-full">
                    <div className="absolute inset-0 z-0 bg-yellow-300">
                      <Image 
                        src="/images/slides/2.jpg" 
                        fill
                        alt="Slide 1"
                        className="object-cover"
                      />
                    </div>
                    {/* <div className="absolute bottom-20 left-10 z-10 text-black">
                      <h2 className="text-4xl font-bold mb-4">Slide 2 Title</h2>
                      <p className="text-xl">Content appears with depth effect</p>
                    </div> */}
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="relative h-full w-full">
                    <div className="absolute inset-0 z-0 bg-green-300">
                      <Image 
                        src="/images/slides/3.jpg" 
                        fill
                        alt="Slide 1"
                        className="object-cover"
                      />
                    </div>
                    {/* <div className="absolute bottom-20 left-10 z-10 text-black">
                      <h2 className="text-4xl font-bold mb-4">Slide 3 Title</h2>
                      <p className="text-xl">Parallax transition effect</p>
                    </div> */}
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </AnimationScroll>
        </div>
      </section>


    </>
    
  )
}