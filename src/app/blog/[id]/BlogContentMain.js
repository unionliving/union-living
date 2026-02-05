"use client"
import React, { useEffect, useState } from 'react'
import SingleBlogContent from '@/components/Blogs/BlogContent'
import Footer from '@/components/Layout/Footer'
import NavbarTwo from '@/components/Layout/Navbar'

import { useRouter } from 'next/navigation'
import { ThemeProvider } from '@material-tailwind/react'

const BlogContentMain = ({blogContent}) => {
 
  
  return (
    <ThemeProvider>
    <div>
      <NavbarTwo />
      <div className='lg:pt-[150px] pt-[100px]'>
       {Object.keys(blogContent).length !==0 && <SingleBlogContent blogContent={blogContent} />}
        <Footer />
      </div>
    </div>
    </ThemeProvider>
  )
}

export default BlogContentMain