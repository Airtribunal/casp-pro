"use client";
import React from "react";
import landing from "../../../public/images/services/landing-page.png";
import multi from "../../../public/images/services/multi-landing.png";
import ecommerce from "../../../public/images/services/ecommerce.png";
import ServiceCard from "../molecules/ServiceCard";
const Services = (props) => {
  const { togglePopUp, servivesRef, servivesInView } = props;

  const services = [
    {
      title: "Landing Page",
      sub: "Одностраничный вебсайт для продажи и продвижения одного видатовара или услуг.",
      sup: "Такой сайт обычно используют для быстрого старта бизнеса и его тестирования.",
      src: landing,
      alt: "landing-page",
      divider: "pink",
      price: "₽ 50 000",
      buttonClass: "pink-serv-btn",
    },
    {
      title: "Multi Landing",
      sub: "Мультилендинг — это несколько вариантов одной страницы: с разнымдизайном.",
      sup: "Сайт, который позволяет увеличить конверсию сайта за счет предложений.",
      src: multi,
      alt: "multi-landing-page",
      divider: "blue",
      price: "₽ 75 000",
      buttonClass: "blue-serv-btn",
    },
    {
      title: "E-Commerce",
      sub: "Корпоративный сайт — это площадка, которая предлагает продукты и услуги компании.",
      sup: "На вашем сайте показано, что вы предлагаете — будь то услуги, информация или продукты.",
      src: ecommerce,
      alt: "ecommerce",
      divider: "orange",
      price: "₽ 90 000",
      buttonClass: "orange-service-btn",
    },
  ];

  return (
    <section className="services-section" id="services">
      <div className="container">
        <h1
          className={servivesInView ? "section-title animate" : "section-title"}
        >
          Наши услуги
        </h1>
        <div ref={servivesRef} className="services-content">
          {services.map((service, id) => (
            <ServiceCard togglePopUp={togglePopUp} key={id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
