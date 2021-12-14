import React from "react";

import "@styles/components/Header.scss";

const Header = () => {
  return (
    <header className="Header">
      <a href="#">Webinar</a>

      <h1 className="Header__title">
        El reto de humanizar el CX financiero en 2021
      </h1>
      <h3 className="Header__subtitle">
        La experiencia de un Unicornio de Latam
      </h3>

      <p>Miércoles 16 de Diciembre | 17 hs (Horario de Quito)</p>
    </header>
  );
};

export default Header;
