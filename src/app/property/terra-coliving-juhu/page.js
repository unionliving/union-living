import React from 'react'
import TerraProperty from './TerraProperty'
import Head from 'next/head'
import { GoogleAnalytics } from '@next/third-parties/google'
export const metadata = {
  title: "Luxury PG in Juhu Mumbai - Best Coliving Space in Juhu | Terra by Union Living",
  description: "Find the best PG in Juhu, Mumbai at Terra. Luxury coliving on Juhu Tara Road with modern amenities, community living & comfort for students and professionals.",
  keywords: ['Union Living','Union Living Mumbai','Community Living in Mumbai', 'Community Living in Pune', 'Community Living in Thane','Community Living in Navi Mumbai', "Premium Co-living",'Best Community'],
  verification: {
    google: 'd2t3dmGtRE5YMyQqUbiHFM-lWvnz9mpRbS7Wwmb8uS0',
  },
  openGraph: {
    title: "Luxury PG in Juhu Mumbai - Best Coliving Space in Juhu | Terra by Union Living",
  description: "Find the best PG in Juhu, Mumbai at Terra. Luxury coliving on Juhu Tara Road with modern amenities, community living & comfort for students and professionals.",
    url: 'https://unionliving.in/property/terra-coliving-juhu/',
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
    canonical: 'https://unionliving.in/property/terra-coliving-juhu/',
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

             <TerraProperty />
             <GoogleAnalytics gaId="G-RZN1HJ2RWE" />
    </div>
  )
}

export default page