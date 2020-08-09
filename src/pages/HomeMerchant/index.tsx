import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { FiLogIn } from "react-icons/fi";
import "./styles.css";

const HomeMerchant = () => {
  return (
    <div id="page-home2">
      <div className="content">
        <header>
          <img src={logo} alt="Ideia logo" />
        </header>
        <main>
          <h1>Inove na hora de divulgar o seu evento</h1>
          <p>Ajudamos pessoas a encontrarem eventos de forma eficiente.</p>

          <Link to="/app">
            <span>
              <FiLogIn />
            </span>
            <strong>Cadastre um evento</strong>
          </Link>
          <Link to="/">
            <strong>Buscar um evento</strong>
          </Link>
        </main>
      </div>
    </div>
  );
};

export default HomeMerchant;
