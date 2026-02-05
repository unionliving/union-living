import React from 'react'
import ZestProperty from './ZestProperty'
import Head from 'next/head'
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata = {
  title: "Best Coliving PG in Chembur for Male and Female | PG in Chembur for Working Professionals – Union Living",
  description: " Looking for a PG in Chembur? Union Living offers luxury coliving PG in Chembur for working professionals females and males with modern amenities, comfort, and safety just 10 minutes from BKC (Bandra-Kurla Complex).",
  keywords: ['Union Living','Union Living Mumbai','Community Living in Mumbai', 'Community Living in Pune', 'Community Living in Thane','Community Living in Navi Mumbai', "Premium Co-living",'Best Community'],
  verification: {
    google: 'd2t3dmGtRE5YMyQqUbiHFM-lWvnz9mpRbS7Wwmb8uS0',
  },
  openGraph: {
    title: "Best Coliving PG in Chembur for Male and Female | PG in Chembur for Working Professionals – Union Living",
    description: " Looking for a PG in Chembur? Union Living offers luxury coliving PG in Chembur for working professionals females and males with modern amenities, comfort, and safety just 10 minutes from BKC (Bandra-Kurla Complex).",
    url: 'https://unionliving.in/property/zest-coliving-chembur/',
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
    canonical: 'https://unionliving.in/property/zest-coliving-chembur/',
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
             <ZestProperty />
             <GoogleAnalytics gaId="G-RZN1HJ2RWE" />
    </div>
  )
}

export default page