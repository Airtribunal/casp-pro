import React from "react";
import "../styles/globals.css";

const notFound = () => {
  return (
    <div className="error-404">
      <div className="container">
        <div className="inner-404">
          <h1>404</h1>
          <span className="divider-404"></span>
          <div className="content-404">
            <h4>
              Похоже, адрес страницы, которую Вы ищете был изменен или не
              существует.
            </h4>
            <a href="/">
              <button>Главная страница</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default notFound;
