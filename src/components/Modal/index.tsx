
import { useRef, useState } from "react";
import { CloseButtonTop, Container, Content, CopyButton, FinishButton, Form, FormImages, FormSocial, FormText, FormTop, InstagramImage, Link, LogoImg, LogoText, ModalBackground, ModalContent, SocialButton, Title, WhatsAppImage } from "./styles";
interface ModalProps {
  open: boolean;
  close: () => void;
}


export default function ChangeBudgetStatusModal({
  open,
  close,
}: ModalProps) {
  const [copyButtonText, setCopyButtonText] = useState("Copiar");
  const fixedLink = "https://listadeespera.juridia.com.br"; // Texto fixo do input
  const inputRef = useRef<HTMLInputElement>(null);
  const openWhatsapp = () => {
    window.open("https://wa.me/send?text=Ja%20viu%20a%20nova%20Intligencia%20Artificial%20Juridica?%0AAcesse%20para%20saber%20os%20benficios:%0Ahttps://listadeespera.juridia.com.br");

} 
  const handleCopyClick = () => {
    try {
      if (inputRef.current) {
        inputRef.current.select();
        document.execCommand("Copiar");
        setCopyButtonText("copiado!");
        setTimeout(() => {
          setCopyButtonText("Copiar");
        }, 5000); // 5000 milissegundos = 5 segundos
      }
    } catch (err) {
      console.error("Não foi possível copiar o texto: ", err);
    }
  };

  return (
    <Container show={open} onHide={close} size='lg' data-backdrop="false">
      <Content>
        <ModalContent>
        <FormTop>
        <CloseButtonTop onClick={close}> x </CloseButtonTop>
        <Form>
          <FormImages >
      <LogoImg width={120}height={120} src={'/logoFull.svg'} alt=""/>
      </FormImages>
      </Form>
      </FormTop>
          <FormText>
            <Title size={25} marginTop='30px' color='#fff'>OBRIGADO POR ENTRAR EM CONTATO</Title>
            
            <Form>
            </Form>
            <FinishButton onClick={close}> Fechar</FinishButton>
          </FormText>
          </ModalContent>
      </Content>
    </Container>
  );
}
