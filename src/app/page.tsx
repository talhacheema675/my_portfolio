import About from "@/compenent/about";
import Footer from "@/compenent/footer";
import Header from "@/compenent/header";
import Hero from "@/compenent/hero";
import Job from "@/compenent/job";
import Portfo from "@/compenent/portfo";
import Skill from "@/compenent/skills";
import Image from "next/image";
export default function Home() {

  return (
   <div>
    <Header/>
    <Hero/> 
    <About/>
    <Portfo/>
    <Skill/>
    <Job/>
    <Footer/>
   </div>
  );
}
