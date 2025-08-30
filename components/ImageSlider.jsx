'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel, Pagination, Autoplay, EffectCreative } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-creative'
import Image from 'next/image'

const ImageSlider = ({images}) => {
  console.log("Images", images)
  return (
    
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
        speed={1000}
      >
        {images.map((image,index) => (
          <SwiperSlide>
            <div className="relative h-full w-full">
              <div className="absolute inset-0 z-0">
                {/* <Image 
                  src={image} 
                  fill
                  alt={`Slide ${index + 1}`}
                  className="object-cover w-auto h-full"
                /> */}
                <div className="relative h-full">
                  <Image
                    src={image}
                    fill
                    alt={`Slide ${index + 1}`}
                    className="object-contain"
                  />
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
        




      </Swiper>

  )
}

export default ImageSlider