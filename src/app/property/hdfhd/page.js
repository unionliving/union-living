import React from 'react'
import HousemateProperty from './HousemateProperty'
import Head from 'next/head'
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata = {
  title: "Top Luxury Coliving PG in Kharadi | Best Coliving Spaces in Pune for Boys, Girls and Couples",
  description: "Explore premium PG in Kharadi and coliving spaces in Pune with modern amenities. Affordable, comfortable shared living in Kharadi. Book your room in the best coliving PG now!",
  keywords: ['Union Living','Union Living Mumbai','Community Living in Mumbai', 'Community Living in Pune', 'Community Living in Thane','Community Living in Navi Mumbai', "Premium Co-living",'Best Community'],
  verification: {
    google: 'd2t3dmGtRE5YMyQqUbiHFM-lWvnz9mpRbS7Wwmb8uS0',
  },
  openGraph: {
    title: "Top Luxury Coliving PG in Kharadi | Best Coliving Spaces in Pune for Boys, Girls and Couples",
    description: "Explore premium PG in Kharadi and coliving spaces in Pune with modern amenities. Affordable, comfortable shared living in Kharadi. Book your room in the best coliving PG now!",
    url: 'https://unionliving.in/property/housemate-coliving-kharadi-pune/',
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
    canonical: 'https://unionliving.in/property/housemate-coliving-kharadi-pune/',
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
        <HousemateProperty />
        <GoogleAnalytics gaId="G-RZN1HJ2RWE" />
    </div>
  )
}

export default page