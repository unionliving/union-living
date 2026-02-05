"use client"
import CollegeBanner from '@/components/collegeslayout/CollegeBanner'
import CollegePropertyList from '@/components/collegeslayout/CollegePropertyList'
import Footer from '@/components/Layout/Footer'
import NavbarTwo from '@/components/Layout/Navbar'
import { ThemeProvider } from '@material-tailwind/react'
import React from 'react'
import HamletCoverImage from "../../asset/propertyCover/hamletCover.webp"
import HamletMainImage from "../../asset/hamletImages/mainBanner-min.webp"
import HamletOneImage from "../../asset/hamletImages/canteen-min.webp"
import HamletTwoImage from "../../asset/hamletImages/gym-min.webp"
import HamletThreeImage from "../../asset/hamletImages/terraceImage-min.webp"
import HamletFourImage from "../../asset/hamletImages/terraceImage2-min.webp"
import HamletFiveImage from "../../asset/hamletImages/comImage1.webp"
import HamletSixImage from "../../asset/hamletImages/comImage2-min.webp"
import HamletPrivate from "../../asset/hamletImages/private.webp"
import HamletTwin from "../../asset/hamletImages/twin-min.webp"
import HouseofBalewadiCover from "../../asset/houseofbalewadi/cover.webp"
import CollegeForm from '@/components/collegeslayout/CollegeForm'
import TestimonialTwo from '@/components/Home/Testimonial'
import LeadSquaredTracker from '@/components/Layout/LeadSquareTracker'
import FAQAccordion from '@/components/common/FAQAccordion'

const NMIMSProperty = () => {
  const properties = [
    {
      name:"Hamlet",
      coverImage:HamletCoverImage,
      propertyDescriptionTitle:"https://www.unionliving.in/#/form",
      link:"/property/hamlet-coliving-baner-pune",
      price:"Rs. 39,999",
      images:[
          HamletMainImage,HamletOneImage,HamletTwoImage,HamletThreeImage,HamletFourImage,HamletFiveImage,HamletSixImage
      ],
      location:"Baner, Pune",
      content:"Hamlet is an exclusive concept driven home situated in the bustling and hilly area of Baner. This fully furnished space is Pune’s finest built to suit property that hosts professionals working in employment hubs like Panchshil Business Park (Phase 1 & 2) and many others at a short distance. At Hamlet, the architecture of every corner is unmatched. Along with the generous sized bedrooms and a fitness studio, the grand terrace organises activities, workshops, and other events. A luxurious experience that comforts you after a long day at work, that’s Hamlet.",
      map:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15129.867506521172!2d73.7784034!3d18.5529787!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bff4afa8145f%3A0x6d7da05eef0c7ce1!2sHamlet%20by%20Union%20Co-%20Living!5e0!3m2!1sen!2sin!4v1685953729979!5m2!1sen!2sin",
      youtubeId:"NDidnxhwT0M",
      rooms:[
          {
              title:"Private",
              content:"Modern twin-sharing rooms in a vibrant co-living space, fostering community connections.",
              image:HamletPrivate
          },
          {
              title:"Twin",
              content:"Modern twin-sharing rooms in a vibrant co-living space, fostering community connections.",
              image:HamletTwin
          },
         
      ]
  },
  {
      name:"House of Balewadi",
      coverImage:HouseofBalewadiCover,
      link:"/property/house-of-balewadi-coliving/",
      propertyDescriptionTitle:"https://www.unionliving.in/#/form",
     
      price:"20000",
      location:"Balewadi",
      content:"A dynamic coliving space blending community, innovation, and comfort with shared amenities and modern workspaces.",
      map:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15077.883075003392!2d72.8629156!3d19.1308596!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2c8a38409d307a53!2sCASA%20by%20Union%20Co-Living!5e0!3m2!1sen!2sin!4v1673692237980!5m2!1sen!2sin",
      youtubeId:"sP_tmYSOWPE",
      
  },
  ]
  return (
    <ThemeProvider>
       <LeadSquaredTracker /> 
    <NavbarTwo />
    <div className='lg:pt-[150px] pt-[100px]'>
   <CollegeBanner title="Best Coliving Spaces Near NICMAR Campus" collegeBannerBox="nicmarBannerBox" description="Explore the best properties near NICMAR— luxury co-living, student housing, and premium apartments, all in one place." />
    <CollegePropertyList properties={properties} />
    <CollegeForm />
    <FAQAccordion 
      title="FAQs"
      faqs={[
        { q: "What are the popular accommodation options near NICMAR Pune?", a: [
          { type: 'p', text: 'Co-living hostels in Pune, student residences, and studio apartments, all curated for student accommodation in Pune are widely available near the National Institute of Construction Management and Research.'},
          
        ] },
        { q: "Are these hostels within easy reach of the NICMAR campus?", a: [
          { type: 'p', text: 'Yes, many are located in Baner, Balewadi, and surrounding areas, with easy commute options like cabs, autos, or public buses.'},
        ] },
        
        { q: "What kind of room configurations are offered?", a: [
          { type: 'p', text: 'Single occupancy, double occupancy, and sometimes triple sharing rooms are available, along with private studio setups.'},
          
        ] },
        { q: "Are the properties furnished?", a: [
          { type: 'p', text: 'Absolutely. Most rooms come with a bed, mattress, table, chair, wardrobe, and other essential furniture.'},
        ] },
        { q: "Do these co-living spaces include housekeeping?", a: [
          { type: 'p', text: 'Yes, housekeeping services are generally provided weekly or bi-weekly to maintain cleanliness and hygiene.'},
        ] },
        { q: "Is food included in the stay?", a: [
          { type: 'p', text: 'Some hostels offer in-house meals, while others may offer access to a shared kitchen or have nearby tiffin partners.'},
        ] },
        { q: "What security measures are in place?", a: [
          { type: 'p', text: 'Properties feature biometric access, security guards, CCTV cameras, and emergency contact systems.'},
        ] },
        { q: "Can students invite guests?", a: [
          { type: 'p', text: 'Guest policies vary by property. While daytime visits may be allowed, overnight stays are typically restricted.'},
        ] },
        { q: "Are these accommodations suitable for first-time movers?", a: [
          { type: 'p', text: 'Yes, co-living hostels in Pune are designed to simplify living for students new to the city, offering all essentials under one roof.'},
        ] },
        { q: "Is there support for maintenance or repairs?", a: [
          { type: 'p', text: 'Yes, professional property managers are usually available on-site or on-call to handle maintenance requests promptly.'},
        ] },
        { q: "Do students have access to recreational or common areas?", a: [
          { type: 'p', text: 'Yes, many spaces have lounges, gyms, game zones, and rooftops or balconies where students can relax and socialise.'},
        ] },
        { q: "Is there a study-friendly environment?", a: [
          { type: 'p', text: 'Most student housing apartments include quiet zones or desks for study, and a culture that encourages academic discipline.'},
        ] },
        { q: "Are these accommodations co-ed or separate for genders?", a: [
          { type: 'p', text: 'Options are available for both students to choose based on their preference and comfort.'},
        ] },
        { q: "How are power and water facilities managed?", a: [
          { type: 'p', text: 'These are typically uninterrupted and managed by the operator. Backup generators and RO water systems are often in place.'},
        ] },
        { q: "How can students enquire or book a room?", a: [
          { type: 'p', text: 'Students can reach out via the “Enquire Now” or “Get a Call Back” buttons on the property’s official webpage. Staff will assist with bookings, virtual tours, and documentation.'},
        ] },
      ]}
    />
    <TestimonialTwo />
    <Footer />
    </div>
    </ThemeProvider>
  )
}

export default NMIMSProperty