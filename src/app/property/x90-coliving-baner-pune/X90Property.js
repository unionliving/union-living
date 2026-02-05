"use client"
import Footer from '@/components/Layout/Footer'
import NavbarTwo from '@/components/Layout/Navbar'
import PropertiesList from '@/components/Properties/PropertiesList'
import Banner from '@/components/property/Banner'
import { ThemeProvider } from '@material-tailwind/react'
import React, { Suspense, useEffect } from 'react'
import SouthsideCoverImage from "../../../asset/varsityImages/newImages/coverimage.webp"
import SouthsideMainImage from "../../../asset/x90/x901.webp"
import SouthsideOneImage from "../../../asset/x90/x902.webp"
import SouthsideTwoImage from "../../../asset/x90/x903.webp"
import SouthsideThreeImage from "../../../asset/x90/x904.webp"
import SouthsideFourImage from "../../../asset/x90/x905.webp"
import SouthsideTwinImage from "../../../asset/x90/6_1_11zon.webp"
import SouthsidePrivateImage from "../../../asset/x90/7_2_11zon.webp"
import SouthsideApartmentImage from "../../../asset/x90/a_3_11zon.webp"
import SouthsideNew1 from "../../../asset/x90/b_4_11zon.webp"
import SouthsideNew2 from "../../../asset/x90/c_5_11zon.webp"
import SouthsideNew3 from "../../../asset/x90/d_6_11zon.webp"
import SouthsideNew4 from "../../../asset/x90/e_7_11zon.webp"
import SouthsideNew5 from "../../../asset/x90/f_8_11zon.webp"
import SouthsideNew6 from "../../../asset/x90/g_9_11zon.webp"
import SouthsideNew7 from "../../../asset/x90/h_10_11zon.webp"
import SouthsideNew8 from "../../../asset/x90/i_11_11zon.webp"
import SouthsideNew9 from "../../../asset/x90/j_12_11zon.webp"
import SouthsideNew10 from "../../../asset/x90/k_13_11zon.webp"
import SouthsideNew11 from "../../../asset/x90/l_14_11zon.webp"
import SouthsideNew12 from "../../../asset/x90/m_15_11zon.webp"
import SouthsideNew13 from "../../../asset/x90/n_16_11zon.webp"
import SouthsideNew14 from "../../../asset/x90/o_17_11zon.webp"
import SouthsideNew15 from "../../../asset/x90/p_18_11zon.webp"
import SouthsideNew16 from "../../../asset/x90/q_19_11zon.webp"
import SouthsideNew17 from "../../../asset/x90/r_20_11zon.webp"
import SouthsideNew18 from "../../../asset/x90/s_21_11zon.webp"
import Details from '@/components/property/Details'
import Featured from '@/components/property/Featured'
import Rooms from '@/components/property/Rooms'
import WhatSection from '@/components/property/WhatSection'
import Location from '@/components/property/Location'
import Event from '@/components/property/Event'
import TestimonialTwo from '@/components/Home/Testimonial.js'
import BottomNavConstant from '@/components/property/BottomFixed'
import MainPropertyCTA from '@/components/property/MainPropertyCTA'
import LeadSquaredTracker from '@/components/Layout/LeadSquareTracker'

const VarsityProperty = () => {
    const images = [SouthsideMainImage,SouthsideOneImage,SouthsideTwoImage,SouthsideThreeImage,SouthsideFourImage,SouthsideNew1,SouthsideNew2,SouthsideNew3,SouthsideNew4,SouthsideNew5,SouthsideNew6,SouthsideNew7,SouthsideNew8,SouthsideNew9,SouthsideNew10,SouthsideNew11,SouthsideNew12,SouthsideNew13,SouthsideNew14,SouthsideNew15,SouthsideNew16,SouthsideNew17,SouthsideNew18]
    const galleryImages=[
            
        {
            src: SouthsideMainImage,
            width: "100%",
            height: "100%",
          },
          {
            src: SouthsideOneImage,
            width: "100%",
            height: "100%",
          },
          {
            src: SouthsideTwoImage,
            width: "100%",
            height: "100%",
          },
          {
            src: SouthsideThreeImage,
            width: "100%",
            height: "100%",
          },
          {
            src: SouthsideFourImage,
            width: "100%",
            height: "100%",
          },
         
]
      const rooms = [
        {
          title:"Twin",
          description:"Cozy twin room with modern amenities, perfect for sharing and fostering community connections.",
          image:SouthsideTwinImage
        },
        {
          title:"Private",
          description:"Private room with en-suite bathroom, fully furnished, high-speed Wi-Fi, and regular housekeeping.",
          image:SouthsideCoverImage
        },
        {
          title:"3BHK Apartment",
          description:"3BHK with en-suite bathroom, fully furnished, high-speed Wi-Fi, and regular housekeeping.",
          image:SouthsideApartmentImage
        },
      ]
      useEffect(() => {
        const url = 'https://wati-integration-prod-service.clare.ai/v2/watiWidget.js?95542';
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = url;
    
        script.onload = () => {
          const options = {
            enabled: true,
            chatButtonSetting: {
              backgroundColor: '#00e785',
              ctaText: 'Chat with us now',
              borderRadius: '25',
              marginLeft: '0',
              marginRight: '20',
              marginBottom: '20',
              ctaIconWATI: false,
              position: 'right',
            },
            brandSetting: {
              brandName: 'Wati',
              brandSubTitle: 'undefined',
              brandImg: 'https://www.wati.io/wp-content/uploads/2023/04/Wati-logo.svg',
              welcomeText: 'Hi there!\nHow can I help you?',
              messageText: 'Chat with us now',
              backgroundColor: '#00e785',
              ctaText: 'Chat with us now',
              borderRadius: '25',
              autoShow: false,
              phoneNumber: '919137915406',
            },
          };
    
          window.CreateWhatsappChatWidget(options);
        };
    
        document.body.appendChild(script);
      }, []);
      
  return (
    <div>
    <ThemeProvider>
    <LeadSquaredTracker /> 
      <NavbarTwo />
      <div className='lg:pt-[150px] pt-[100px]'>
     <Banner alt="Baner, Pune" beds="180" apartment="90 Apartments" galleryImages={galleryImages} name="X90: Premium Coliving PG in Baner, Pune" location="Baner, Pune" images={images} />
   <Details  subtitle="Where Modern Living Meets Premium Baner Lifestyle" title="Experience Elevated Living at X90 – Baner’s Newest Coliving Destination" description="Discover the perfect fusion of comfort, style, and community at X90, our upcoming coliving space in the heart of Baner. Designed for students and working professionals, X90 offers modern amenities, thoughtfully curated spaces, and a vibrant social environment — all in one prime location.

Whether you're looking for convenience, connection, or a lifestyle upgrade, X90 makes it effortlessly possible.
Your ideal coliving experience starts here. Move into X90 and live the Baner lifestyle." />
     <Featured />
     {/* <Rooms rooms={rooms} brochure="https://drive.google.com/file/d/1C5KsIUQGUhjVMYZtG5JzHUq8isfYpmUD/view?usp=sharing" /> */}
     <WhatSection   />
     <MainPropertyCTA propertyName="X90, Baner Pune" />
     {/* <Location map="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15081.696760186362!2d72.8341302!3d19.0890381!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9fb0323a235%3A0x577a653a62504566!2sVarsity%20by%20Union%20Living!5e0!3m2!1sen!2sin!4v1709842768484!5m2!1sen!2sin" youtube="https://www.youtube.com/embed/28IF2x7ht1k?si=qEwmSl0gL_PMSeAi" /> */}
     <Event />
    <TestimonialTwo />
    <BottomNavConstant name="X90"  price="Coming Soon"  />
    <Footer />
      </div>
      </ThemeProvider>
  </div>
  )
}

export default VarsityProperty