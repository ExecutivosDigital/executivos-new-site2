import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = ({ mainText, subText }) => {
  const [isComputersCanvasVisible, setIsComputersCanvasVisible] =
    useState(false);

  const computersCanvasRef = useRef(null);

  const handleIntersection = (entries) => {
    const [entry] = entries;
    setIsComputersCanvasVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Ajuste conforme necessário
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (computersCanvasRef.current) {
      observer.observe(computersCanvasRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className={`relative w-full h-full mx-auto`}>
      <div
        className={`relative inset-0 top-[100px] h-[35vh] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-8`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#FFD369]" />
          <div className="w-1 sm:h-80 h-40 yellow-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            {mainText} <span className="text-[#FFD369]">{subText}</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white`}>
            Software House com foco em Executar Projetos.
            <br className="sm:block hidden" />
            Um grupo de Desenvolvedores prontos para tirar sua Ideia do Papel!
          </p>
        </div>
      </div>
      <div className={"w-full h-[500px] flex justify-center items-center"}>
        <div
          ref={computersCanvasRef}
          className={"w-full h-[500px] flex justify-center items-center"}
        >
          <motion.div
            className={"w-full h-[500px] flex justify-center items-center"}
            initial={{ opacity: 0 }}
            animate={{ opacity: isComputersCanvasVisible ? 1 : 0 }}
            transition={{ duration: 2 }}
          >
            {isComputersCanvasVisible && <ComputersCanvas />}
          </motion.div>
        </div>
      </div>
      <div
        className="absolute xs:bottom-1 bottom-10 w-full flex justify-center items-center "
        style={{ flexDirection: "column" }}
      >
        <div className="w-[64px] h-[35px] rounded-3xl border-4 border-[#FFD369] flex justify-center items-start p-2">
          <motion.div
            animate={{
              x: [-20, 20, -20],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-3 h-3 rounded-full background-secondary mb-1"
          />
        </div>
        <h1 style={{ color: "#FFD369", fontWeight: 600 }}>
          Tente Mover o Computador
        </h1>
      </div>
    </section>
  );
};

export default Hero;
