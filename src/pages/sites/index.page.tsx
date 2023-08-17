import React from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Experience from "../../components/Experience";
import Works from "../../components/Works";
import FeedBacks from "../../components/FeedBacks";
import Contact from "../../components/Contact";
import StarsCanvas from "../../components/canvas/Stars";
import { Element } from "react-scroll"; // Importe o Element do react-scroll

export default function Sites() {
  const site = "https://www.example.com";
  return (
    <div
      style={{
        backgroundColor: "#000",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        overflow: "hidden",
        width: "100vw",
      }}
    >
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
      </div>
      <div style={{ padding: "20px" }}>
        <Hero mainText='Criamos' subText='Sites Impactantes'/>
        <div style={{width: '80vw' ,display: 'flex', justifyContent: 'center',alignItems:'center'}}> 
        <img
          src={'/logoFull.svg'}
          alt='web-development'
          className='w-[300px] h-[100px]'
        />
        </div>
        <Element name="sobre">
          <About />
        </Element>
        <Experience />
        <Element name="projetos">
          <Works />
        </Element>
        <FeedBacks />
          <div className='relative z-0'>
            <Contact site='Sites' />
          <StarsCanvas />
        </div>
      </div>
    </div>
  );
}
