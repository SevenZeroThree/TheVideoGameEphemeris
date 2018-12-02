import React from "react";

function CharacterClass(props) {
    var character = props.character;
    return (
      <div>
        <h5>{character.name}</h5>
        <p>{character.description}</p>
      </div>
    );
  }

export default CharacterClass;