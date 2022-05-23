import React from "react";

const OtherSkills = () => {
  return (
    <div className="otherSkills">
      <h3>Autres compétences</h3>
      <div className="list">
        <ul>
          <li>
            <i className="fas fa-check-square"></i>
            <span>Github</span>
          </li>
          <li>
            <i className="fas fa-check-square"></i>
            <span>GitLab</span>
          </li>
          <li>
            <i className="fas fa-check-square"></i>
            <span>Methodes agiles</span>
          </li>
        </ul>

        <ul>
          <li>
            <i className="fas fa-check-square"></i>
            <span>Jira</span>
          </li>
          <li>
            <i className="fas fa-check-square"></i>
            <span>Android Studio</span>
          </li>
          <li>
            <i className="fas fa-check-square"></i>
            <span>SEO</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OtherSkills;
