
import LeadSquaredTracker from "@/components/Layout/LeadSquareTracker";
import Home from "./pages/Home";
import Hotjar from "@hotjar/browser";
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from "next/script";
export const metadata = {
  title: "Luxury Coliving Spaces in Mumbai, Pune & Gurugram | Best PG - Union Living",
  description: "Experience the best coliving spaces in Mumbai and Pune with Fully furnished PG rooms with top-notch amenities for boys, girls and couples (students and professionals). Book your Co-living PG today!",
  keywords: ['Union Living','Union Living Mumbai','Community Living in Mumbai', 'Community Living in Pune', 'Community Living in Thane','Community Living in Navi Mumbai', "Premium Co-living",'Best Community'],
  verification: {
    google: 'd2t3dmGtRE5YMyQqUbiHFM-lWvnz9mpRbS7Wwmb8uS0',
  },
  openGraph: {
    title: 'Luxury Coliving Spaces in Mumbai, Pune & Gurugram | Best PG - Union Living',
    description: 'Experience the best coliving spaces in Mumbai and Pune with Fully furnished PG rooms with top-notch amenities for boys, girls and couples (students and professionals). Book your Co-living PG today!',
    url: 'https://unionliving.in',
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
        alt: 'Luxury Coliving Spaces in Mumbai | Best PG -  Union Living',
      },
    ],
  
  },
  alternates: {
    canonical: 'https://unionliving.in/',
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
export default function Main() {


     
  
  return (
    <main className="">
       
     <GoogleAnalytics gaId="G-RZN1HJ2RWE" />
    <Home />
   
    </main>
  );
}
