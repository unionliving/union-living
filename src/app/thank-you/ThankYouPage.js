"use client"
import React from 'react'
import Lottie from "lottie-react";

import groovyWalkAnimation from "../../asset/success.json";
import { ThemeProvider } from '@material-tailwind/react';
import Link from 'next/link';

const ThankyouPage = () => {
    
    

  return (
    <div className='relative'>
    <ThemeProvider>
        <Link href="/">
        <div className='bg-black absolute right-2 text-white flex items-center justify-center rounded-full top-2 text-[1rem] p-3 w-[40px] h-[40px]' >
            X
        </div>
        </Link>
      <div className='flex h-[100vh]  flex-col items-center justify-center'>
        <div className='w-[40%]'>
      <Lottie animationData={groovyWalkAnimation} loop={true} />
      <h4 className='text-center'>Thank You For Your Response!</h4>
      </div>
      </div>
      </ThemeProvider>
  </div>
  )
}

export default ThankyouPage