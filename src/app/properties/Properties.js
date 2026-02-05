"use client"
import Footer from '@/components/Layout/Footer'
import LeadSquaredTracker from '@/components/Layout/LeadSquareTracker'
import NavbarTwo from '@/components/Layout/Navbar'
import PropertiesList from '@/components/Properties/PropertiesList'
import { ThemeProvider } from '@material-tailwind/react'
import React, { Suspense, useEffect } from 'react'

const PropertiesPage = () => {
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
        <div className='lg:px-12 px-4 lg:pb-12 pb-4' >
        <div className='lg:grid grid-cols-4 items-center grid-flow-col' >
            <div className='col-span-3' >
                <h1 className='font-[NeueBold] text-[1.2rem] lg:text-[2.8rem]' >Explore Our Premium Coliving Properties.</h1>
               
            </div>
                
        </div>
    </div>
        <PropertiesList />
       
        <Footer />
        </div>
        </ThemeProvider>
    </div>
  )
}

export default PropertiesPage