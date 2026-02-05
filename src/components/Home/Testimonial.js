"use client"
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCoverflow
} from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const TestimonialTwo = () => {
  return (
    <div className='lg:mx-16 mx-4 pt-12 pb-12  '>
        <div>
        <div className='flex items-center justify-between' >
        <h3 className='font-[NeueBold] text-[1.4rem] lg:text-[2.8rem]' >Reviews</h3>
       
        </div>
        <Swiper
          spaceBetween={0}
          className="mt-6"
          draggable={true}
          breakpoints={{
            350: {
          width: 450,
          slidesPerView: 1.5,
        },
            450: {
          width: 450,
          slidesPerView: 1.5,
        },
        576: {
          width: 576,
          slidesPerView: 2,
        },
        780: {
          width: 780,
          slidesPerView: 3,
        },
         1200: {
          width: 1200,
          slidesPerView: 3.5,
        },
       
         1440:{
          width:1440,
          slidesPerView:4.4
        }
      }}
          autoplay={{
            delay: 2000,
            disableOnInteraction:true,
          }}
          loop={true}
          modules={[Autoplay]}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
         
              <SwiperSlide >
              <video className='   h-[500px] rounded-lg shadow-lg px-2 lg:px-0 lg:mr-0 mb-6   '  controls>
          <source src="https://cdn.shopify.com/videos/c/o/v/896d6e23d0654030b822c22dfeb0a54d.mp4" type="video/mp4" />
              </video>
              </SwiperSlide>
              <SwiperSlide >
              <video className='   h-[500px] rounded-lg shadow-lg px-2 lg:px-0 lg:mr-0 mb-6   '  controls>
          <source src="https://cdn.shopify.com/videos/c/o/v/d12e886e95b04cc8999fe4f491ff7809.mp4" type="video/mp4" />
              </video>
              </SwiperSlide>
              
              <SwiperSlide >
              <video className='   h-[500px] rounded-lg shadow-lg px-2 lg:px-0 lg:mr-0 mb-6   '  controls>
          <source src="https://cdn.shopify.com/videos/c/o/v/398ce32ec67e4bc5aea1b5e76c5d2fc3.mp4" type="video/mp4" />
              </video>
              </SwiperSlide>
              <SwiperSlide >
              <video className='   h-[500px] rounded-lg shadow-lg px-2 lg:px-0 lg:mr-0 mb-6   '  controls>
          <source src="https://cdn.shopify.com/videos/c/o/v/929df69c48e34408b372f67c28207a56.mov" type="video/mp4" />
              </video>
              </SwiperSlide>
              <SwiperSlide >
              <video className='   h-[500px] rounded-lg shadow-lg px-2 lg:px-0 lg:mr-0 mb-6   '  controls>
          <source src="https://cdn.shopify.com/videos/c/o/v/a7d6068c8d0e4095a1dc783e56f5344c.mp4" type="video/mp4" />
              </video>
              </SwiperSlide>
            
              {/* <SwiperSlide >
              <video className='   h-[500px] rounded-lg shadow-lg px-2 lg:px-0 lg:mr-0 mb-6   '  controls>
          <source src="https://res.cloudinary.com/dbjtwrdxo/video/upload/v1758370978/reviewFour_nocowg.mov" type="video/mp4" />
              </video>
              </SwiperSlide> */}
            
        </Swiper>
        </div>
        
    </div>
  )
}

export default TestimonialTwo