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
      <div>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item active" aria-current="page">Home</li>
            </ol>
        </nav>

        {listOfCharacters}
      </div>
    );
  }

export default CharacterClassList;