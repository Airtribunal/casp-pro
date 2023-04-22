import React from "react";
import the1 from "./../../../public/images/projects/1.png";
import the2 from "./../../../public/images/projects/2.png";
import the3 from "./../../../public/images/projects/3.png";
import the4 from "./../../../public/images/projects/4.png";
import the5 from "./../../../public/images/projects/5.png";
import the6 from "./../../../public/images/projects/6.png";
import ProjectCard from "../molecules/ProjectCard";

const Projects = (props) => {
  const { projectsRef, projectsInView } = props;

  const projects = [
    {
      title: "massage studio",
      description:
        "Студия Массажа дербентская компания. Основатель студии попросил нас сделать для них сайт, который повысит их продажи.",
      link: "https://massagederbent.ru",
      src: the3,
    },
    {
      title: "massage studio",
      description:
        "Студия Массажа дербентская компания. Основатель студии попросил нас сделать для них сайт, который повысит их продажи.",
      link: "https://massagederbent.ru",
      src: the4,
    },
    {
      title: "vk app улыбка",
      description:
        'Создание ВК Виджетов для вашего сообщества также входит в список наших возможностей. Вы увидите виджет популярной группы ВК, который позволяет накапливать разную "валюту"',
      link: "https://vk.ru/app51521137",
      src: the1,
    },
    {
      title: "vk app улыбка",
      description:
        'Создание ВК Виджетов для вашего сообщества также входит в список наших возможностей. Вы увидите виджет популярной группы ВК, который позволяет накапливать разную "валюту"',
      link: "https://vk.ru/app51521137",
      src: the2,
    },
    {
      title: "ramazanov portfolio",
      description:
        "Наше агентство также занимается созданием сайтов-портфолио. Сайт-портфолио позволяет вам выделиться и повысить свою ценность.",
      link: "https://ramazanov-web.ru/",
      src: the5,
    },
    {
      title: "ramazanov portfolio",
      description:
        "Наше агентство также занимается созданием сайтов-портфолио. Сайт-портфолио позволяет вам выделиться и повысить свою ценность.",
      link: "https://ramazanov-web.ru/",
      src: the6,
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <h1
          className={projectsInView ? "section-title animate" : "section-title"}
        >
          Недавние проекты
        </h1>
        <div ref={projectsRef} className="projects-grid">
          {projects.map((project, id) => (
            <ProjectCard key={id} {...project}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
