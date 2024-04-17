import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";
import WebDeveloperImg from "../../public/logoFull.svg";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Desenvolvimento Web",
    icon: "./WebDeveloping.png",
  },
  {
    title: "Desenvolvimento de Aplicativos",
    icon: "./mobileAppDeveloping.png",
  },
  {
    title: "Inteligência Artificial",
    icon: "./InteligênciaArtificial.png",
  },
  {
    title: "Startup / SaaS",
    icon: "./SSAAS_Startps.png",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Desenvolvimento de Soluções",
    company_name:
      "Earth Tech \n Nossa Equipe foi iniciada dentro de uma Empresa chamada Earth Technollogy 🌎 empresa que desenvolvia Projetos para:",
    icon: "./logoEarthTech.png",
    iconBg: "#2e266d",
    date: "Janeiro de 2018 - Dezembro de 2020",
    points: [
      " Governos, Prefeituras e afins",
      " Empresas Privadas",
      " Startups",
      " Soluções Específicas",
    ],
  },
  {
    title: "Criação de Projetos",
    company_name:
      "Executivo's Digital 💛🖤  Software House com foco em execução de Projetos com Impacto e Qualidade🧑🏻‍💻",
    icon: "./miniLogo.png",
    iconBg: "#000",
    date: "Dezembro de 2020 - Agosto de 2023",
    points: [
      "🌐 + de 1.000.000 de Linhas de Códigos Escritas",
      "💰 + 700 Mil Transacionado Pelos nossos Clientes",
      "🤳🏻 + 6.000 Clientes Impactados",
    ],
  },
  {
    title: "Inteligência Artificial",
    company_name:
      "TrueLife IA,, Empresa de Inteligência Artificial que é parceira da Executivo's Digital. A Truelife IA confia em nós para desenvolvermos as Aplicações demandadas pelos seus clientes e a própria empresa. A Truelife IA trabalha com:",
    icon: "./logoTl1.png",
    iconBg: "#e8e8e8",
    date: "Setembro de 2022 - Agosto de 2023",
    points: [
      "🤖 IA para Condomínios",
      "🤖IA para Aeroportos e Rodoviárias",
      "🤖IA para Grandes Empresas do Exterior",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      " Sensacional!! Nossa parceira foi excelente para nossa Empresa, pois assim conseguimos unir  forças e entregarmos resultados ainda melhores para nossos clientes.\n\n\n\nx",
    name: "Paulo Gomes",
    designation: "CMO da ",
    company: "TrueLife IA",
    image: "/pauloGomes.png",
  },
  {
    testimonial:
      "Nossa Plataforma Anterior tinha vários problemas e eu estava com medo de ficar igual, mas me surpreendi! Qualquer pessoa consegue utilizar de forma simples e facilitada. Eu fiquei super contente com a qualidade.",
    name: "Prof. Dr. Rodrigo Zandonadi",
    designation: "Prof. da",
    company: "UFMT",
    image: "/RodrigoZandonadi.png",
  },
  {
    testimonial:
      "Quando eu vi a Jurid IA que é uma Inteligência Artificial focada em Escritórios de Direito eu fiquei sem reação. Primeiro deu medo da Inteligência Artificial roubar meu emprego, depois um alívio de ter a Plataforma em minhas mãos.      ",
    name: "Dr. Carlos de Paula",
    designation: "",
    company: "W&M Advogados Associados",
    image: "/carlosDePaula.png",
  },
];

const projects = [
  {
    name: "NightApp",
    description:
      "Com a Startup inovadora, você pode comprar ingressos para as festas mais quentes da cidade de forma rápida e conveniente. Além disso, oferecemos uma funcionalidade exclusiva: veja quem mais estará na mesma festa que você! Conecte-se com amigos e novas pessoas, maximizando a diversão e tornando cada evento uma oportunidade de criar memórias incríveis.",
    tags: [
      {
        name: "Startup",
        color: "blue-text-gradient",
      },
      {
        name: "Aplicativo",
        color: "green-text-gradient",
      },
      {
        name: "MobileAndWeb",
        color: "pink-text-gradient",
      },
    ],
    image: "./17.png",
    source_code_link: "https://github.com/",
  },
  {
    name: "LAPMec - UFMT",
    description:
      "Site construído para o Laboratório de Agricultura de Precisão e Mecanização Agrícola da Universidade Federal do Mato Grosso, que oferece uma experiência diferenciada e exclusiva para quem acessar o Site. Nosso foco foi trabalhar no UX/UI da Plataforma e unir com uma Tecnologia incrível para termos esse resultado.",
    tags: [
      {
        name: "UniversidadeFederal",
        color: "blue-text-gradient",
      },
      {
        name: "WebApp",
        color: "green-text-gradient",
      },
      {
        name: "GovTech",
        color: "pink-text-gradient",
      },
    ],
    image: "./18.png",
    source_code_link: "https://github.com/",
  },
  {
    name: "PagÁgil - Fintech",
    description:
      "FinTech de Pagamentos focado no Mercado Imobiliário e ganhou ampla notoriedade por sua complexidade contábil e sua forma de operar quase como um banco. Iniciamos a Jornada da PagÁgil e levamos a números gigantes, com uma infraestrutura organizada e precisa e um Design amigo do usuário. Empresa foi adquirida por uma Gigante do Mercado.",
    tags: [
      {
        name: "Fintech",
        color: "blue-text-gradient",
      },
      {
        name: "Aplicativo",
        color: "green-text-gradient",
      },
      {
        name: "MercadoImobiliário",
        color: "pink-text-gradient",
      },
    ],
    image: "./19.png",
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
