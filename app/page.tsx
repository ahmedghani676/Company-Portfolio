"use client";
import Main from "../componenets/Main";
import { navItems } from "@/data/NavigationList";
import '../style/global.css';
import dynamic from 'next/dynamic';
import About from "../componenets/About";
import Contact from "../componenets/Contact";
import Skills from "../componenets/Skills";
import { imageList } from "@/data/ImageList";
import { ServicesList } from "@/data/ServicesList";
import Services from "@/componenets/Services";
import Project from "@/componenets/Project";
import Testimonial from "@/componenets/Testimonial";
import Footer from "@/componenets/Footer";
const FloatingNav = dynamic(() => import('../componenets/FloatingNavbar'), { ssr: false });

export default function Home() {
  return (
    
      
    <div>
        <FloatingNav navItems={navItems} />
      <Main/>
      <About /> 
      <Skills imageList={imageList } />
      <Services servicesList={ServicesList} />
      <Project />
      <Testimonial/>
      <Contact />
      <Footer/>
     </div>
      
     
      
  );
}
