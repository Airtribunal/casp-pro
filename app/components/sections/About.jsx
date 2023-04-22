import React from "react";
import Image from "next/image";
import avatar from "./../../../public/images/about-us/avatar.png";

const About = (props) => {
  const { aboutRef, aboutInView } = props;

  return (
    <section className="about-section" id="about-us">
      <div className="container">
        <h1 className={aboutInView ? "section-title animate" : "section-title"}>
          О нашем агенстве
        </h1>
        <div ref={aboutRef} className="about-content">
          <div className={aboutInView ? "about-card animate" : "about-card"}>
            <div className="avatar-img-container red-bg">
              <Image src={avatar} alt="avatar" className="avatar-img" />
            </div>
            <div className="about-info">
              <div className="personal-info">
                <h3 className="name">Ramazan Ramazanov</h3>
                <h4 className="occupation">Founder & CEO</h4>
              </div>
              <p className="experience">4 года в сфере веб разработки</p>
            </div>
          </div>
          <div className="about-text">
            <h2 className={aboutInView ? "about-subtitle animate" : "about-subtitle"}>Мы приносим вам прибыль...</h2>
            <h4 className={aboutInView ? "about-suptitle animate" : 'about-suptitle'}>
              Для современного веб-сайта важны верная подача информации,
              скорость и отзывчивость. Мы готовы вам с этим помочь!
            </h4>
            <p className={aboutInView ? "about-article animate" : "about-article"}>
              Casp-Pro - относительно молодое агентство с огромным
              потенциалом. Несколько месяцев назад мы заметили, что любой бизнес
              становится более прибыльным, если у него есть собственный
              веб-сайт. Поэтому нашей первой задачей стало создание агентства,
              которое обеспечит предпринимателей красивой веб-страницей. И с тех
              пор, создавая хорошо спроектированные, быстрые, оптимизированные и
              отзывчивые веб-сайты, мы помогаем бизнесу людей расти. Мы ищем
              особенных клиентов с интересными идеями. И если это вы, то для нас
              будет честью работать с вами.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
