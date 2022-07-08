import React from "react";
import "./footer.css";

const Footer = () => {
  let date = new Date();
  return (
    <footer className="footer">
      @All rights reserved {date.getFullYear()}
      <hr />
    </footer>
  );
};

export default Footer;
