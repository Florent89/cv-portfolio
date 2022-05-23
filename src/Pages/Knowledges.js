import React from "react";
import Experiences from "../Components/knowledges/Experiences";
import Hobbies from "../Components/knowledges/Hobbies";
import Languages from "../Components/knowledges/Languages";
import OtherSkills from "../Components/knowledges/OtherSkills";
import Navigation from "../Components/Navigation";

const Knowledges = () => {
  return (
    <div className="knowledges">
      <Navigation />
      <div className="knowledgesContent">
        <Languages />
        <Experiences />
        <OtherSkills />
        <Hobbies />
      </div>
    </div>
  );
};

export default Knowledges;
