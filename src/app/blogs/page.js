import React from 'react'
import BlogsPage from './BlogsPage'
import Head from 'next/head'
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata = {
  title: "Union Living Blogs | Explore Luxury Co-Living & PG Spaces in Mumbai",
  description: "Explore insightful articles on luxury co-living, PG accommodations, and lifestyle tips in Mumbai. Stay updated with Union Living's latest blog posts.",
  keywords: ['Union Living','Union Living Mumbai','Community Living in Mumbai', 'Community Living in Pune', 'Community Living in Thane','Community Living in Navi Mumbai', "Premium Co-living",'Best Community'],

  openGraph: {
    title: "Union Living Blogs | Explore Luxury Co-Living & PG Spaces in Mumbai",
  description: "Explore insightful articles on luxury co-living, PG accommodations, and lifestyle tips in Mumbai. Stay updated with Union Living's latest blog posts.",
    url: 'https://unionliving.in/blogs/',
    siteName: 'Union Living',
    images: [
      {
        url: 'https://cdn.shopify.com/s/files/1/0638/7833/2481/files/favicon.png?v=1767689301', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0638/7833/2481/files/favicon.png?v=1767689301', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: '',
      },
    ],
  
  },
  alternates: {
    canonical: 'https://unionliving.in/blogs/',
  },
 
  icons: {
    icon: 'https://cdn.shopify.com/s/files/1/0638/7833/2481/files/favicon.png?v=1767689301',
    shortcut: 'https://cdn.shopify.com/s/files/1/0638/7833/2481/files/favicon.png?v=1767689301',
    apple: 'https://cdn.shopify.com/s/files/1/0638/7833/2481/files/favicon.png?v=1767689301',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: 'https://cdn.shopify.com/s/files/1/0638/7833/2481/files/favicon.png?v=1767689301',
    },
  },
}

const Blogs = () => {
  return (
    <div>
       <Head>
      <meta name="robots" content="follow, index" />


      </Head>
      
            <BlogsPage />
            <GoogleAnalytics gaId="G-RZN1HJ2RWE" />
       
    </div>
  )
}

export default Blogs