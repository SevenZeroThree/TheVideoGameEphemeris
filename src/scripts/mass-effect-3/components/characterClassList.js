import React from "react";

import CharacterClassListItem from './characterClassListItem';

function CharacterClassList(props) {
    const characters = props.characters;
    const listOfCharacters = characters.map((character) =>
      <CharacterClassListItem character={character} />
    );

    return (
      <div>{listOfCharacters}</div>
    );
  }

export default CharacterClassList;