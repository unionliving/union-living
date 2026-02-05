"use client"
import Footer from '@/components/Layout/Footer'
import NavbarTwo from '@/components/Layout/Navbar'
import PropertiesList from '@/components/Properties/PropertiesList'
import Banner from '@/components/property/Banner'
import { ThemeProvider } from '@material-tailwind/react'
import React, { Suspense, useEffect } from 'react'
import SouthsideMainImage from "../../../asset/abode/newImages/abode1_5_11zon.webp"
import SouthsideOneImage from "../../../asset/abode/newImages/abode2_6_11zon.webp"
import SouthsideTwoImage from "../../../asset/abode/newImages/abode3_7_11zon.webp"
import SouthsideThreeImage from "../../../asset/abode/newImages/abode4_8_11zon.webp"
import SouthsideFourImage from "../../../asset/abode/newImages/abode1_5_11zon.webp"
import SouthsideQuadImage from "../../../asset/abode/newImages/quad_2_11zon.webp"
import SouthsideTripleImage from "../../../asset/abode/newImages/triple_3_11zon.webp"
import SouthsideTwinImage from "../../../asset/abode/newImages/double_1_11zon.webp"
import SouthsidePrivateImage from "../../../asset/abode/newImages/Untitled design (50)_4_11zon.webp"
import Details from '@/components/property/Details'
import Featured from '@/components/property/Featured'
import Rooms from '@/components/property/Rooms'
import WhatSection from '@/components/property/WhatSection'
import Location from '@/components/property/Location'
import Event from '@/components/property/Event'
import TestimonialTwo from '@/components/Home/Testimonial.js'
import Roomstwo from '@/components/property/Roomstwo'
import BottomNavConstant from '@/components/property/BottomFixed'
import MainPropertyCTA from '@/components/property/MainPropertyCTA'
import LeadSquaredTracker from '@/components/Layout/LeadSquareTracker'

const AbodeProperty = () => {
    const images = [SouthsideMainImage,SouthsideOneImage,SouthsideTwoImage,SouthsideThreeImage,SouthsideFourImage]
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
            title:"Quadruple",
            description:"Cozy Quadruple room with modern amenities, perfect for sharing and fostering community connections.",
            image:SouthsideQuadImage
          },
        {
            title:"Triple",
            description:"Triple Sharing room with en-suite bathroom, fully furnished, high-speed Wi-Fi, and regular housekeeping.",
            image:SouthsideTripleImage
          },
        {
          title:"Double",
          description:"Double Sharing room with en-suite bathroom, fully furnished, high-speed Wi-Fi, and regular housekeeping.",
          image:SouthsideTwinImage
        },
        {
          title:"Private",
          description:"Private room with en-suite bathroom, fully furnished, high-speed Wi-Fi, and regular housekeeping.",
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
     <Banner alt="Abode Dhankawadi, Pune" apartment="39 Rooms" beds="105" galleryImages={galleryImages} name="Abode by Union Living: Luxury Coliving Spaces in Dhankawadi, Pune" location="Dhankawadi, Pune" images={images} />
   <Details subtitle="Exclusive CoLiving in Dhankawadi, Pune" title="Experience Modern Amenities and a Vibrant Community in Dhankawadi, Pune" description="Discover the perfect blend of comfort and community in Dhankawadi, Pune. Our co-living space offers modern amenities, high-speed Wi-Fi, and engaging events for an unparalleled living experience. Coliving Pune is redefining urban living, and our space stands out among the best coliving spaces in Pune for those seeking convenience and connection." />
     <Featured />
     <Roomstwo rooms={rooms}  />
     <WhatSection />
     <MainPropertyCTA propertyName="Abode, Dhankawadi (Pune)" />
     <Location map="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15138.861724580498!2d73.8515089!3d18.4512253!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x59f788787b859109!2sAbode%20by%20Union%20Co-Living!5e0!3m2!1sen!2sin!4v1673683559577!5m2!1sen!2sin" />
     <Event />
    <TestimonialTwo />
    <BottomNavConstant name="Abode"  price="Rs. 7,499"  />
      <Footer />
      </div>
      </ThemeProvider>
  </div>
  )
}

export default AbodeProperty