import React from "react";

const Hobbies = () => {
  return (
    <div className="hobbies">
      <h3>Intérêts</h3>
      <ul>
        <li className="hobby">
          <i className="fas fa-leaf"></i>
          <span>Green IT</span>
        </li>

        <li className="hobby">
          <i className="fas fa-running"></i>
          <span>La course à pied</span>
        </li>

        <li className="hobby">
          <i class="fas fa-atom"></i>
          <span>L'astronomie</span>
        </li>

        <li className="hobby">
          <i className="fas fa-dragon"></i>
          <span>Les Pokemons</span>
        </li>
      </ul>
    </div>
  );
};

export default Hobbies;
