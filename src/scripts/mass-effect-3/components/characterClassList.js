import React from "react";

import CharacterClass from './characterClass';

function CharacterClassList(props) {
    const characters = props.characters;
    const listOfCharacters = characters.map((character) =>
      <CharacterClass character={character} />
    );

    return (
      <div>{listOfCharacters}</div>
    );
  }

export default CharacterClassList;