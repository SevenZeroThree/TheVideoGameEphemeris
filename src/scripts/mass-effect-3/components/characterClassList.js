import React from "react";

import CharacterClassListItem from './characterClassListItem';

function CharacterClassList(props) {
    const characters = props.characters;
    const listOfCharacters = characters.map((character) =>
      <CharacterClassListItem 
        key={character.name} 
        character={character} 
        onSelectCharacter={props.onSelectCharacter} />
    );

    return (
      <div className="row">{listOfCharacters}</div>
    );
  }

export default CharacterClassList;