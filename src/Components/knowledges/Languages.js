import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "Javascript", xp: 1.7 },
      { id: 2, value: "Node JS", xp: 1.1 },
      { id: 3, value: "Css", xp: 1.5 },
      { id: 4, value: "Php", xp: 0.5 },
      { id: 5, value: "SQL", xp: 0.8 },
    ],
    frameworks: [
      { id: 1, value: "React", xp: 1 },
      { id: 2, value: "Angular", xp: 1.5 },
      { id: 3, value: "Sass", xp: 1.2 },
      { id: 4, value: "Bootstrap", xp: 0.6 },
      { id: 5, value: "Symfony", xp: 0.4 },
      { id: 6, value: "React-Native", xp: 0.6 },
    ],
  };

  render() {
    let { languages, frameworks } = this.state;
    return (
      <div className="languagesFrameworks">
        <ProgressBar
          languages={languages}
          className="languagesDisplay"
          title="langages"
        />
        <ProgressBar
          languages={frameworks}
          className="frameworksDisplay"
          title="frameworks & bibliothèques"
        />
      </div>
    );
  }
}

export default Languages;
