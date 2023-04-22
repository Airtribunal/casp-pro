"use client";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const ProjectCard = (props) => {
  const { ref: projectRef, inView: projectInView } = useInView();

  return (
    <div ref={projectRef} className={projectInView ? "project animate" : "project"}>
      <div className="project-img">
        <Image src={props.src} alt={props.title} />
      </div>
      <div className="project-content">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <a href={props.link} target="_blank">
          <button>Перейти</button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
