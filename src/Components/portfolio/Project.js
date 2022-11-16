import React, { Component } from "react";

class Project extends Component {
  state = {
    showInfo: false,
  };

  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };

  render() {
    let { name, languagesIcons, source, info, picture, lien, video } =
      this.props.item;

    return (
      <div className="project">
        <div className="icons">
          {languagesIcons.map((icon) => (
            <i className={icon} key={icon}></i>
          ))}
        </div>
        <h3> {name} </h3>
        <img src={picture} alt="" onClick={this.handleInfo} />
        <span className="infos" onClick={this.handleInfo}>
          <i className="fas fa-plus-circle"></i>
        </span>

        {this.state.showInfo && (
          <div className="showInfos">
            <div className="infosContent">
              <div className="head">
                <h2> {name}</h2>
                <div className="sourceCode">
                  {source !== "" && (
                    <a
                      href={source}
                      rel="noopener noreferrer"
                      className="button"
                      target="_blank"
                    >
                      Code
                    </a>
                  )}
                </div>
              </div>

              <p className="text">{info} </p>
              {video !== "" && (
                <a
                  href={video}
                  rel="noopener noreferrer"
                  className="button"
                  target="_blank"
                  style={{ "padding-bottom": "10px" }}
                >
                  Vidéo de démonstration
                </a>
              )}
              {lien !== "" && (
                <a
                  href={lien}
                  rel="noopener noreferrer"
                  className="button"
                  style={{ "padding-bottom": "10px" }}
                  target="_blank"
                >
                  Site web
                </a>
              )}
              <div className="button return" onClick={this.handleInfo}>
                Retourner sur la page
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Project;
