"use client"
import Category from '@/components/Community/Category'
import CommunityBanner from '@/components/Community/CommunityBanner'
import EventGallery from '@/components/Community/EventGallery'
import UpcomingEvents from '@/components/Community/UpcomingEvents'
import Footer from '@/components/Layout/Footer'
import NavbarTwo from '@/components/Layout/Navbar'
import { ThemeProvider } from '@material-tailwind/react'
import React, { useEffect } from 'react'

const CommunityPage = () => {
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
        <NavbarTwo />
        <div className='lg:pt-[150px] pt-[100px]'>
        <CommunityBanner />
      {/* <UpcomingEvents /> */}
       <Category />
       <EventGallery />
        <Footer />
        </div>
        </ThemeProvider>
    </div>
  )
}

export default CommunityPage