import { Image, Modal, ModalBody } from "react-bootstrap";
import { styled } from "styled-components";

interface Props {
  marginLeft?: string | number;
  marginTop?: string | number;
  size?:string | number;
  width?:string | number;
  color?: string;
}

export const Container = styled(Modal)`
display: flex;
justify-content: center;
align-items: center;
margin-top: 10vh;
border-radius: 20px;

`;

export const Content = styled(ModalBody)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000;
  border-radius: 20px;
  width: 100%;
  height: 100%;

`;
export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #000;
  width: 100%;
  height: 100%;

`;
export const FormImages = styled.div`
  display: flex;
  flex-direction: row;
  background-color: transparent;
  @media (max-width: 997px) {
    flex-direction: column;
    
  }
`; 
export const LogoImg = styled(Image)`
align-self: center;
height: 30vh;
width: 35vw;
background-color: transparent;
margin-left: -50px;
margin-top: -10px;
@media (max-width: 500px) {
  width: 50vh;
    
  }
`;
export const LogoText = styled(Image)`
align-self: center;
height: 20vh;
width: 35vh;
background-color: transparent;
margin-left: -50px;
margin-top: -10px;
@media (max-width: 500px) {
  height: 10vh;
    
  }
`;
export const Title = styled.label<Props>`

color: ${(props) => (props.color ? props.color : "#fff")};
font-size: ${(props) => (props.size ? props.size : 14)}px;
margin-left: ${(props) => (props.marginLeft ? props.marginLeft : '0px')};
margin-top: ${(props) => (props.marginTop ? props.marginTop : '0px')};
background-color: transparent;
align-self: center;
align-items: center;
justify-content: center; 
text-align: center;

`;
export const FinishButton = styled.button`
margin-top: 30px;
align-self: center;
background-color: #343;
width: 260px;
height: 50px;
border-radius: 15px;
color: #fff ;
font-size: 15px ;
font-family: bold;
`
export const FormText = styled.div`
  margin-left:5px;
  display:flex;
  flex-direction: column;
  background-color: transparent;
`
export const CopyButton = styled.button`
height: 45px;
width: 76px;

border-radius: 10px;
z-index: 1;
margin-left: -20px;
font-family: bold;
font-size: 20px;
color: #fff;
border: 2px solid #000;

`;
export const Link = styled.input`
height: 45px;
width: 60%;
z-index: 0;
border-radius: 10px;
padding-left: 3%;
border: none;
@media (max-width: 500px) {
    width: 80%;
    
  }


`;

export const Form =styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  background-color: transparent;
  margin-top: 10px;
  justify-content: center;
`;
export const FormSocial = styled.div`
display: flex;
justify-content: space-between;
align-self: center;
width: 220px;
background-color: transparent;
margin-top: 10px;
`;
export const FormTop = styled.div`
display: flex;
align-self: center;
width: 100%;
background-color: transparent;
flex-direction: row;

`;
export const SocialButton = styled.button`
  display: flex;
  width: 150px;
  height: 60px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  align-self:center;
  background-color: transparent;
  margin-top: 10px;
  margin-bottom: 10px;
`;
export const WhatsAppImage = styled(Image)`
  width: 150px;
  height: 60px;
  background-color: transparent;

`;
export const InstagramImage = styled(Image)`
  width: 38px;
  height: 38px;
  background-color: transparent;
`;
export const BaseTitle = styled.label<Props>`
  color: #fff;
  font-size: ${(props) => (props.size ? props.size : 14)}px;
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : "0px")};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "0px")};
  background-color: transparent;
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const CloseButtonTop = styled.button`
  display: flex;
  background-color: gray;
  height: 50px;
  width: 50px;
  border-radius: 20px;
  color: #fff;
  font-size: 18px;
  font-family: bold;
  border: none;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;