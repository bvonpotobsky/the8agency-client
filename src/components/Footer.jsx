import React from "react";

import "@styles/components/Footer.scss";
import Twitter from "@icons/Twitter";
import Facebook from "@icons/Facebook";
import LinkedIn from "@icons/LinkedIn";
import Youtube from "@icons/Youtube";
import Instagram from "@icons/Instagram";
import Snapchat from "@icons/Snapchat";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer__container">
        <p>© 2021</p>

        <div className="socialMedia">
          <Twitter />
          <Facebook />
          <LinkedIn />
          <Youtube />
          <Instagram />
          <Snapchat />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
