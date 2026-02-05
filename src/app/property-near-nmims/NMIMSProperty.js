"use client"
import CollegeBanner from '@/components/collegeslayout/CollegeBanner'
import CollegePropertyList from '@/components/collegeslayout/CollegePropertyList'
import Footer from '@/components/Layout/Footer'
import NavbarTwo from '@/components/Layout/Navbar'
import { ThemeProvider } from '@material-tailwind/react'
import React from 'react'
import VarsityCoverImage from "../../asset/varsityImages/newImages/coverimage.webp"
import VarsityMainImage from "../../asset/varsityImages/mainBanner.webp"
import VarsityOneImage from "../../asset/varsityImages/9-min.webp"
import VarsityTwoImage from "../../asset/varsityImages/gym-min.webp"
import VarsityThreeImage from "../../asset/varsityImages/terraceImage-min.webp"
import VarsityFourImage from "../../asset/varsityImages/Untitled design - 2024-05-31T015132.055.webp"
import VarsityPrivate from "../../asset/varsityImages/p1.webp"
import VarsityPrivateTwo from "../../asset/varsityImages/p2.webp"
import VarsityTwin from "../../asset/varsityImages/twin-min.webp"
import VarsityTwinTwo from "../../asset/varsityImages/t2.webp"
import VarsityApartment from "../../asset/varsityImages/apartment-min.webp"
import TerraCoverImage from "../../asset/propertyCover/terraCover.webp"
import TerraMainImage from "../../asset/terraImages/mainBanner.webp"
import TerraOneImage from "../../asset/terraImages/1.webp"
import TerraTwoImage from "../../asset/terraImages/2.webp"
import TerraThreeImage from "../../asset/terraImages/3.webp"
import TerraFourImage from "../../asset/terraImages/4.webp"
import TerraPrivateImage from "../../asset/terraImages/pri.webp"
import TerraTwinImage from "../../asset/terraImages/twi.webp"
import CollegeForm from '@/components/collegeslayout/CollegeForm'
import TestimonialTwo from '@/components/Home/Testimonial'
import LeadSquaredTracker from '@/components/Layout/LeadSquareTracker'
import FAQAccordion from '@/components/common/FAQAccordion'

const NMIMSProperty = () => {
  const properties = [
    {
      name:"Varsity",
      coverImage:VarsityCoverImage,
      price:"Rs. 45,000",
      subtTitleDetail:"",
      titleDetail:"",
      contentDetail:"",
      link:"/property/varsity-coliving-juhu-santacruz",
      propertyDescriptionTitle:"https://form.jotform.com/240653157769062",
      images:[
          VarsityMainImage,VarsityOneImage,VarsityTwoImage,VarsityThreeImage,VarsityFourImage
      ],
      content:"Varsity is located in the heart of Mumbai’s most demanding and posh area. Varsity is the perfect solution for students and also for those looking for a co-living experience that combines comfort, convenience and a sense of community. Located in the bustling city of Mumbai, Varsity offers a variety of shared and private spaces that cater to all your needs. From stylishly designed rooms to spacious common areas, this property is the ideal space for millennials, and professionals alike. Plus, with our round-the-clock security, you can rest easy knowing that you and your belongings are safe and secure. Experience the best of living experience in Mumbai’s most luxurious neighbourhood.",
      map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.4241900465904!2d72.83413019999999!3d19.0890381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9fb0323a235%3A0x577a653a62504566!2sVarsity%20by%20Union%20Living!5e0!3m2!1sen!2sin!4v1684505081100!5m2!1sen!2sin",
      youtubeId:"3euMGmLNcIc",
      location:"Juhu / Santacruz",
      brochure:"",
      youtubeURL:"https://www.youtube.com/watch?v=3euMGmLNcIc&embeds_referring_euri=http%3A%2F%2Flocalhost%3A3000%2F&source_ve_path=MjM4NTE&feature=emb_title",
      rooms:[
          {
              title:"Private Base",
              content:"Modern Private Base rooms in a vibrant co-living space, fostering community connections.",
              image:VarsityPrivateTwo
          },
          {
              title:"Private Big",
              content:"Modern Private Big rooms in a vibrant co-living space, fostering community connections.",
              image:VarsityPrivate
          },
          {
              title:"Twin Standard",
              content:"Modern twin-standard rooms in a vibrant co-living space, fostering community connections.",
              image:VarsityTwinTwo
          },
          {
              title:"Twin Lux",
              content:"Modern twin-lux rooms in a vibrant co-living space, fostering community connections.",
              image:VarsityTwin
          },
      ],
      galleryImages:[
          
          {
              src: VarsityMainImage,
              width: "100%",
              height: "100%",
            },
            {
              src: VarsityOneImage,
              width: "100%",
              height: "100%",
            },
            {
              src: VarsityTwoImage,
              width: "100%",
              height: "100%",
            },
            {
              src: VarsityThreeImage,
              width: "100%",
              height: "100%",
            },
            {
              src: VarsityFourImage,
              width: "100%",
              height: "100%",
            },
            
  ]
  },
  {
    name:"Terra",
    coverImage:TerraCoverImage,
    images:[
        TerraMainImage,TerraOneImage,TerraTwoImage,TerraThreeImage,TerraFourImage
    ],
    location:"Juhu",
    price:"Rs. 45,000",
    subtTitleDetail:"",
    titleDetail:"",
    contentDetail:"",
    propertyDescriptionTitle:"https://www.unionliving.in/#/form",
    content:"Introducing Terra by Union in Juhu, offering modern luxury living amidst Mumbai's serene surroundings. With stylish apartments, top-notch amenities, and round-the-clock security, Terra provides a sophisticated retreat for professionals and individuals seeking tranquility in the heart of the city.",
    map:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15079.663821938235!2d72.8389376!3d19.1113426!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c93fc7fa60af%3A0x71920bbde6e70ed6!2sTerra%20by%20Union%20Living!5e0!3m2!1sen!2sin!4v1717177015017!5m2!1sen!2sin",
    youtubeId:"6sp1mbovvYY",
    youtubeURL:"https://www.youtube.com/shorts/6sp1mbovvYY",
    link:"/property/terra-coliving-juhu",
    brochure:"https://firebasestorage.googleapis.com/v0/b/union-living.appspot.com/o/files%2FTerra%20by%20Union%20Digital.pdf?alt=media&token=648c8804-cddf-4b51-a5fc-f635cb68a211",
    rooms:[
        {
            title:"Private",
            content:"Modern Private rooms in a vibrant co-living space, fostering community connections.",
            image:TerraPrivateImage,
            rent:"10,80,000"
        },
        {
            title:"Twin",
            content:"Modern twin-sharing rooms in a vibrant co-living space, fostering community connections.",
            image:TerraTwinImage,
            rent:"5,40,000"
        },
        {
            title:"Triple",
            content:"Modern triple-sharing rooms in a vibrant co-living space, fostering community connections.",
            image:TerraFourImage,
            rent:"4,56,000"
        },
        {
            title:"Quad",
            content:"Modern quad-sharing rooms in a vibrant co-living space, fostering community connections.",
            image:TerraOneImage,
            rent:"4,20,000"
        },
    ],
    galleryImages:[
        
        {
            src: TerraMainImage,
            width: "100%",
            height: "100%",
          },
          {
            src: TerraOneImage,
            width: "100%",
            height: "100%",
          },
          {
            src: TerraTwoImage,
            width: "100%",
            height: "100%",
          },
          {
            src: TerraThreeImage,
            width: "100%",
            height: "100%",
          },
          {
            src: TerraFourImage,
            width: "100%",
            height: "100%",
          },
          {
            src: TerraPrivateImage,
            width: "100%",
            height: "100%",
          },
          {
            src: TerraTwinImage,
            width: "100%",
            height: "100%",
          },
]
},
  ]
  return (
    <ThemeProvider>
       <LeadSquaredTracker /> 
    <NavbarTwo />
    <div className='lg:pt-[150px] pt-[100px]'>
   <CollegeBanner collegeBannerBox="nmimsBannerBox" description="Explore the best properties near NMIMS— luxury co-living, student housing, and premium apartments, all in one place." title="Best PG Near NMIMS Mumbai" />
    <CollegePropertyList  properties={properties} />
    <CollegeForm />
    <FAQAccordion 
      title="FAQs"
      faqs={[
        { q: "Is Union Living a good co-living place near NMIMS Mumbai?", a: [
          { type: 'p', text: 'Yes, Union Living is one of the best PGs near NMIMS Mumbai, offering a modern, all-inclusive living experience just minutes from the Narsee Monjee Institute of Management Studies campus.'},
          
        ] },
        { q: "How far is Union Living from NMIMS Mumbai?", a: [
          { type: 'p', text: 'Union Living is located within walking distance of NMIMS, making it extremely convenient for students. You won’t need to worry about long commutes or traffic.'},
         
      
        ] },
        { q: "What’s included in the rent at Union Living?", a: [
          { type: 'p', text: 'The rent at Union Living covers:'},
          { type: 'ol', items: [
            'Fully furnished AC rooms',
            'High-speed Wi-Fi',
            'Daily housekeeping',
            'Nutritious meals (breakfast, lunch, dinner)',
            'Laundry services',
            '24x7 security with CCTV',
            'Study areas and recreational zones',
          ]},
          { type: 'p', text: 'Everything you need in a premium PG near NMIMS is already included.'},
        ] },
        { q: "Is food available?", a: [
          { type: 'p', text: 'Yes, Union Living offers healthy and delicious meals three times a day, cooked in a hygienic in-house kitchen – making it one of the best PGs near NMIMS for food quality.'},
          
        ] },
        { q: "Are there single and shared room options?", a: [
          { type: 'p', text: 'Yes, you can choose from single, twin, or triple-sharing rooms depending on your preference and budget.'},
        ] },
        { q: "Is Union Living safe for students?", a: [
          { type: 'p', text: 'Absolutely. Union Living provides 24/7 security, biometric entry, and CCTV surveillance. Safety is our top priority for all residents.'},
        ] },
        { q: "Can I book Union Living spaces online?", a: [
          { type: 'p', text: 'Yes! You can easily book your space online. Just contact us via WhatsApp, call, or fill out the online form. We also offer virtual tours.'},
        ] },
        { q: "Do I need to pay brokerage or deposits?", a: [
          { type: 'p', text: 'No brokerage is needed. A small security deposit is collected and refunded at the end of your stay. Transparent and student-friendly!'},
        ] },
        { q: "Is Union Living only for NMIMS students?", a: [
          { type: 'p', text: 'While many of our residents are from Narsee Monjee Institute of Management Studies, we also welcome interns, working professionals, and students from other nearby colleges.'},
        ] },
        { q: "Why is Union Living considered the best co-living near NMIMS?", a: [
          { type: 'p', text: 'Union Living offers a unique blend of comfort, convenience, and community — all within walking distance of NMIMS Mumbai. With premium facilities and a student-first approach, we are often rated among the best PGs near NMIMS.'},
        ] },
        { q: "Are guests allowed?", a: [
          { type: 'p', text: 'Visitors are allowed in designated hours and common areas, following house rules to ensure safety and comfort for all residents.'},
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
