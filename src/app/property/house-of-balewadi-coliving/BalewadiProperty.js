"use client"
import Footer from '@/components/Layout/Footer'
import NavbarTwo from '@/components/Layout/Navbar'
import PropertiesList from '@/components/Properties/PropertiesList'
import Banner from '@/components/property/Banner'
import { ThemeProvider } from '@material-tailwind/react'
import React, { Suspense, useEffect } from 'react'
import SouthsideMainImage from "../../../asset/houseofbalewadi/1.webp"
import SouthsideOneImage from "../../../asset/casa/newImages/canteen.webp"
import SouthsideTwoImage from "../../../asset/houseofbalewadi/2.webp"
import SouthsideThreeImage from "../../../asset/houseofbalewadi/3.webp"
import SouthsideFourImage from "../../../asset/houseofbalewadi/4.webp"
import SouthsideNew1 from "../../../asset/houseofbalewadi/newImages1.webp"
import SouthsideNew2 from "../../../asset/houseofbalewadi/newImages2.webp"
import SouthsideNew3 from "../../../asset/houseofbalewadi/newImages3.webp"
import SouthsideNew4 from "../../../asset/houseofbalewadi/newImages4.webp"
import SouthsideNew5 from "../../../asset/houseofbalewadi/newImages5.webp"
import SouthsideNew6 from "../../../asset/houseofbalewadi/newImages6.webp"
import SouthsideNew7 from "../../../asset/houseofbalewadi/newImages7.webp"
import SouthsideNew8 from "../../../asset/houseofbalewadi/newImages8.webp"
import SouthsideNew10 from "../../../asset/houseofbalewadi/newImages9.webp"
import SouthsideNew11 from "../../../asset/houseofbalewadi/newImages10.webp"
import SouthsideNew12 from "../../../asset/houseofbalewadi/newImages11.webp"
import SouthsideNew13 from "../../../asset/houseofbalewadi/newImages12.webp"
import SouthsideNew9 from "../../../asset/houseofbalewadi/newImages13.webp"

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
    const images = [SouthsideMainImage,SouthsideOneImage,SouthsideTwoImage,SouthsideThreeImage,SouthsideFourImage,SouthsideNew1,SouthsideNew2,SouthsideNew3,SouthsideNew4,SouthsideNew5,SouthsideNew6,SouthsideNew7,SouthsideNew8,SouthsideNew9,SouthsideNew10,SouthsideNew11,SouthsideNew12,SouthsideNew13]
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
       <Banner alt="House of Balewadi" beds="144" apartment="72 Studios" galleryImages={galleryImages} name="House of Balewadi: Best PG in Balewadi for Male & Female" location="Balewadi, Pune" images={images} />
     <Details subtitle="Where Modern Living Meets Vibrant Community Life" title="Experience Modern Living at Balewadi’s Premier Coliving Space" description="Enjoy a seamless blend of comfort, convenience, and community at Balewadi’s top coliving space. With modern amenities, engaging social events, and a prime location, our coliving spaces in Pune offer the perfect environment for students and professionals. Your ideal lifestyle is just a move away. Join us today!" />
       <Featured />
       {/* <Rooms rooms={rooms}   /> */}
       <WhatSection  />
       <MainPropertyCTA propertyName="House of Balewadi, Pune" />
       <Location map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.7244298311407!2d73.7666243!3d18.577751300000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9fc2ce457f7%3A0xf25693f77b5cb9bb!2sHouse%20of%20Balewadi%20by%20Union%20Living!5e1!3m2!1sen!2sin!4v1743759190016!5m2!1sen!2sin"/>
       <Event />
      <TestimonialTwo />
      <BottomNavConstant name="House of Balewadi"  price="Rs. 18,000" brochure="https://drive.google.com/file/d/1F-DiGAn04j7QqLuOKQDeT34UEa1FBl79/view?usp=sharing" />
        <Footer />
        </div>
        </ThemeProvider>
    </div>
  )
}

export default BalewadiProperty