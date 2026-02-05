"use client"
import Footer from '@/components/Layout/Footer'
import NavbarTwo from '@/components/Layout/Navbar'
import PropertiesList from '@/components/Properties/PropertiesList'
import Banner from '@/components/property/Banner'
import { ThemeProvider } from '@material-tailwind/react'
import React, { Suspense, useEffect } from 'react'
import SouthsideMainImage from "../../../asset/southsideImage/newImages/mainBanner.webp"
import SouthsideOneImage from "../../../asset/southsideImage/newImages/canteen.webp"
import SouthsideTwoImage from "../../../asset/southsideImage/newImages/gym-min.webp"
import SouthsideThreeImage from "../../../asset/southsideImage/newImages/Untitled design - 2024-06-07T221841.049.webp"
import SouthsideFourImage from "../../../asset/southsideImage/newImages/forth.webp"
import SouthsideTwinImage from "../../../asset/southsideImage/newImages/twin.webp"
import SouthsidePrivateImage from "../../../asset/southsideImage/newImages/private.webp"
import SouthsideNew1 from "../../../asset/southsideImage/new1.webp"
import SouthsideNew2 from "../../../asset/southsideImage/new2.webp"
import SouthsideNew3 from "../../../asset/southsideImage/new3.webp"
import SouthsideNew4 from "../../../asset/southsideImage/new4.webp"
import SouthsideNew5 from "../../../asset/southsideImage/new5.webp"
import SouthsideNew6 from "../../../asset/southsideImage/new6.webp"
import SouthsideNew7 from "../../../asset/southsideImage/new7.webp"
import SouthsideNew8 from "../../../asset/southsideImage/new8.webp"
import SouthsideNew10 from "../../../asset/southsideImage/new10.webp"
import SouthsideNew11 from "../../../asset/southsideImage/new11.webp"
import SouthsideNew12 from "../../../asset/southsideImage/new12.webp"
import SouthsideNew13 from "../../../asset/southsideImage/new13.webp"
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

const SouthsideProperty = () => {
    const images = [SouthsideMainImage,SouthsideOneImage,SouthsideThreeImage,SouthsideTwoImage,SouthsideFourImage,SouthsideNew1,SouthsideNew2,SouthsideNew3,SouthsideNew4,SouthsideNew4,SouthsideNew5,SouthsideNew6,SouthsideNew7,SouthsideNew8,SouthsideNew10,SouthsideNew11,SouthsideNew12,SouthsideNew13]
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
       <Banner alt="Southside Mahalaxmi" beds="120" apartment="26 Apartments" galleryImages={galleryImages} name="Southside: Premier CoLiving PG in Mahalaxmi, Mumbai" location="Mahalaxmi" images={images} />
     <Details subtitle="Mahalaxmi's Premier CoLiving Space" title="Discover a Lifestyle of Ease and Connection in Our Mahalaxmi CoLiving Space." description="Welcome to our co-living space in Mahalaxmi, a sanctuary where contemporary comfort meets a thriving community atmosphere. Situated in one of Mumbai’s most dynamic neighborhoods, our Luxury Co-Living Mumbai space offers an unparalleled living experience designed for modern urbanites. Whether you're a young professional, a digital nomad, or simply looking for a place that feels like home, we provide everything you need to live, work, and connect." />
       <Featured />
       <Rooms rooms={rooms} brochure="https://drive.google.com/file/d/1ZrPp5KyBKHv89U_Ao05WbdezuwOKqkoR/view?usp=sharing" />
       <WhatSection youtube="https://youtu.be/YukkDVVWgm0?si=OG8L4_vGW86mRxco" />
       <MainPropertyCTA propertyName="Southside, Mahalaxmi(Mumbai)" />
       <Location map="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15091.720798709732!2d72.8258839!3d18.9786898!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cfc462de8a1f%3A0x2a4ee6362fbea170!2sSouthside%20by%20Union%20Living!5e0!3m2!1sen!2sin!4v1714534828670!5m2!1sen!2sin" youtube="https://www.youtube.com/embed/YukkDVVWgm0?si=sp-H2rNbxc_dZbA4" />
       <Event />
      <TestimonialTwo />
      <BottomNavConstant name="Southside" brochure="https://drive.google.com/file/d/1ZrPp5KyBKHv89U_Ao05WbdezuwOKqkoR/view?usp=sharing"  />
        <Footer />
        </div>
        </ThemeProvider>
    </div>
  )
}

export default SouthsideProperty