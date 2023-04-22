"use client";
import React from "react";
import Image from "next/image";
import inst from "../../../public/images/contact/instagram.png";
import telegram from "../../../public/images/contact/telegram.png";
import whatsapp from "../../../public/images/contact/whatsapp.png";
import CircularProgress from "@mui/material/CircularProgress";
import { ThemeProvider } from "@mui/material/styles";

const Contact = (props) => {
  const {
    name,
    subject,
    email,
    message,
    handleSubmit,
    handleChange,
    isSent,
    isLoading,
    theme,
    contactsRef,
    contactsInView,
  } = props;

  return (
    <section className="contact-section" id="contacts">
      <div className="container">
        <h1
          className={
            contactsInView
              ? "contact section-title animate"
              : "contact section-title"
          }
        >
          Давайте построим что-то <strong>невероятное!</strong>
        </h1>
        <div ref={contactsRef} className="contact-content">
          <div className={contactsInView ? "contact-info animate" : 'contact-info'}>
            <h3>Контактные данные</h3>
            <div className="contact-email">
              <h5>E-mail:</h5>
              <span>
                <a href="mailto:">airtribunal@gmail.com</a>
              </span>
            </div>
            <div className="contact-number">
              <h5>Телефон:</h5>
              <span>
                <a href="tel:+79322488005">+7 932 248-80-05</a>
              </span>
            </div>
            <div className="social-media">
              <div className="media-icon">
                <a href="https://www.instagram.com/airtribunal/">
                  <Image src={inst} alt="instagram icon" />
                </a>
              </div>
              <div className="media-icon">
                <a href="https://t.me/airtribunal">
                  <Image src={telegram} alt="telegram icon" />
                </a>
              </div>
              <div className="media-icon">
                <a href="https://wa.me/9322488005">
                  <Image src={whatsapp} alt="watsapp icon" />
                </a>
              </div>
            </div>
          </div>
          <form id="form" className={contactsInView ? "form animate" : 'form'} onSubmit={handleSubmit}>
            <div className="form-container">
              <h2 className="form-title">Свяжитесь с нами!</h2>
              <label htmlFor="name">Ваше имя</label>
              <input
                onChange={handleChange}
                type="text"
                name="name"
                id="name"
                value={name}
              />
              <label htmlFor="mail">Ваша почта</label>
              <input
                onChange={handleChange}
                type="email"
                id="email"
                name="email"
                value={email}
              />
              <label htmlFor="subject">Тема сообщения</label>
              <input
                onChange={handleChange}
                type="text"
                id="subject"
                name="subject"
                value={subject}
              />
              <label htmlFor="message">Ваше сообщение</label>
              <textarea
                onChange={handleChange}
                type="text"
                id="message"
                name="message"
                value={message}
              />
              <button disabled={isSent} className="submit-button">
                {isLoading ? (
                  <ThemeProvider theme={theme}>
                    <CircularProgress size={30} />
                  </ThemeProvider>
                ) : (
                  "отправить"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
