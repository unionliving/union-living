"use client"
import Footer from '@/components/Layout/Footer'
import NavbarTwo from '@/components/Layout/Navbar'
import PropertiesList from '@/components/Properties/PropertiesList'
import Banner from '@/components/property/Banner'
import { ThemeProvider } from '@material-tailwind/react'
import React, { Suspense, useEffect } from 'react'
import SouthsideMainImage from "../../../asset/zest/zest1.webp"
import SouthsideOneImage from "../../../asset/varsityImages/newImages/canteen.webp"
import SouthsideTwoImage from "../../../asset/zest/2.webp"
import SouthsideThreeImage from "../../../asset/zest/zest3.webp"
import SouthsideFourImage from "../../../asset/zest/zest5.webp"

import SouthsideSixImage from "../../../asset/zest/zest6.webp"
import SouthsideSevenImage from "../../../asset/zest/zest7.webp"
import SouthsideEightImage from "../../../asset/zest/zest8.webp"
import SouthsideNineImage from "../../../asset/zest/zest9.webp"
import SouthsideTenImage from "../../../asset/zest/zest10.webp"
import SouthsideElevenImage from "../../../asset/zest/zest11.webp"
import SouthsideTwelveImage from "../../../asset/zest/zest12.webp"
import SouthsideThirteenImage from "../../../asset/zest/zest13.webp"
import SouthsideTwinImage from "../../../asset/zest/zest7.webp"
import SouthsideTripleImage from "../../../asset/zest/zest8.webp"
import SouthsidePrivateImage from "../../../asset/zest/zest10.webp"
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

const ZestProperty = () => {
    const images = [SouthsideMainImage,SouthsideOneImage,SouthsideTwoImage,SouthsideThreeImage,SouthsideFourImage,SouthsideSixImage,SouthsideSevenImage,SouthsideEightImage,SouthsideTenImage,SouthsideElevenImage,SouthsideTwelveImage,SouthsideThirteenImage]
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
            src: SouthsideThreeImage,
            width: "100%",
            height: "100%",
          },
          {
            src: SouthsideTwoImage,
            width: "100%",
            height: "100%",
          },
          {
            src: SouthsideFourImage,
            width: "100%",
            height: "100%",
          },
         
          {
            src: SouthsideSixImage,
            width: "100%",
            height: "100%",
          },
          {
            src: SouthsideSevenImage,
            width: "100%",
            height: "100%",
          },
          {
            src: SouthsideEightImage,
            width: "100%",
            height: "100%",
          },
          {
            src: SouthsideNineImage,
            width: "100%",
            height: "100%",
          },
          {
            src: SouthsideTenImage,
            width: "100%",
            height: "100%",
          },
          {
            src: SouthsideElevenImage,
            width: "100%",
            height: "100%",
          },
          {
            src: SouthsideTwelveImage,
            width: "100%",
            height: "100%",
          },
          {
            src: SouthsideThirteenImage,
            width: "100%",
            height: "100%",
          },
         
]
      const rooms = [
        {
            title:"Triple",
            description:"Cozy triple room with modern amenities, perfect for sharing and fostering community connections.",
            image:SouthsideTripleImage
          },
        {
          title:"Twin",
          description:"Cozy twin room with modern amenities, perfect for sharing and fostering community connections.",
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
     <Banner alt="Zest Chembur" apartment="19 Flats" beds="128" galleryImages={galleryImages} name="Zest: Best Coliving PG in Chembur for Female & Male" location="Chembur" images={images} />
   <Details  subtitle="The Student & Young Professionals’ Hub" title="At the Crossroads of Connectivity and Calm, Experience the Best of East Mumbai." description="Located in the vibrant neighborhood of Chembur, Zest CoLiving brings you the ideal balance of city buzz and peaceful living. Perfect for students and young professionals, Zest offers a thoughtfully designed co-living experience that blends comfort, convenience, and community. From fully furnished shared and private rooms to common lounges and collaborative spaces, Zest is your go-to address for hassle-free living in Mumbai's fast-growing eastern corridor." />
     <Featured />
     <Rooms rooms={rooms} brochure="https://drive.google.com/file/d/1_o2neuRyVK_aFw6IRWxJTN7ZnNhga50d/view?usp=sharing"  />
     <WhatSection   />
     <MainPropertyCTA propertyName="Zest, Chembur (Mumbai)" />
     <Location youtube="https://www.youtube.com/embed/7xdm78GcsR0?si=tPoNpk19HZcPBybk" map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.658019579056!2d72.8864997!3d19.052571200000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9354517da69%3A0xdc6b62049e85cbf7!2sZest%20by%20Union%20Living!5e1!3m2!1sen!2sin!4v1746185141225!5m2!1sen!2sin"  />
     <Event />
    <TestimonialTwo />
    <BottomNavConstant name="Zest"  price="Rs. 20,000" youtube="https://youtu.be/7xdm78GcsR0" brochure="https://drive.google.com/file/d/1_o2neuRyVK_aFw6IRWxJTN7ZnNhga50d/view?usp=sharing" />
      <Footer />
      </div>
      </ThemeProvider>
  </div>
  )
}

export default ZestProperty