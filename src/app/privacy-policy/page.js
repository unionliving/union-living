import React from 'react'
import PrivacyPolicyMain from './PrivacyPolicyMain'
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata = {
  title: "Privacy Policy - Union Living | Protecting Your Data & Privacy",
  description: "Learn how Union Living values your privacy. Our policy outlines how we collect, use, and protect your personal data.",
  keywords: ['Union Living','Union Living Mumbai','Community Living in Mumbai', 'Community Living in Pune', 'Community Living in Thane','Community Living in Navi Mumbai', "Premium Co-living",'Best Community'],

  openGraph: {
    title: 'Privacy Policy - Union Living | Protecting Your Data & Privacy',
    description: 'Learn how Union Living values your privacy. Our policy outlines how we collect, use, and protect your personal data.',
    url: 'https://unionliving.in/privacy-policy/',
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
        alt: '',
      },
    ],
  
  },
  alternates: {
    canonical: 'https://unionliving.in/privacy-policy/',
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

const PrivacyPolicy = () => {
  return (
    <div>

       <PrivacyPolicyMain />
       <GoogleAnalytics gaId="G-RZN1HJ2RWE" />
    </div>
  )
}

export default PrivacyPolicy