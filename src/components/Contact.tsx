import { addDoc, collection, getFirestore } from "firebase/firestore";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Element } from "react-scroll";
import { firebaseApp } from "../constants/firabase";
import { slideIn } from "../utils/motion";
import ChangeBudgetStatusModal from "./Modal";
import { EarthCanvas } from "./canvas";

interface Props {
  site: string;
}

export default function Contract({ site }: Props) {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate()}/${
    currentDate.getMonth() + 1
  }/${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}`;
  const [date, setDate] = useState(formattedDate);
  const db = getFirestore(firebaseApp);
  const userCollectionRef = collection(db, "dados");
  const email = "maysdsacosdsdn@2323.com";
  const [isFieldsValid, setIsFieldsValid] = useState(true);
  const [loading, setLoading] = useState(false);
  const [toolsModalShow, setToolsModalShow] = useState(false);

  const handleSend = async () => {
    try {
      const data = await addDoc(userCollectionRef, {
        site,
        name,
        whatsapp,
        message,
        date,
      });
      console.log("Dados adicionados com sucesso:", data);
    } catch (error: any) {
      console.log("Erro ao adicionar dados:", error);
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
      (whatsapp.replace(/\D/g, "").length === 10 ||
        whatsapp.replace(/\D/g, "").length === 11);
    setIsFieldsValid(isValid);
    return isValid;
  };

  const handleButtonClick = () => {
    if (isFormValid()) {
      handleSend();
      window.alert(
        `Obrigado ${name} \nRecebemos sua mensagem e entraremos em contato em breve!`
      );
    }
  };

  const [isEarthCanvasVisible, setIsEarthCanvasVisible] = useState(false);

  const earthCanvasRef = useRef(null);
  const contactRef = useRef(null);

  const handleIntersection = (entries:any) => {
    const [entry] = entries;
    setIsEarthCanvasVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Ajuste conforme necessário
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (earthCanvasRef.current) {
      observer.observe(earthCanvasRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className={`xl:mt-12 pt-4 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <Element name="contato">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] background-secondary p-8 rounded-2xl"
        >
          <ChangeBudgetStatusModal
            open={toolsModalShow}
            close={() => setToolsModalShow(false)}
          />
          <p className={"text-black font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]"}>Fale Sobre seu</p>
          <h3 className={"sm:text-[18px] font-black text-[14px] text-black uppercase tracking-wider"}>Projeto</h3>

          <div className="mt-12 flex flex-col gap-8">
            <label className="flex flex-col">
              <span
                className="text-black font-medium mb-4"
                style={{ fontWeight: "600" }}
              >
                😃Seu Nome:
              </span>
              <input
                type="text"
                name="name"
                onChange={(e) => setName(e.target.value)}
                placeholder="Qual é seu nome Completo?"
                className="background-black py-4 px-6 placeholder: text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span
                className="text-black font-medium mb-4"
                style={{ fontWeight: "600" }}
              >
                📲 Seu Número de WhatsApp:
              </span>
              <input
                name="phone"
                value={maskPhone(whatsapp)}
                onChange={(e) => setWhatsapp(e.target.value)}
                placeholder="Qual é seu WhatsApp?"
                className="background-black py-4 px-6 placeholder: text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span
                className="text-black font-medium mb-4"
                style={{ fontWeight: "600" }}
              >
                📝 Fale sobre seu Projeto:{" "}
              </span>
              <textarea
                rows={7}
                name="message"
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Descreva aqui o projeto que você quer tirar do papel e executar conosco."
                className="background-black py-4 px-6 placeholder: text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label style={{ height: "5px", alignSelf: "center", color: "red" }}>
              {isFieldsValid ? "" : "*Preencha os campos acima corretamente"}{" "}
            </label>
            <button
              className="bg-black py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
              onClick={handleButtonClick}
            >
              {loading ? "Enviando..." : "Análise GRATUITA da Executivos"}
            </button>
          </div>
        </motion.div>
      </Element>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[450px] h-[450px] bottom-[100px] justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: isEarthCanvasVisible ? 1 : 0 }}
        transition={{ duration: 3 }}
      >
        <div ref={earthCanvasRef} className="  bottom-[100px] justify-center items-center" style={{height:'90%'}}>
          {isEarthCanvasVisible && <EarthCanvas />}
        </div>
      </motion.div>
      <div className="absolute top-[430px] w-full flex justify-center items-center">
        <div className="w-[64px] h-[35px] rounded-3xl border-4 border-[#ffff44] flex justify-center items-start p-2">
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
      </div>
    </div>
  );
}
