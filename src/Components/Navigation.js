import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="sidebar">
      <div className="id">
        <div className="idContent">
          <img
            src="./media/profil.jpg"
            alt="profil-pic"
            style={{ width: 150 }}
          />
          <h3>Florent Derouet</h3>
        </div>
      </div>
      <div className="navigation">
        <ul>
          <li>
            {" "}
            <NavLink
              exact="true"
              to="/"
              className={(navData) => (navData.isActive ? "navActive" : "none")}
            >
              <i className="fas fa-home"></i>
              <span>Accueil</span>
            </NavLink>
          </li>

          <li>
            {" "}
            <NavLink
              exact="true"
              to="/competences"
              className={(navData) => (navData.isActive ? "navActive" : "none")}
            >
              <i className="fas fa-mountain"></i>
              <span>Compétences</span>
            </NavLink>
          </li>

          <li>
            {" "}
            <NavLink
              exact="true"
              to="/portfolio"
              className={(navData) => (navData.isActive ? "navActive" : "none")}
            >
              <i className="fas fa-images"></i>
              <span>Portfolio</span>
            </NavLink>
          </li>

          <li>
            {" "}
            <NavLink
              exact="true"
              to="/contact"
              className={(navData) => (navData.isActive ? "navActive" : "none")}
            >
              <i className="fas fa-address-book"></i>
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="socialNetwork">
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/florent-derouet-2a4327204"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Florent89/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
        </ul>
        <div className="signature">
          <p>Florent Derouet - 2022</p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
