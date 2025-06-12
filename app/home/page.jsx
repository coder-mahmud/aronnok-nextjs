// app/components/VerticalSwiper.tsx
'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel, Pagination, Autoplay, EffectCreative } from 'swiper/modules'
import Image from 'next/image'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-creative'

export default function VerticalSwiper() {
  return (
    <>
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

      <section>
        <div className="container mx-auto flex justify-between py-4 min-h-[300px]"  >
          <h1>Next section...</h1>
        </div>
      </section>
    </>
    
  )
}