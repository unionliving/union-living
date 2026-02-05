"use client"
import Footer from '@/components/Layout/Footer'
import NavbarTwo from '@/components/Layout/Navbar'
import PropertiesList from '@/components/Properties/PropertiesList'
import Banner from '@/components/property/Banner'
import { ThemeProvider } from '@material-tailwind/react'
import React, { Suspense, useEffect } from 'react'
import SouthsideMainImage from "../../../asset/hamletImages/newImages/firstimage.webp"
import SouthsideOneImage from "../../../asset/casa/newImages/canteen.webp"
import SouthsideTwoImage from "../../../asset/hamletImages/newImages/gym.webp"
import SouthsideThreeImage from "../../../asset/hamletImages/newImages/terrace.webp"
import SouthsideFourImage from "../../../asset/hamletImages/newImages/eating.webp"
import SouthsideTwinImage from "../../../asset/hamletImages/newImages/twin.webp"
import SouthsidePrivateImage from "../../../asset/hamletImages/newImages/private.webp"
import SouthsideNew1 from "../../../asset/hamletImages/newImages/newimage1.webp"
import SouthsideNew2 from "../../../asset/hamletImages/newImages/newimage2.webp"
import SouthsideNew3 from "../../../asset/hamletImages/newImages/newimage3.webp"
import SouthsideNew4 from "../../../asset/hamletImages/newImages/newimage4.webp"
import SouthsideNew5 from "../../../asset/hamletImages/newImages/newimage5.webp"
import SouthsideNew6 from "../../../asset/hamletImages/newImages/newimage6.webp"
import SouthsideNew7 from "../../../asset/hamletImages/newImages/newimage7.webp"
import SouthsideNew8 from "../../../asset/hamletImages/newImages/newimage8.webp"
import SouthsideNew10 from "../../../asset/hamletImages/newImages/newimage10.webp"
import SouthsideNew11 from "../../../asset/hamletImages/newImages/newimage11.webp"
import SouthsideNew12 from "../../../asset/hamletImages/newImages/newimage12.webp"
import SouthsideNew13 from "../../../asset/hamletImages/newImages/newimage13.webp"
import SouthsideNew9 from "../../../asset/hamletImages/newImages/newimage9.webp"
import SouthsideNew14 from "../../../asset/hamletImages/newImages/newimage14.webp"
import SouthsideNew15 from "../../../asset/hamletImages/newImages/newimage15.webp"
import SouthsideNew16 from "../../../asset/hamletImages/newImages/newimage16.webp"
import SouthsideNew17 from "../../../asset/hamletImages/newImages/newimage17.webp"
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

const HamletProperty = () => {
    const images = [SouthsideMainImage,SouthsideOneImage,SouthsideTwoImage,SouthsideThreeImage,SouthsideFourImage,SouthsideNew1,SouthsideNew2,SouthsideNew3,SouthsideNew4,SouthsideNew5,SouthsideNew6,SouthsideNew7,SouthsideNew8,SouthsideNew9,SouthsideNew10,SouthsideNew11,SouthsideNew12,SouthsideNew13,SouthsideNew14,SouthsideNew15,SouthsideNew16,SouthsideNew17]
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
          title:"Double Sharing",
          description:"Discover the perfect balance of privacy and camaraderie in our double sharing rooms, designed for professionals looking for a welcoming and convenient living experience.",
          image:SouthsideTwinImage
        },
        {
          title:"Private Sharing",
          description:"Escape to your own private haven in our private rooms, designed for individuals who value their personal space and tranquility",
          image:SouthsidePrivateImage
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
       <Banner alt="Hamlet Baner, Pune" apartment="60 Rooms" beds="118" galleryImages={galleryImages} name="Hamlet: Premier Coliving PG Coliving in Baner, Pune" location="Baner, Pune" images={images} />
     <Details subtitle="Where Modern Living Meets Vibrant Community Life" title="Discover Comfort and Community at Pune's Premier Coliving Space" description="Experience the perfect blend of comfort and community at Pune's premier coliving spaces in Baner. Enjoy modern amenities, vibrant social events, and a convenient location, all designed to enhance your living experience. Join us today!" />
       <Featured />
       <Rooms rooms={rooms} brochure="https://drive.google.com/file/d/1kvN3wvaUjX816OOdaWiTNDAsLYQwYdQB/view?usp=sharing"  />
       <WhatSection youtube="https://www.youtube.com/watch?v=NDidnxhwT0M" />
       <MainPropertyCTA propertyName="Hamlet, Baner (Pune)" />
       <Location map="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15129.867506521172!2d73.7784034!3d18.5529787!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bff4afa8145f%3A0x6d7da05eef0c7ce1!2sUnion%20Hamlet!5e0!3m2!1sen!2sin!4v1712824758554!5m2!1sen!2sin" youtube="https://www.youtube.com/embed/NDidnxhwT0M" />
       <Event />
      <TestimonialTwo />
      <BottomNavConstant name="Hamlet"  price="Rs. 24,000" youtube="https://www.youtube.com/watch?v=NDidnxhwT0M&t=10s" brochure="https://drive.google.com/file/d/1kvN3wvaUjX816OOdaWiTNDAsLYQwYdQB/view?usp=sharing"  />
        <Footer />
        </div>
        </ThemeProvider>
    </div>
  )
}

export default HamletProperty