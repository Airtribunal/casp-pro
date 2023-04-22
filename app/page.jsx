"use client";
import React, { useState } from "react";
import {
  Home,
  WhyUs,
  Services,
  Tools,
  Projects,
  About,
  Contact,
  PopupForm,
} from "./components/sections/index";
import { sendContactForm } from "@/lib/api";

import { useInView } from "react-intersection-observer";
import { createTheme } from "@mui/material/styles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page = () => {
  // Contact Form
  const formData = {
    name: "",
    subject: "",
    email: "",
    message: "",
    number: "",
    agreement: false,
  };

  const [formState, setFormState] = useState(formData);
  const { name, subject, email, message, number, agreement } = formState;
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  function handleChange({ target }) {
    console.log(formState);
    setFormState((prev) => {
      return {
        ...prev,
        [target.name]:
          target.name == "agreement" ? target.checked : target.value,
      };
    });
  }

  async function handleSubmit(e) {
    setIsLoading(true);
    await e.preventDefault();

    if (e.target.id == "form") {
      if (name == "" || subject == "" || email == "" || message == "") {
        setIsLoading(false);
        toast.warn("Заполните все поля, пожалуйста!", {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        try {
          setIsSent(true);
          await sendContactForm(formState);
          setIsLoading(false);
          setIsSent(false);
          toast.success("💌 Сообщение отправлено. Спасибо!", {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "light",
          });
          setFormState((prev) => {
            return {
              ...prev,
              name: "",
              subject: "",
              email: "",
              message: "",
            };
          });
        } catch (error) {
          setIsLoading(false);
          console.log(error);
          toast.error("💌 Сообщение не отправлено. Попробуйте позже.", {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      }
    } else if (e.target.id == "popup-form") {
      if (
        name == "" ||
        email == "" ||
        number == "" ||
        agreement == (false || "")
      ) {
        setIsLoading(false);
        toast.warn("Заполните все поля, пожалуйста!", {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        try {
          setIsSent(true);
          await sendContactForm(formState);
          setIsLoading(false);
          setIsSent(false);
          toast.success(
            "💌 Ваша Заявка отправлена! Скоро мы с вами свяжемся.",
            {
              position: "bottom-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: false,
              progress: undefined,
              theme: "light",
            }
          );
          setFormState((prev) => {
            return {
              ...prev,
              name: "",
              email: "",
              number: "",
              agreement: false,
            };
          });
        } catch (error) {
          setIsLoading(false);
          console.log(error);
          toast.error("💌 Заявка не отправлена. Попробуйте позже.", {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      }
    }
  }

  // Pop-up Realization
  const [popUpState, setPopUpState] = useState(false);

  function togglePopUp() {
    setPopUpState((prevPopUpState) => !prevPopUpState);
  }

  // Theme for Loading Spinner
  const theme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
    },
  });

  // Animations On Scroll
  const { ref: whyUsRef, inView: whyUsRefInView } = useInView({
    triggerOnce: true,
  });
  const { ref: servivesRef, inView: servivesInView } = useInView();
  const { ref: toolsRef, inView: toolsInView } = useInView({
    triggerOnce: true,
  });
  const { ref: projectsRef, inView: projectsInView } = useInView();
  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: true,
  });

  const { ref: contactsRef, inView: contactsInView } = useInView({
    triggerOnce: true,
  });

  return (
    <>
      {popUpState && (
        <PopupForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          name={name}
          email={email}
          number={number}
          isSent={isSent}
          isLoading={isLoading}
          agreement={agreement}
          togglePopUp={togglePopUp}
          theme={theme}
        />
      )}
      <Home togglePopUp={togglePopUp} popUpState={popUpState} />
      <WhyUs whyUsRef={whyUsRef} whyUsRefInView={whyUsRefInView} />
      <Services
        servivesRef={servivesRef}
        servivesInView={servivesInView}
        togglePopUp={togglePopUp}
      />
      <Tools toolsRef={toolsRef} toolsInView={toolsInView} />
      <Projects
        projectsRef={projectsRef}
        projectsInView={projectsInView}
        togglePopUp={togglePopUp}
      />
      <About aboutRef={aboutRef} aboutInView={aboutInView} />
      <Contact
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        name={name}
        subject={subject}
        email={email}
        message={message}
        isSent={isSent}
        isLoading={isLoading}
        theme={theme}
        contactsRef={contactsRef}
        contactsInView={contactsInView}
      />
      <ToastContainer />
    </>
  );
};

export default Page;
