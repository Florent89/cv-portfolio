import React from "react";
import Navigation from "../Components/Navigation";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1>Florent Derouet</h1>
          <h2>Concepteur développeur d'application</h2>
          <div className="pdf">
            <a href="public/media/CV.pdf" target="_blank">
              Télécharger le CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
