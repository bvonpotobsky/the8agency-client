import React from "react";

import Form from "@components/Form";
import Info from "@components/Info";

import "@styles/layouts/Hero.scss";

const Hero = () => {
  return (
    <div className="Hero">
      <main>
        <Info />
      </main>

      <aside className="Aside">
        <Form />
      </aside>
    </div>
  );
};

export default Hero;
