"use client"
import Footer from '@/components/Layout/Footer'
import NavbarTwo from '@/components/Layout/Navbar'
import { ThemeProvider } from '@material-tailwind/react'
import React, { Suspense } from 'react'
import MainChannelPartnerForm from './MainChannelPartnerForm'


const ChannelPartnerMain = () => {
  return (
    <div>
    <ThemeProvider>
      <NavbarTwo />
      <div className='lg:pt-[150px] pt-[100px]'>
     <MainChannelPartnerForm />
      <Footer />
      </div>
      </ThemeProvider>
  </div>
  )
}

export default ChannelPartnerMain