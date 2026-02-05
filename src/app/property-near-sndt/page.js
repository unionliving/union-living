import React from 'react'
import { GoogleAnalytics } from '@next/third-parties/google'
import Head from 'next/head'
import SNDTProperty from './SndtProperty'

export const metadata = {
    title: "The Best Coliving Spaces Near Shreemati Nathibai Damodar Thackersey Women's University College (SNDT)",
    description: "Find the best coliving spaces near SNDT College. Fully-furnished rooms near Shreemati Nathibai Damodar Thackersey Women's University with Wi-Fi, security & comfort.",
    keywords: ['Union Living','Union Living Mumbai','Community Living in Mumbai', 'Community Living in Pune', 'Community Living in Thane','Community Living in Navi Mumbai', "Premium Co-living",'Best Community'],
  
    openGraph: {
      title: "The Best Coliving Spaces Near Shreemati Nathibai Damodar Thackersey Women's University College (SNDT)",
      description: "Find the best coliving spaces near SNDT College. Fully-furnished rooms near Shreemati Nathibai Damodar Thackersey Women's University with Wi-Fi, security & comfort.",
      url: 'https://unionliving.in/property-near-nmims/',
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
      canonical: 'https://unionliving.in/property-near-sndt/',
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
        <SNDTProperty />
        <GoogleAnalytics gaId="G-RZN1HJ2RWE" />
    </div>
  )
}

export default page