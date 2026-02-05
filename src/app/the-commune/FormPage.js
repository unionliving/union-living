"use client"
import Footer from '@/components/Layout/Footer'
import NavbarTwo from '@/components/Layout/Navbar'
import { ThemeProvider } from '@material-tailwind/react'
import React, { Suspense, useEffect } from 'react'
import MainFormBox from './MainFormBox'
import LeadSquaredTracker from '@/components/Layout/LeadSquareTracker'

const FormPage = () => {
 
     
  return (
    <div>
      <ThemeProvider>
      <LeadSquaredTracker /> 
        <NavbarTwo />
        <div className='lg:pt-[150px] pt-[100px]'>
       <MainFormBox />
        <Footer />
        </div>
        </ThemeProvider>
    </div>
  )
}

export default FormPage