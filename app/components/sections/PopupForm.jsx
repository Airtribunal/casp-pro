"use client";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { ThemeProvider } from "@mui/material/styles";
import CircularProgress from "@mui/material/CircularProgress";

const PopupForm = (props) => {
  const {
    togglePopUp,
    handleChange,
    handleSubmit,
    name,
    email,
    number,
    isSent,
    isLoading,
    agreement,
    theme
  } = props;

  return (
    <div className="darken-space">
      <div className="popup">
        <span onClick={togglePopUp} className="popup-close">
          <AiOutlineClose fontSize="1.5rem" />
        </span>
        <a href="/">
          <div className="logo">
            <div className="logo-container">
              <span className="logo-letters">CP</span>
              <span className="logo-divider"></span>
              <h3 className="logo-name">Casp-Pro</h3>
            </div>
          </div>
        </a>
        <h3 className="popup-title">Заполните форму</h3>
        <form onSubmit={handleSubmit} className="popup-form" id="popup-form">
          <div className="form-element">
            <input
              onChange={handleChange}
              value={name}
              name="name"
              placeholder="Ваше имя"
              type="text"
              id="popup-name"
            />
          </div>
          <div className="form-element">
            <input
              onChange={handleChange}
              value={email}
              name="email"
              placeholder="Ваш e-mail*"
              type="email"
              id="popup-email"
            />
          </div>
          <div className="form-element">
            <input
              onChange={handleChange}
              value={number}
              name="number"
              placeholder="Ваш телефон*"
              type="tel"
              id="popup-phone"
            />
          </div>
          <div className="form-element checkbox-container">
            <input
              onChange={handleChange}
              checked={agreement}
              type="checkbox"
              name="agreement"
              id="agreement"
            />
            <span>согласие на обработку персональных данных</span>
          </div>
          <div className="popup-submit-container">
            <button disabled={isSent} className="popup-submit">
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
  );
};

export default PopupForm;
