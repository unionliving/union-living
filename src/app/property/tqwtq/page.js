import React from 'react'
import Chapter1Property from './Chapter1Property'
import Head from 'next/head'
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata = {
  title: "Prime CoLiving Spaces in CBD, Navi Mumbai | Luxury Coliving in Navi Mumbai | Chapter 1 By Union Living",
  description: "Discover luxury coliving spaces at Chapter 1 by Union Living in CBD, Navi Mumbai. Fully furnished rooms with top-notch amenities, perfect for college students and working professionals. Experience a vibrant community today!",
  keywords: ['Union Living','Union Living Mumbai','Community Living in Mumbai', 'Community Living in Pune', 'Community Living in Thane','Community Living in Navi Mumbai', "Premium Co-living",'Best Community'],
  verification: {
    google: 'd2t3dmGtRE5YMyQqUbiHFM-lWvnz9mpRbS7Wwmb8uS0',
  },
  openGraph: {
    title: "Prime CoLiving Spaces in CBD, Navi Mumbai | Luxury Coliving in Navi Mumbai | Chapter 1 By Union Living",
    description: "Discover luxury coliving spaces at Chapter 1 by Union Living in CBD, Navi Mumbai. Fully furnished rooms with top-notch amenities, perfect for college students and working professionals. Experience a vibrant community today!",
    url: 'https://unionliving.in/property/chapter1-coliving-cbd-belapur/',
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
        alt: 'My custom alt',
      },
    ],
  
  },
  alternates: {
    canonical: 'https://unionliving.in/property/chapter1-coliving-cbd-belapur/',
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


const page = () => {
  return (
    <div>
      <Head>
      <meta name="robots" content="follow, index" />
      </Head>
        <Chapter1Property />
        <GoogleAnalytics gaId="G-RZN1HJ2RWE" />
    </div>
  )
}

export default page