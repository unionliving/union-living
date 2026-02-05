
import Head from 'next/head'
import AboutPage from './AboutPage'
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata = {
  title: "Union Living Story | Our Mission",
  description: "Experience a new way of living with beautifully designed spaces, seamless services, and a supportive community that makes everyday life more enjoyable and hassle-free.",
  keywords: ['Union Living','Union Living Mumbai','Community Living in Mumbai', 'Community Living in Pune', 'Community Living in Thane','Community Living in Navi Mumbai', "Premium Co-living",'Best Community'],

  openGraph: {
    title: 'Union Living Story | Our Mission',
    description: 'Experience a new way of living with beautifully designed spaces, seamless services, and a supportive community that makes everyday life more enjoyable and hassle-free.',
    url: 'https://unionliving.in/ourstory/',
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
        alt: 'Co-Living Spaces in Mumbai - Premium Amenities, Modern Living, Community-Focused',
      },
    ],
  
  },
  alternates: {
    canonical: 'https://unionliving.in/ourstory/',
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
const About = () => {
  return (
    <div>
       <Head>
       <meta name="robots" content="follow, index" />
       </Head>
     
        <AboutPage />
        <GoogleAnalytics gaId="G-RZN1HJ2RWE" />
      
    </div>
  )
}

export default About