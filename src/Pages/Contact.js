import React from "react";
import Navigation from "../Components/Navigation";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Contact = () => {
  return (
    <div className="contact">
      <Navigation />
      <div className="contactContent">
        <div className="header"></div>
        <div className="contactBox">
          <h1>Contactez-moi</h1>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>Angers</span>
            </li>

            <li>
              <i className="fas fa-mobile-alt"></i>
              <CopyToClipboard text="0659004170">
                <span
                  className="clickInput"
                  onClick={() => {
                    alert("Numéro de Téléphone copié !");
                  }}
                >
                  06 59 00 41 70
                </span>
              </CopyToClipboard>
            </li>

            <li>
              <i className="fas fa-envelope"></i>
              <CopyToClipboard text="florentderouet89@gmail.com">
                <span
                  className="clickInput"
                  onClick={() => {
                    alert("Email copié !");
                  }}
                >
                  florentderouet89@gmail.com
                </span>
              </CopyToClipboard>
            </li>
          </ul>
        </div>
        <div className="socialNetwork">
          <ul>
            <a
              href="https://www.linkedin.com/in/florent-derouet-2a4327204"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>Linkedin</h4>
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/Florent89/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>Github</h4>
              <i className="fab fa-github"></i>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
