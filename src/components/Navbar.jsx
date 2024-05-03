import React, { useEffect, useState } from "react";
import { styles } from "../styles";
import { Link as ScrollLink, Element } from "react-scroll";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [closing, setClosing] = useState(false);

  const navLinks = [
    {
      id: "Sobre",
      title: "Sobre",
    },
    {
      id: "Projetos",
      title: "Projetos",
    },
    {
      id: "Contato",
      title: "Contato",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setToggle(!toggle);
    setClosing(true);
  };

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full  flex items-center py-[24px] md:py-[26px] fixed top-0 z-20 ${
        scrolled ? "background-navbar" : "bg-transparent"
      }`}
    >
      <div className="w-full h-0.5 flex justify-between items-center max-w-7xl mx-auto">
        <img
          src={"./logoCerta.png"}
          alt="logoGit"
          className="  object-cover   h-8 md:h-10 "
        />
        <ul className="list-none hidden sm:flex flex-row gap-10 ">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "primary-color"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <ScrollLink
                to={nav.id.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {nav.title}
              </ScrollLink>
            </li>
          ))}
        </ul>
        {/* Toggle button for mobile menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? "/close.svg" : "/menu.svg"}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "slide-out " : "slide-in"
            } p-6 navbar-gradient absolute top-10 right-[-20px] mx-4 my-2 min-w-[140px] z-10  rounded-bl-xl rounded-br-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-league-spartan font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "primary-color" : "primary-color"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <ScrollLink
                    to={nav.id.toLowerCase()}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    {nav.title}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
