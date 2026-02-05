"use client"
import AboutBanner from '@/components/About/AboutBanner'
import Design from '@/components/About/Design'
import OurVision from '@/components/About/OurVision'
import Tech from '@/components/About/Tech'
import NavbarTwo from '@/components/Layout/Navbar'
import React, { useEffect } from 'react'
import Portfolio from '@/components/About/Portfolio'
import Community from '@/components/About/Community'
import TestimonialTwo from '@/components/Home/Testimonial'
import Footer from '@/components/Layout/Footer'
import Head from 'next/head'
import { ThemeProvider } from '@material-tailwind/react'
import LeadSquaredTracker from '@/components/Layout/LeadSquareTracker'



const AboutPage = () => {
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
        <AboutBanner />
        <OurVision />
        <Tech />
        <Design />
        <Community />
        <Portfolio />
        <TestimonialTwo />
        <Footer />
      </div>
      </ThemeProvider>
    </div>
  )
}

export default AboutPage