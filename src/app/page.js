 import React from 'react'
 import Navbar from './component/navbar'
 import Hero from './component/hero'
 import About from './component/about'
 import Div1 from './component/div1'
 import About2 from './component/about2'
 import Dov2 from './component/dov2'
 import AgentLogos from './component/agent'
import CaseStudyHero from './component/casestudy'
 import NextDov from './component/nextdov'
 import LastDiv from './component/lastdiv'
 import VideoSection from './component/video'
 import Footer from './component/footer'

 function page() {
   return (
     <div>
        <Navbar />
        <Hero />
        <About />
        <Div1 />
        <About2 />
        <Dov2 />
        <AgentLogos />
        <CaseStudyHero/>
        <NextDov/>
        <LastDiv/>
        <VideoSection/>
        <Footer/>
     </div>
   )
 }
 
 export default page;
 