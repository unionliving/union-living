"use client"
import Footer from '@/components/Layout/Footer'
import NavbarTwo from '@/components/Layout/Navbar'
import PropertiesList from '@/components/Properties/PropertiesList'
import Banner from '@/components/property/Banner'
import { ThemeProvider } from '@material-tailwind/react'
import React, { Suspense, useEffect } from 'react'
import SouthsideMainImage from "../../../asset/terraImages/mainimage.webp"
import SouthsideOneImage from "../../../asset/terraImages/newImages/1.webp"
import SouthsideTwoImage from "../../../asset/terraImages/newImages/new4.webp"
import SouthsideThreeImage from "../../../asset/terraImages/newImages/canteen.webp"
import SouthsideFourImage from "../../../asset/terraImages/newImages/new.webp"
import SouthsideQuadImage from "../../../asset/terraImages/newImages/quad.png"
import SouthsideTripleImage from "../../../asset/terraImages/newImages/triple.png"
import SouthsideTwinImage from "../../../asset/terraImages/newImages/twi.webp"
import SouthsideNew1Image from "../../../asset/terraImages/newImages/new1.webp"
import SouthsideNew2Image from "../../../asset/terraImages/newImages/new2.webp"
import SouthsideNew3Image from "../../../asset/terraImages/newImages/new3.webp"
import SouthsideNew5Image from "../../../asset/terraImages/newImages/new5.webp"
import SouthsideNew6Image from "../../../asset/terraImages/newImages/new6.webp"
import SouthsideNew7Image from "../../../asset/terraImages/newImages/new7.webp"
import SouthsideNew8Image from "../../../asset/terraImages/newImages/new8.webp"
import SouthsideNew9Image from "../../../asset/terraImages/newImages/new9.webp"
import SouthsideNew10Image from "../../../asset/terraImages/newImages/new10.webp"
import SouthsidePrivateImage from "../../../asset/terraImages/newImages/pri.webp"
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

const TerraProperty = () => {
    const images = [SouthsideMainImage,SouthsideOneImage,SouthsideTwoImage,SouthsideThreeImage,SouthsideFourImage,SouthsideNew1Image,SouthsideNew2Image,SouthsideNew3Image,SouthsideNew5Image,SouthsideNew6Image,SouthsideNew7Image,SouthsideNew8Image,SouthsideNew9Image,SouthsideNew10Image]
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
          title:"Quad",
          description:"Spacious quad sharing room with modern amenities, high-speed Wi-Fi, and ample storage space.",
          image:SouthsideQuadImage
        },
        {
          title:"Triple",
          description:"Comfortable triple sharing room with modern amenities, high-speed Wi-Fi, and ample storage space.",
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
       <Banner alt="Terra Juhu" beds="152" apartment="63 Rooms"  galleryImages={galleryImages} name="Terra: Luxurious Coliving PG in Juhu, Mumbai" location="Juhu" images={images} />
     <Details subtitle="Walking Distance from Juhu Colleges" title="Spacious Student Studio Rooms, Close to Action of Juhu." description="Welcome to Terra, your sunlit haven in the heart of Juhu. Experience the perfect blend of comfort and nature with our cozy, terrarium-inspired living spaces. Each room is bathed in natural light, creating a warm and inviting atmosphere. Our coliving in Juhu offers a unique, eco-friendly environment that fosters a sense of tranquility and well-being, making it the ideal retreat for students seeking both comfort and inspiration." />
       <Featured />
       <Roomstwo brochure="https://drive.google.com/file/d/14WpDpXwGCUdzZbbwmWTz0dmqU4lC7ynF/view?usp=sharing" rooms={rooms} />
       <WhatSection youtube="https://youtu.be/4uAQ2Hr0ku8?si=U_Y4ypNcrFVEW4Ux" />
       <MainPropertyCTA propertyName="Terra, Juhu (Mumbai)" />
       <Location map="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15079.663821938235!2d72.8389376!3d19.1113426!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c93fc7fa60af%3A0x71920bbde6e70ed6!2sTerra%20by%20Union%20Living!5e0!3m2!1sen!2sin!4v1717177015017!5m2!1sen!2sin" youtube="https://www.youtube.com/embed/4uAQ2Hr0ku8?si=AQX1Z4zGZDYOM39w" />
       <Event />
      <TestimonialTwo />
      <BottomNavConstant name="Terra"  price="Rs. 35,000" youtube="https://www.youtube.com/watch?v=4uAQ2Hr0ku8" brochure="https://drive.google.com/file/d/14WpDpXwGCUdzZbbwmWTz0dmqU4lC7ynF/view?usp=sharing"  />
        <Footer />
        </div>
        </ThemeProvider>
    </div>
  )
}

export default TerraProperty