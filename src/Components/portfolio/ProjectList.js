import React, { Component } from "react";
import { portfolioData } from "../../data/portfolioData";
import Project from "./Project";

export default class ProjectList extends Component {
  constructor(props) {
    super();
    this.state = {
      projects: portfolioData,
      radios: [
        { id: 1, value: "javascript", icon: "fab fa-js" },
        { id: 2, value: "Node JS", icon: "fab fa-node-js" },
        { id: 3, value: "React", icon: "fab fa-react" },
        { id: 4, value: "Symfony", icon: "fab fa-symfony" },
        { id: 5, value: "react-native", icon: "fab fa-android" },
      ],
      selectedRadio: "javascript",
      width: window.innerWidth,
    };
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }
  updateDimensions = () => {
    this.setState({ width: window.innerWidth });
  };

  handleRadio = (event) => {
    let radio = event.target.value;
    this.setState({
      selectedRadio: radio,
    });
  };

  render() {
    let { projects, radios, selectedRadio, width } = this.state;
    return (
      <div className="portfolioContent">
        <ul className="radioDisplay">
          {radios.map((radio) => {
            return (
              <li key={radio.id}>
                <input
                  type="radio"
                  name="radio"
                  defaultChecked={radio.value === selectedRadio}
                  value={radio.value}
                  id={radio.value}
                  onChange={this.handleRadio}
                />
                <label htmlFor={radio.value}>
                  {width > 520 ? (
                    <span className="radioDisplayLabel">{radio.value} </span>
                  ) : (
                    <span className="radioDisplayIcon">
                      <i className={radio.icon}></i>
                    </span>
                  )}
                  {}
                </label>
              </li>
            );
          })}
        </ul>
        <div className="projects">
          {projects
            .filter((item) => item.languages.includes(selectedRadio))
            .map((item) => {
              return <Project key={item.id} item={item} />;
            })}
        </div>
      </div>
    );
  }
}
