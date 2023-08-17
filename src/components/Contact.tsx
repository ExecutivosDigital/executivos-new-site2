import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import ChangeBudgetStatusModal from "./Modal";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { Element } from "react-scroll";
import { getFirestore , addDoc , collection } from 'firebase/firestore'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth, firebaseApp } from '../constants/firabase'

interface Props {
  site: string;
}

export default function Contract({site}: Props) {
  const styles = {
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-16 py-10",  
    heroHeadText:
      "font-black text-white lg:text-[64px] sm:text-[55px] xs:text-[45px] text-[35px] lg:leading-[98px] mt-2",
    heroSubText:
      "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",  
    sectionHeadText:
      "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
    sectionSubText:
      "text-white sm:text-[18px] text-[14px] uppercase tracking-wider",
      sectionHeadTextBlack:
      "text-black Black font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
    sectionSubTextBlack:
      "sm:text-[18px] font-black text-[14px] text-black uppercase tracking-wider",
  };
  
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}`;
  const [date, setDate] = useState(formattedDate);
  const db = getFirestore(firebaseApp)
  const userCollectionRef = collection(db,'dados')
  const email = 'maysdsacosdsdn@2323.com'
  const [isFieldsValid, setIsFieldsValid] = useState(true);

  const [loading, setLoading] = useState(false);
  const [ toolsModalShow, setToolsModalShow ]= useState(false);


  const handleSend = async () => {
    console.log("Antes de chamar handleSend");
    try {
      console.log("Login efetuado com sucesso!");
      const data = await addDoc(userCollectionRef, {
        site,
        name,
        whatsapp,
        message,
        date,
      });
    } catch (error) {
      console.log(error.code);
    }
  };

  const maskPhone = (value: string) => {
    if (!value) {
      return "";
    }
    value = value.replace(/\D/g, "");
    value = value.replace(/^(\d{2})(\d)/g, "($1)$2");
    value = value.replace(/(\d)(\d{4})$/, "$1-$2");
    return value;
  };

  const isFormValid = () => {
    const isValid =
      name.trim() !== "" &&
      message.trim() !== "" &&
      (whatsapp.replace(/\D/g, "").length === 10 || whatsapp.replace(/\D/g, "").length === 11);
    setIsFieldsValid(isValid);
    return isValid;
  };

  const handleButtonClick = () => {
    if (isFormValid()) {
    handleSend();
    window.alert(`Obrigado ${name} \nNos recebemos sua mensagem e entraremos em contato em breve!`)
    }
    
  };

  return (
    <div className={`xl:mt-12 pt-4 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <Element name="contato">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className='flex-[0.75] background-secondary p-8 rounded-2xl'
        >
          <ChangeBudgetStatusModal
            open={toolsModalShow}
            close={() => setToolsModalShow(false)}
          />
          <p className={styles.sectionSubTextBlack}>Fale Sobre seu</p>
          <h3 className={styles.sectionHeadTextBlack}>Projeto</h3>

          <div className='mt-12 flex flex-col gap-8'>
            <label className='flex flex-col'>
              <span className='text-black font-medium mb-4' style={{ fontWeight: '600' }}>😃Seu Nome:</span>
              <input
                type='text'
                name='name'
                onChange={(e) => setName(e.target.value)}
                placeholder="Qual é seu nome Completo?"
                className='background-black py-4 px-6 placeholder: text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-black font-medium mb-4' style={{ fontWeight: '600' }}>📲 Seu Número de WhatsApp:</span>
              <input
                name='phone'
                value={maskPhone(whatsapp)}
                onChange={(e) => setWhatsapp(e.target.value)}
                placeholder="Qual é seu WhatsApp?"
                className='background-black py-4 px-6 placeholder: text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-black font-medium mb-4' style={{ fontWeight: '600' }}>📝 Fale sobre seu Projeto: </span>
              <textarea
                rows={7}
                name='message'
                onChange={(e) => setMessage(e.target.value)}
                placeholder='Descreva aqui o projeto que voce quer tirar do papel e executar com a gente.'
                className='background-black py-4 px-6 placeholder: text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
            <label style={{height: '5px', alignSelf:'center', color:'red'}}>{isFieldsValid ? "" : "*Preencha os campos acima Corretamente"} </label>
            <button
              className='bg-black py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
              onClick={handleButtonClick}
            >
              {loading ? "Enviando..." : "Análise GRATUITA da Executivos"}
            </button>
          </div>
        </motion.div>
      </Element>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[450px]  h-[450px] bottom-[100px] justify-center items-center'
      >
        <EarthCanvas />
      </motion.div>
      <div className='absolute top-[550px] w-full flex justify-center items-center'>
        <div className='w-[64px] h-[35px] rounded-3xl border-4 border-[#ffff44] flex justify-center items-start p-2'>
          <motion.div
            animate={{
              x: [-20, 20, -20],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className='w-3 h-3 rounded-full background-secondary mb-1'
          />
        </div>
      </div>
    </div>
  );
};
