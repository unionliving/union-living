"use client"
import Footer from '@/components/Layout/Footer'
import NavbarTwo from '@/components/Layout/Navbar'
import PropertiesList from '@/components/Properties/PropertiesList'
import Banner from '@/components/property/Banner'
import { ThemeProvider } from '@material-tailwind/react'
import React, { Suspense, useEffect } from 'react'
import SouthsideCoverImage from "../../../asset/varsityImages/newImages/coverimage.webp"
import SouthsideMainImage from "../../../asset/varsityImages/newImages/mainBanner.webp"
import SouthsideOneImage from "../../../asset/varsityImages/newImages/foodtesting.webp"
import SouthsideTwoImage from "../../../asset/varsityImages/newImages/gym-min.webp"
import SouthsideThreeImage from "../../../asset/varsityImages/newImages/Untitled design - 2024-05-31T015132.055.webp"
import SouthsideFourImage from "../../../asset/varsityImages/newImages/room.webp"
import SouthsideTwinImage from "../../../asset/varsityImages/newImages/t2.webp"
import SouthsidePrivateImage from "../../../asset/varsityImages/newImages/private-min.webp"
import SouthsideApartmentImage from "../../../asset/varsityImages/newImages/3bhk.webp"
import SouthsideNew1 from "../../../asset/varsityImages/newImages/new1.webp"
import SouthsideNew2 from "../../../asset/varsityImages/newImages/new2.webp"
import SouthsideNew3 from "../../../asset/varsityImages/newImages/new3.webp"
import SouthsideNew4 from "../../../asset/varsityImages/newImages/new4.webp"
import SouthsideNew5 from "../../../asset/varsityImages/newImages/new5.webp"
import SouthsideNew6 from "../../../asset/varsityImages/newImages/new6.webp"
import SouthsideNew7 from "../../../asset/varsityImages/newImages/new7.webp"
import SouthsideNew8 from "../../../asset/varsityImages/newImages/new8.webp"
import SouthsideNew9 from "../../../asset/varsityImages/newImages/new9.webp"
import SouthsideNew10 from "../../../asset/varsityImages/newImages/new10.webp"
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
    const images = [SouthsideMainImage,SouthsideOneImage,SouthsideTwoImage,SouthsideThreeImage,SouthsideFourImage,SouthsideNew1,SouthsideNew2,SouthsideNew3,SouthsideNew4,SouthsideNew5,SouthsideNew6,SouthsideNew7,SouthsideNew8,SouthsideNew9,SouthsideNew10]
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
     <Banner alt="Varsity Juhu / Santacruz" beds="198" apartment="38 Apartments" galleryImages={galleryImages} name="Varsity: Best Coliving PG in Santacruz West, Mumbai" location="Juhu / Santacruz" images={images} />
   <Details  subtitle="The Student Social Club" title="At the Junction of Bandra and Juhu, live the Best of Both Worlds." description="Varsity is located in the heart of Mumbai’s most demanding and posh area. Varsity is the perfect solution for students and also for those looking for a co-living space in Mumbai that combines comfort, convenience, and a sense of community. Located in the bustling city of Mumbai, Varsity offers a variety of shared and private spaces that cater to all your needs." />
     <Featured />
     <Rooms rooms={rooms} brochure="https://drive.google.com/file/d/1C5KsIUQGUhjVMYZtG5JzHUq8isfYpmUD/view?usp=sharing" />
     <WhatSection youtube="https://www.youtube.com/watch?v=28IF2x7ht1k"  />
     <MainPropertyCTA propertyName="Varsity, Juhu (Mumbai)" />
     <Location map="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15081.696760186362!2d72.8341302!3d19.0890381!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9fb0323a235%3A0x577a653a62504566!2sVarsity%20by%20Union%20Living!5e0!3m2!1sen!2sin!4v1709842768484!5m2!1sen!2sin" youtube="https://www.youtube.com/embed/28IF2x7ht1k?si=qEwmSl0gL_PMSeAi" />
     <Event />
    <TestimonialTwo />
    <BottomNavConstant name="Varsity"  price="Rs. 40,000" youtube="https://www.youtube.com/watch?v=28IF2x7ht1k" brochure="https://drive.google.com/file/d/1C5KsIUQGUhjVMYZtG5JzHUq8isfYpmUD/view?usp=sharing" />
      </div>
      </ThemeProvider>
  </div>
  )
}

export default VarsityProperty