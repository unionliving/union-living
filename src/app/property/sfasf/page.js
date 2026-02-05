import React from 'react'
import CasaProperty from './CasaProperty'
import Head from 'next/head'
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata = {
  title: "Luxury Coliving Spaces Andheri East | Best Paying Guest (PG) in Andheri East Mumbai - Casa by Union Living",
  description: "Find the best PG in Andheri East Mumbai with premium amenities, ideal for students and working professionals. Enjoy a vibrant community, modern living spaces, and more at Casa by Union Living.",
  keywords: ['Union Living','Union Living Mumbai','Community Living in Mumbai', 'Community Living in Pune', 'Community Living in Thane','Community Living in Navi Mumbai', "Premium Co-living",'Best Community'],
  verification: {
    google: 'd2t3dmGtRE5YMyQqUbiHFM-lWvnz9mpRbS7Wwmb8uS0',
  },
  openGraph: {
    title: "Luxury Coliving Spaces Andheri East | Best Paying Guest (PG) in Andheri East Mumbai - Casa by Union Living",
  description: "Find the best PG in Andheri East Mumbai with premium amenities, ideal for students and working professionals. Enjoy a vibrant community, modern living spaces, and more at Casa by Union Living.",
    url: 'https://unionliving.in/property/casa-coliving-andheri-east-mumbai/',
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
    canonical: 'https://unionliving.in/property/casa-coliving-andheri-east-mumbai/',
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
        <CasaProperty />
        <GoogleAnalytics gaId="G-RZN1HJ2RWE" />
    </div>
  )
}

export default page