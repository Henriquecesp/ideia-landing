import React from "react";
import logo from "../../assets/logo.svg";
import iconsStore from "../../assets/icons-store.svg";
import "./styles.css";
import { Link } from "react-router-dom";

const DownloadApp = () => {
  return (
    <div id="page-app">
      <div className="content">
        <header>
          <Link to="/">
            <img src={logo} alt="Ideia logo" />
          </Link>
        </header>
        <main>
          <h1>Baixe nosso app e encontre-se</h1>
          <p>
            Reunimos todos os eventos e acontecimentos do dia, facilitando o
            acesso e a conexão entre você e o que a cidade tem a oferecer!
          </p>
          <br />
          <p>Em breve</p>
          <img src={iconsStore} alt="Store Icons" />
        </main>
      </div>
    </div>
  );
};

export default DownloadApp;
