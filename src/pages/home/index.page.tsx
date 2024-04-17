import { Feedback } from "@/components/FeedBack";
import { Element } from "react-scroll"; // Importe o Element do react-scroll
import About from "../../components/About";
import Contact from "../../components/Contact";
import Experience from "../../components/Experience";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import Works from "../../components/Works";
import StarsCanvas from "../../components/canvas/Stars";

export default function Home() {
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
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
      </div>
      <div style={{ padding: "20px" }}>
        <Hero mainText="Somos" subText="Executivo's Digital" />
        <div
          style={{
            width: "100%",
            display: "flex",
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={"/logoFull.png"}
            alt="web-development"
            style={{
              width: "60%",
              height: "200px",
              marginTop: "50px",
              alignSelf: "center",
            }}
          />
        </div>
        <Element name="sobre">
          <About />
        </Element>
        <Experience />
        <Element name="projetos">
          <Works />
        </Element>
        <Feedback />
        <div className="relative z-0">
          <Contact site="Home" />
          <StarsCanvas />
        </div>
      </div>
    </div>
  );
}
