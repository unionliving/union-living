import React from 'react'
import { GoogleAnalytics } from '@next/third-parties/google'
import NMIMSProperty from './NicmrProperty'
import Head from 'next/head'

export const metadata = {
    title: "Best Coliving Spaces Near National Institute of Construction Management and Research | Comfortable PG Near NICMAR",
    description: "Find the best coliving spaces near NICMAR with fully-furnished rooms, high-speed Wi-Fi, housekeeping, and 24/7 security. Comfortable PG near the National Institute of Construction Management and Research.",
    keywords: ['Union Living','Union Living Mumbai','Community Living in Mumbai', 'Community Living in Pune', 'Community Living in Thane','Community Living in Navi Mumbai', "Premium Co-living",'Best Community'],
  
    openGraph: {
      title: 'Best Coliving Spaces Near National Institute of Construction Management and Research | Comfortable PG Near NICMAR',
      description: 'Find the best coliving spaces near NICMAR with fully-furnished rooms, high-speed Wi-Fi, housekeeping, and 24/7 security. Comfortable PG near the National Institute of Construction Management and Research.',
      url: 'https://unionliving.in/property-near-nicmar/',
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
      canonical: 'https://unionliving.in/property-near-nicmar/',
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
        <NMIMSProperty />
        <GoogleAnalytics gaId="G-RZN1HJ2RWE" />
    </div>
  )
}

export default page