import React, { useState } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Collapse,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";
import Logo from "../../asset/logoblack.png"
import  Link  from "next/link";
import Image from "next/image";
import Topbar from "./Topbar";
export default function NavbarTwo() {
  const [openNav, setOpenNav] = React.useState(false);
  const [topNav, setTopNav] = useState(false);
  const [hideTopbar, setHideTopbar] = useState(false);
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
    
  }, []);
  React.useEffect(() => {
    const handleScroll = () => {
      setTopNav(window.scrollY > 0);
      setHideTopbar(window.scrollY > 50); // Adjust this value for smoothness
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function AboutNavListMenu({btnClass}) {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [openNestedMenu, setopenNestedMenu] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  
 
  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="p-1 font-[NeueMedium] cursor-pointer tracking-wider 2xl:text-[15px] xl:text-[13px] flex items-center">
            <p
              className="flex items-center gap-2"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            
            >
           Properties By College
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </p>
          </Typography>
        </MenuHandler>
        <MenuList  className="hidden mainMenuItem  bg-gray-100 text-center shadow-lg border-none max-w-screen-xl  lg:block">
        <ul className="grid grid-cols-1   bg-none grid-flow-row gap-y-2 text-center  outline-none outline-0">
        <Link href="/property-near-nmims" > <MenuItem className="subMenuText1">
         NMIMS</MenuItem></Link>
         <Link href="/property-near-nmims" >  <MenuItem className="subMenuText1">
          <Link href="/property-near-sndt" >SNDT</Link></MenuItem> </Link>
          <Link href="/property-near-mithibai" > <MenuItem className="subMenuText1">
          Mithibai</MenuItem></Link>
          <Link href="/property-near-dj-sanghvi" >  <MenuItem className="subMenuText1">
     DJ Sanghvi</MenuItem></Link>
     <Link href="/property-near-nicmar" >   <MenuItem className="subMenuText1">
      NICMAR</MenuItem></Link>
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>
        <Link className=""  href="/property-near-nmims" >
          <MenuItem className="text-[.8rem] px-2 font-[NeueMedium] py-0">
       
         NMIMS
     
      </MenuItem>
      </Link>
      <Link className=""  href="/property-near-sndt" >
      <MenuItem className="text-[.8rem] px-2 font-[NeueMedium] py-0">
          
         SNDT
     
      </MenuItem>
      </Link>
      <Link className=""  href="/property-near-mithibai" >
      <MenuItem className="text-[.8rem] px-2 font-[NeueMedium] py-0">
          
         Mithibai

      
      </MenuItem>
   </Link>
   <Link className=""  href="/property-near-dj-sanghvi" >
      <MenuItem className="text-[.8rem] px-2 font-[NeueMedium] py-0">

         DJ Sanghvi
   
      
      </MenuItem>
      </Link>
      <Link className=""  href="/property-near-nicmar" >
      <MenuItem className="text-[.8rem] px-2 font-[NeueMedium] py-0">
         
         NICMR
     
      
      </MenuItem>
      </Link>
        </Collapse>
      </div>
    </React.Fragment>
  );
  }
 
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col font-[NeueMedium] text-black  lg:mb-0 lg:mt-0 lg:justify-center lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        
        color="blue-gray"
        className="p-1 font-[NeueMedium] tracking-wider 2xl:text-[15px] xl:text-[13px]"
      >
        <Link href="/" className="flex items-center">
        Home
        </Link>
      </Typography>
    
      <Typography
        as="li"
       
        color="blue-gray"
        className="p-1 font-[NeueMedium] tracking-wider 2xl:text-[15px] xl:text-[13px]"
      >
        <Link href="/properties" className="flex items-center">
         Properties
        </Link>
      </Typography>
      {/* <Typography
        as="li"
       
        color="blue-gray"
        className="p-1 font-[NeueMedium] tracking-wider 2xl:text-[15px] xl:text-[13px]"
      >
        <Link href="/properties" className="flex items-center">
         Properties by College
        </Link>
      </Typography> */}
      <AboutNavListMenu />
      
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-[NeueMedium] tracking-wider 2xl:text-[15px] xl:text-[13px]"
      >
        <Link href="/community" className="flex items-center">
         Community
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-[NeueMedium] tracking-wider 2xl:text-[15px] xl:text-[13px]"
      >
        <a  href="https://daily.unionliving.in" target="_blank" className="flex items-center">
        Serviced Apartments
        </a>
      </Typography>
    </ul>
  );
 
  return (
    <>
     <div className="fixed top-0 left-0 w-full z-[999]">
        
        <div
          className={`transition-all duration-300 ease-in-out ${
            hideTopbar ? "-translate-y-full" : "translate-y-0"
          }`}
        >
          <Topbar />
        </div>
  
    <Navbar className={`fixed z-[999] ${topNav ? "top-0" : ""} opacity-100 bg-opacity-100 w-[100vw !important] max-w-full  border-none shadow-none  rounded-none  py-2 px-4 lg:px-16 lg:py-6`}>
      <div className="  grid grid-cols-5 justify-between items-center text-blue-gray-900">
       <Link className="col-span-1" href="/">
        <Image className="w-[120px]" src={Logo} alt="" />
       
       </Link>
        <div className="hidden lg:block  col-span-3 ">{navList}</div>
       <div className="col-span-3 hidden md:col-span-1 md:flex items-center justify-end " >
       <Link href='/form'> <button className="uppercase flex items-center justify-center gap-3 rounded-lg shadow-md  font-[NeueMedium] ease-in duration-300  text-[12px] md:text-[16px]  hover:shadow-none hover:bg-[#272727] tracking-wider py-[8px] px-[24px] md:py-[12px] md:px-[24px] text-[#FFFEFC] bg-[#D64C27]" >Book Now  </button></Link>
       </div>
        <IconButton
              variant="text"
              className="ml-auto h-6 w-6 col-span-4 text-black hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
         
        </div>
      </MobileNav>
    </Navbar>
    </div>
    </>
  );
}