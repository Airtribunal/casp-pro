"use client";
import "../styles/globals.css";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import { BsArrowUpCircle } from "react-icons/bs";

export default function RootLayout({ children }) {
  // Navigation
  const [activeNav, setActiveNav] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const navigation = [
    { name: "Главная", href: "#" },
    { name: "Услуги", href: "#services" },
    { name: "Проекты", href: "#projects" },
    { name: "О нас", href: "#about-us" },
    { name: "Контакты", href: "#contacts" },
  ];

  const navigationLinks = navigation.map((link, id) => (
    <a key={id} href={link.href} onClick={navCloseInTime}>
      {link.name}
    </a>
  ));

  function toggleNav() {
    setActiveNav((prevActiveNav) => !prevActiveNav);
  } // Handle mobile responsiveness

  function navCloseInTime() {
    setTimeout(() => {
      setActiveNav((prevActiveNav) => !prevActiveNav);
    }, 400);
  } // Close nav after clicking a nav-link in 400ms

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); //// change background color on scroll

  return (
    <html>
      <head>
        <title>Casp-Pro | Web Agency</title>
        <meta name="theme-color" content="#fff" />
        <meta
          name="google-site-verification"
          content="oJH1XYQACPSLyLuFsMqbn6PbK1LWCotG91EJjJ3kcbY"
        />
        <meta name="yandex-verification" content="eada7e2cc2d8d279" />
        <link rel="shortcut icon" href="images/favicons/favicon-64x64.png"></link>
        <meta name="google-site-verification" content="oJH1XYQACPSLyLuFsMqbn6PbK1LWCotG91EJjJ3kcbY"/>
      </head>
      <body>
        <header className={scrollY > 80 ? "header active" : "header"}>
          <div className="container">
            <ul>
              <a href="/">
                <li className="logo">
                  <div className="logo-container">
                    <span className="logo-letters">CP</span>
                    <span className="logo-divider"></span>
                    <h3 className="logo-name">Casp-Pro</h3>
                  </div>
                </li>
              </a>
              <li className="nav-toggle open" onClick={toggleNav}>
                <FaBars fontSize="1.5rem" />
              </li>
              <li className={activeNav ? "nav-links active" : "nav-links"}>
                <div onClick={toggleNav} className="nav-toggle close">
                  <FaBars fontSize="1.5rem" />
                </div>
                {navigationLinks}
              </li>
            </ul>
          </div>
        </header>

        {children}
        {scrollY > 120 && (
          <a
            style={{
              position: "fixed",
              bottom: "2%",
              right: "1%",
            }}
            className="scroll-up"
            href="#"
          >
            <BsArrowUpCircle size="2rem" color="#FB8B24" opacity=".75" />
          </a>
        )}
      </body>
    </html>
  );
}
