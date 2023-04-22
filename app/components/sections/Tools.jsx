import React from "react";
import Image from "next/image";
import figma from "../../../public/images/tools/figma.png";
import react from "../../../public/images/tools/react.png";
import node from "../../../public/images/tools/node-js.png";
import next from "../../../public/images/tools/next-js.png";
import vs from "../../../public/images/tools/vs-code.png";

const Tools = (props) => {
  const { toolsRef, toolsInView } = props;

  const tools = [
    { title: "Figma", src: figma },
    { title: "React", src: react },
    { title: "Node.JS", src: node },
    { title: "Next.JS", src: next },
    { title: "VS Code", src: vs },
  ];

  return (
    <section className="tools-section">
      <div className="container">
        <h1
          className={
            toolsInView ? "tools section-title animate" : "tools section-title"
          }
        >
          Лучшие технологии дают больше результата
        </h1>
        <div ref={toolsRef} className="tools-content">
          {tools.map((tool, id) => (
            <div key={id} className={toolsInView ? "tool-item animate" : 'tool-item'}>
              <div className="tool-img-container">
                <Image src={tool.src} alt={tool.title} className="tool-img" />
              </div>
              <h4 className="tools-name">{tool.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
