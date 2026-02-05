
import Head from 'next/head'
import CommunityPage from './CommunityPage'
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata = {
  title: "Union Living Community, Social Events & More",
  description: "Experience a vibrant co-living community with luxury co-living spaces. Enjoy weekly events, artistic sessions, fitness activities, and much more. Live easy, live united at Union Living.",
  keywords: ['Union Living','Union Living Mumbai','Community Living in Mumbai', 'Community Living in Pune', 'Community Living in Thane','Community Living in Navi Mumbai', "Premium Co-living",'Best Community'],

  openGraph: {
    title: 'Union Living Community, Social Events & More',
    description: 'Experience a vibrant co-living community with luxury co-living spaces. Enjoy weekly events, artistic sessions, fitness activities, and much more. Live easy, live united at Union Living.',
    url: 'https://unionliving.in/community/',
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
    canonical: 'https://unionliving.in/community/',
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

const Community= () => {
  return (
    <div>
      <Head>
      <meta name="robots" content="follow, index" />
      </Head>
       
            <CommunityPage />
            <GoogleAnalytics gaId="G-RZN1HJ2RWE" />
    </div>
  )
}

export default Community