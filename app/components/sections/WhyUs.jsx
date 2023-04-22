import React from "react";
import Image from "next/image";
import speed from "./../../../public/images/why-us/speed.png";
import quality from "./../../../public/images/why-us/quality.png";
import diamond from "./../../../public/images/why-us/diamond.png";

const WhyUs = (props) => {
  const { whyUsRef, whyUsRefInView } = props;

  const advantagesArray = [
    {
      title: "Качество",
      description: "Наши сайты доводятся до безупречности.",
      src: quality,
      alt: "качество",
    },
    {
      title: "Скорость",
      description: "Хороший сайт за недолгий срок работы.",
      src: speed,
      alt: "скорость",
    },
    {
      title: "Оригинальность",
      description: "Дизайн сайта будет особенным.",
      src: diamond,
      alt: "originality",
    },
  ];

  return (
    <section className="why-section">
      <div className="container">
        <h1
          className={
            whyUsRefInView ? "why section-title animate" : "why section-title"
          }
        >
          Почему стоит выбирать нас
        </h1>
        <div ref={whyUsRef} className="why-cards">
          {advantagesArray.map((advantage, id) => (
            <div key={id} className={whyUsRefInView ? "card animate" : "card"}>
              <div className="card-img-container">
                <Image
                  src={advantage.src}
                  alt={advantage.alt}
                  className="card-img"
                />
              </div>
              <div className="card-text">
                <h3>{advantage.title}</h3>
                <p>{advantage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
