import React from "react";
import { PopupForm } from ".";

const Home = (props) => {
  const { togglePopUp } = props;

  return (
    <section className="home-section">
      <div className="container">
        <div className="hero">
          <div className="hero-content">
            <h1>
              Сделаем <span>быстрый</span> и <span>современный</span> веб-сайт
              для Вас!
            </h1>
            <h3>Решаем задачи продуктивно, уделяя внимание каждой детали.</h3>
            <button onClick={togglePopUp}>Бесплатная консультация</button>
          </div>
          <div className="hero-img-container">
            <img
              src="/images/hero/hero-guys.png"
              alt="hero-workers"
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
