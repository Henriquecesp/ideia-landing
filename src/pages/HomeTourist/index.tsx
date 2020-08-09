import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { FiSearch } from "react-icons/fi";
import "./styles.css";

const HomeTourist = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={logo} alt="Ideia logo" />
        </header>
        <main>
          <h1>Encontre eventos incríveis perto de você</h1>
          <p>Ajudamos pessoas a encontrarem eventos de forma eficiente.</p>

          <Link to="/app">
            <span>
              <FiSearch />
            </span>
            <strong>Buscar um evento</strong>
          </Link>
          <Link to="/merchant">
            <strong>Quero cadastrar um evento</strong>
          </Link>
        </main>
      </div>
    </div>
  );
};

export default HomeTourist;
