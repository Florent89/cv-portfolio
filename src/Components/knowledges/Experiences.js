import React from "react";

const Experiences = () => {
  return (
    <div className="experience">
      <h3>Expériences & formations</h3>
      <div className="exp-1">
        <h4>Développeur web junior - Eig Santé</h4>
        <h5>Octobre 2022 - ...</h5>
        <p>
          {" "}
          Editeur de logiciel de gestion - En CDI depuis le 1er octobre, je
          travaille sur un projet de mise en ligne d'une application sur le web.
          Le projet est codé en Angular 13 et en Sass. J'utilise également
          l'outil de versionning GitLab, ainsi que Jira pour le suivi du projet
          et la gestion des tickets.
        </p>
      </div>

      <div className="exp-2">
        <h4>Alternant développeur web - Eig Santé</h4>
        <h5>Septembre 2021 - Septembre 2022</h5>
        <p>
          {" "}
          Editeur de logiciel de gestion - Même expérience que précédemment.
        </p>
      </div>

      <div className="exp-3">
        <h4>
          Formation de concepteur développeur d'application - CEFii Angers
        </h4>
        <h5>Septembre 2021 - Septembre 2022</h5>
        <p>
          Ecole supérieure du web à Angers. Durant mon cursus j'ai notamment
          réalisé une application basée sur Symfony 6, et pour le front, j'ai eu
          recours à Twig et Bootstrap 5. J'ai aussi réalisé deux applications
          mobile en React-Native (voir le portfolio). J'ai aquis des compétences
          transverses telles que la gestion de projet, l'ergonomie web et la
          POO.
        </p>
      </div>

      <div className="exp-4">
        <h4>Formation développeur web - OpenClassrooms</h4>
        <h5>mars 2021 - Septembre 2021</h5>
        <p>
          Compétences développées : l'autonomie, la recherche, les langages SQL
          et javascript, l'utilisation de React, Node js, Express et MongoDB.
        </p>
      </div>
    </div>
  );
};

export default Experiences;
