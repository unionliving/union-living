
import React from 'react'
import FormPage from './FormPage'

export const metadata = {
  title: "Contact Us – Union Living | Book Your PG & Coliving Stay in Mumbai & Pune",
  description: "Need help with bookings or inquiries? Use our contact form to connect with Union Living’s team for PG and coliving options across Mumbai  and Pune. Fully furnished PGs for students and working professionals.",
  keywords: ['Union Living','Union Living Mumbai','Community Living in Mumbai', 'Community Living in Pune', 'Community Living in Thane','Community Living in Navi Mumbai', "Premium Co-living",'Best Community'],
  verification: {
    google: 'd2t3dmGtRE5YMyQqUbiHFM-lWvnz9mpRbS7Wwmb8uS0',
  },
  openGraph: {
    title: 'Contact Us – Union Living | Book Your PG & Coliving Stay in Mumbai & Pune',
    description: 'Need help with bookings or inquiries? Use our contact form to connect with Union Living’s team for PG and coliving options across Mumbai  and Pune. Fully furnished PGs for students and working professionals.',
    url: 'https://unionliving.in/form/',
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
        alt: 'Luxury Coliving Spaces in Mumbai, Pune & Navi Mumbai | Best PG -  Union Living',
      },
    ],
  
  },
  alternates: {
    canonical: 'https://unionliving.in/form/',
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

const FormMain = () => {
  
  return (
    <div>
       <FormPage />
    </div>
  )
}

export default FormMain