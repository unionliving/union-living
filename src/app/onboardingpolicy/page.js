import Head from "next/head"
import OnboardingPage from "./OnboardingPage"
import { GoogleAnalytics } from "@next/third-parties/google"


export const metadata = {
  title: "Union Living Coliving Onboarding Policy | Terms & Payment Information",
  description: "Learn about Union Living's onboarding process for a hassle-free coliving experience in Mumbai, covering payment, refund policies, and terms.",
  keywords: ['Union Living','Union Living Mumbai','Community Living in Mumbai', 'Community Living in Pune', 'Community Living in Thane','Community Living in Navi Mumbai', "Premium Co-living",'Best Community'],

  openGraph: {
    title: "Union Living Coliving Onboarding Policy | Terms & Payment Information",
    description: "Learn about Union Living's onboarding process for a hassle-free coliving experience in Mumbai, covering payment, refund policies, and terms.",
    url: 'https://unionliving.in/onboardingpolicy/',
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
    canonical: 'https://unionliving.in/onboardingpolicy/',
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


const Onboarding= () => {
  return (
    <div>
      <Head>
      <meta name="robots" content="follow, index" />

      </Head>
       <OnboardingPage />
       <GoogleAnalytics gaId="G-RZN1HJ2RWE" />
    </div>
  
  )
}

export default Onboarding