"use client"
import HomeBanner from '@/components/Home/HomeBanner.js'
import NavbarTwo  from '../../components/Layout/Navbar.js'
import React, { useEffect } from 'react'
import { Suspense } from 'react'
import Featured from '@/components/Home/Featured.js'
import Amenities from '@/components/Home/Amenities.js'
import Unite from '@/components/Home/Unite.js'
import LeftAndRight from '@/components/Home/LeftAndRight.js'
import TestimonialTwo from '@/components/Home/Testimonial.js'
import Footer from '@/components/Layout/Footer.js'
import Head from 'next/head.js'
import { ThemeProvider } from "@material-tailwind/react";
import Script from 'next/script.js'
import LeadSquaredTracker from '@/components/Layout/LeadSquareTracker.js'
import PropertiesList from '@/components/Home/PropertiesList.js'
import PropertiesCollege from '@/components/Home/PropertiesCollege.js'
import HomeCTABanner from '@/components/Home/HomeCTABanner.js'
const Home = () => {
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
      <LeadSquaredTracker /> 
       <ThemeProvider>
        <NavbarTwo />
        <div className='lg:pt-[150px] pt-[100px]'>
    <Suspense fallback={<p>Loading video...</p>}>
       <HomeBanner/>
       </Suspense>
       <Featured />
       <PropertiesList />
       <Amenities />
       
       <PropertiesCollege />
       <HomeCTABanner />
       <Unite />

       <LeftAndRight />
       <TestimonialTwo />
       <Footer />
       </div>
       </ThemeProvider>
    </div>
  )
}

export default Home