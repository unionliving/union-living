"use client"
import Footer from '@/components/Layout/Footer'
import NavbarTwo from '@/components/Layout/Navbar'
import PropertiesList from '@/components/Properties/PropertiesList'
import Banner from '@/components/property/Banner'
import { ThemeProvider } from '@material-tailwind/react'
import React, { Suspense, useEffect } from 'react'
import SouthsideMainImage from "../../../asset/nova/first.webp"
import SouthsideOneImage from "../../../asset/nova/second.webp"
import SouthsideTwoImage from "../../../asset/nova/third.webp"
import SouthsideThreeImage from "../../../asset/nova/forth.webp"
import SouthsideFourImage from "../../../asset/nova/fifth.webp"


// import SouthsideTwinImage from "../../../asset/hamletImages/newImages/twin.webp"
// import SouthsidePrivateImage from "../../../asset/hamletImages/newImages/private.webp"
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

const BalewadiProperty = () => {
    const images = [SouthsideMainImage,SouthsideOneImage,SouthsideTwoImage,SouthsideThreeImage,SouthsideFourImage,]
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

    //   const rooms = [
       
    //     {
    //       title:"Double Sharing",
    //       description:"Discover the perfect balance of privacy and camaraderie in our double sharing rooms, designed for professionals looking for a welcoming and convenient living experience.",
    //       image:SouthsideTwinImage
    //     },
    //     {
    //       title:"Private Sharing",
    //       description:"Escape to your own private haven in our private rooms, designed for individuals who value their personal space and tranquility",
    //       image:SouthsidePrivateImage
    //     },
    //   ]
  return (
    <div>
      <ThemeProvider>
      <LeadSquaredTracker /> 
        <NavbarTwo />
        <div className='lg:pt-[150px] pt-[100px]'>
       <Banner alt="House of KP" beds="96" apartment="48 Rooms" galleryImages={galleryImages} name="Nova" location="Gurugram" images={images} />
     <Details subtitle="Welcome to Nova by Union Living, Gurugram" title="Welcome to Nova, Gurugram" description="Live in style at DLF Cyber City, Phase 2 - where everything you need is just steps away. From cozy rooms and high-speed Wi-Fi to chill zones and weekend events, Nova gives you more than a place to stay — it gives you a community that feels like family. Work hard, hang harder, and experience the best of modern coliving in Gurugram.
" />
       <Featured />
       {/* <Rooms rooms={rooms}   /> */}
       <WhatSection  />
       <MainPropertyCTA propertyName="Nova, Gurugram" />
       <Location map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.6845226979!2d77.0879631!3d28.489046000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d194e34edba69%3A0x5ba3b0b8371af24d!2sNova%20by%20Union%20Living!5e0!3m2!1sen!2sin!4v1759753884071!5m2!1sen!2sin"/>
       <Event />
      <TestimonialTwo />
      <BottomNavConstant brochure="https://drive.google.com/file/d/1QJZ4W_kJ5Z-gY647D6PddfyvodYUEeIZ/view?usp=sharing" name="Nova"  price="Rs. 25,000"  />
        <Footer />
        </div>
        </ThemeProvider>
    </div>
  )
}

export default BalewadiProperty