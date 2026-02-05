import React from 'react'
import NovaProperty from './NovaProperty'
import Head from 'next/head'
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from 'next/script'

export const metadata = {
  title: "Luxury PG in Gurgoan Park Pune for Male & Female | Premium Coliving PG near Gurgoan",
  description: "Find the best PG in Koregoan Park Pune for male & female. Explore fully furnished coliving spaces with modern amenities. Ideal PG near Koregoan Park Pune for students & professionals.",
  keywords: ['Union Living','Union Living Mumbai','Community Living in Mumbai', 'Community Living in Pune', 'Community Living in Thane','Community Living in Navi Mumbai', "Premium Co-living",'Best Community'],
  verification: {
    google: 'd2t3dmGtRE5YMyQqUbiHFM-lWvnz9mpRbS7Wwmb8uS0',
  },
  openGraph: {
    title: "Luxury PG in Gurgoan Pune for Male & Female | Premium Coliving PG near Gurgoan",
  description: "Find the best PG in Koregoan Park Pune for male & female. Explore fully furnished coliving spaces with modern amenities. Ideal PG near Koregoan Park Pune for students & professionals.",
    url: 'https://unionliving.in/property/nova-coliving-gurgoan/',
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
        alt: 'hamlet',
      },
    ],
  
  },
  alternates: {
    canonical: 'https://unionliving.in/property/nova-coliving-gurgoan/',
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
      <Script
          id="google-ads-conversion"
          strategy="afterInteractive"
        >
          {`
            gtag('event', 'conversion', {
              'send_to': 'AW-11425120901/CjV8CLzY4_saEIWF9scq'
            });
          `}
        </Script>
      </Head>
        <NovaProperty />
        <GoogleAnalytics gaId="G-RZN1HJ2RWE" />
    </div>
  )
}

export default page