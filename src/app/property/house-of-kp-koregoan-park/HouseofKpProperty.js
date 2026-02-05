"use client"
import Footer from '@/components/Layout/Footer'
import NavbarTwo from '@/components/Layout/Navbar'
import PropertiesList from '@/components/Properties/PropertiesList'
import Banner from '@/components/property/Banner'
import { ThemeProvider } from '@material-tailwind/react'
import React, { Suspense, useEffect } from 'react'
import SouthsideMainImage from "../../../asset/houseofkp/kp1.webp"
import SouthsideOneImage from "../../../asset/houseofkp/kp2.webp"
import SouthsideTwoImage from "../../../asset/houseofkp/kp3.webp"
import SouthsideThreeImage from "../../../asset/houseofkp/kp4.webp"
import SouthsideFourImage from "../../../asset/houseofkp/kp5.webp"
import SouthsideFiveImage from "../../../asset/houseofkp/kp6.webp"
import SouthsideSixImage from "../../../asset/houseofkp/kp7.webp"
import SouthsideSevenImage from "../../../asset/houseofkp/kp8.webp"
import SouthsideEightImage from "../../../asset/houseofkp/kp9.webp"
import SouthsideNineImage from "../../../asset/houseofkp/kp10.webp"


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
          {
            src: SouthsideFiveImage,
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
       <Banner alt="House of KP" beds="100" apartment="70 Rooms" galleryImages={galleryImages} name="House of KP" location="Koregoan Park, Pune" images={images} />
     <Details subtitle="Live Where Lifestyle Meets Community" title="Welcome to House of KP, Koregaon Park" description="Find the right mix of comfort, convenience, and community living. With modern spaces, curated experiences, and a vibrant neighborhood, House of KP offers students and professionals the perfect place to live, connect, and thrive in Pune’s most iconic area." />
       <Featured />
       {/* <Rooms rooms={rooms}   /> */}
       <WhatSection youtube="https://www.youtube.com/embed/o8i-_6Y5iB0?si=_YaPKbr-Sxr5lx1T"  />
       <MainPropertyCTA propertyName="House of KP, Koregoan Park, Pune" />
       <Location map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4112.728809628425!2d73.8871521!3d18.541306299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1a0a4c28549%3A0xd38d149be229b6ac!2sHouse%20of%20KP%20by%20Union%20Living!5e1!3m2!1sen!2sin!4v1759263196920!5m2!1sen!2sin" youtube="https://www.youtube.com/embed/o8i-_6Y5iB0?si=_YaPKbr-Sxr5lx1T"  />
       <Event />
      <TestimonialTwo />
      <BottomNavConstant brochure="https://drive.google.com/file/d/1OPzwbvNP2QYJ6aEu-3Lq7JFrTTwRga4N/view?usp=sharing" name="House of KP"  price="Rs. 28,000"  />
        <Footer />
        </div>
        </ThemeProvider>
    </div>
  )
}

export default BalewadiProperty