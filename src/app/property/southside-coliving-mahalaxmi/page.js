import React from 'react'
import SouthsideProperty from './SouthsideProperty'
import Head from 'next/head'
import { GoogleAnalytics } from '@next/third-parties/google'
export const metadata = {
  title: "Best PG in Mahalaxmi | Coliving PG in Mumbai | Southside Luxury Coliving Space",
  description: "Explore a premium PG in Mahalaxmi Mumbai with modern amenities. Ideal coliving space in Mumbai for young professionals. Experience Southside, your perfect community living. Click here to get more details.",
  keywords: ['Union Living','Union Living Mumbai','Community Living in Mumbai', 'Community Living in Pune', 'Community Living in Thane','Community Living in Navi Mumbai', "Premium Co-living",'Best Community'],
  verification: {
    google: 'd2t3dmGtRE5YMyQqUbiHFM-lWvnz9mpRbS7Wwmb8uS0',
  },
  openGraph: {
    title: "Best PG in Mahalaxmi | Coliving PG in Mumbai | Southside Luxury Coliving Space",
    description: "Explore a premium PG in Mahalaxmi Mumbai with modern amenities. Ideal coliving space in Mumbai for young professionals. Experience Southside, your perfect community living. Click here to get more details.",
    url: 'https://unionliving.in/property/southside-coliving-mahalaxmi/',
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
        alt: 'Southside',
      },
    ],
  
  },
  alternates: {
    canonical: 'https://unionliving.in/property/southside-coliving-mahalaxmi/',
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
        <SouthsideProperty />
        <GoogleAnalytics gaId="G-RZN1HJ2RWE" />
    </div>
  )
}

export default page