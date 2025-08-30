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

const HeroSlider = () => {
  return (
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
              src="/images/slides/ts-1.webp" 
              fill
              alt="Slide 1"
              className="object-cover"
            />
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="relative h-full w-full">
          <div className="absolute inset-0 z-0 bg-yellow-300">
            <Image 
              src="/images/slides/ts-2.webp" 
              fill
              alt="Slide 1"
              className="object-cover"
            />
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="relative h-full w-full">
          <div className="absolute inset-0 z-0 bg-green-300">
            <Image 
              src="/images/slides/ts-3.webp" 
              fill
              alt="Slide 1"
              className="object-cover"
            />
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="relative h-full w-full">
          <div className="absolute inset-0 z-0 bg-green-300">
            <Image 
              src="/images/slides/ts-4.webp" 
              fill
              alt="Slide 1"
              className="object-cover"
            />
          </div>
        </div>
      </SwiperSlide>


    </Swiper>
  )
}

export default HeroSlider