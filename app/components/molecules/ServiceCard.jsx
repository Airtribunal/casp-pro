"use client";
import { useInView } from "react-intersection-observer";
import { CardActionArea } from "@mui/material";
import Image from "next/image";

const ServiceCard = (props) => {
  const { ref: servivesRef, inView: servivesInView } = useInView();

  return (
    <div ref={servivesRef} className={servivesInView ? "service-card animate" : "service-card"}>
      <div className="service-card-header">
        <div className="service-card-icon">
          <Image src={props.src} alt={props.alt} className="service-icon-img" />
        </div>
        <div className="service-card-title">
          <h2>{props.title}</h2>
          <div className={`service-card-title-divider ${props.divider}`}></div>
        </div>
      </div>
      <div className="service-card-description">
        <p>{props.sub}</p>
        <p>{props.sup}</p>
      </div>
      <div className="service-card-price">
        <span>от </span>
        <strong>{props.price}</strong>
      </div>
      <CardActionArea
        onClick={props.togglePopUp}
        component="div"
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          maxWidth: "230px",
          borderRadius: "11px",
        }}
      >
        <button className={props.buttonClass}>Оформить заявку</button>
      </CardActionArea>
    </div>
  );
};

export default ServiceCard;
