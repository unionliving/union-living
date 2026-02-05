import React from 'react'
import Checklist from "../../asset/checklist-min.webp"
import { HiArrowLongRight } from "react-icons/hi2";
import { AiOutlineYoutube } from "react-icons/ai";
import Image from 'next/image';
import Link from 'next/link';
import PropertyForm from './PropertyForm';

const MainPropertyCTA = ({propertyName}) => {
  return (
    <div className='lg:mx-2 mx-4 pt-0 pb-12  '>
    <div className='lg:grid gap-12 grid-cols-2 items-center  grid-flow-col ' >
    <div className='lg:flex mt-6 lg:mt-0 items-center justify-end' >
        <PropertyForm propertyName={propertyName} />
    </div>
    <div>
    <h4 className='font-[NeueBold] leading-[2.4rem] lg:leading-[3.5rem] text-[2rem] lg:text-[3rem]' >Interested in your<br />   Next Home!</h4>
    <p className='font-[NeueRegular] mt-3 mb-6 text-[1rem] lg:text-[1.3rem]' >Discover your dream home with us! Share your details, and  <br className='hidden lg:block' /> let’s begin the journey to finding the perfect place for you.</p>
    <div className='flex items-center justify-start gap-4' >
   
    
    </div>
   
    </div>
   
    </div>
</div>
  )
}

export default MainPropertyCTA