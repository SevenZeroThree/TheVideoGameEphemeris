import React from "react";

import AbilityList from './abilityList';

class CharacterDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const selectedCharacter = this.props.character;

    return (
      <div>
        <h1>{selectedCharacter.name}</h1>
        <h3>Abilities</h3>
        <AbilityList abilities={selectedCharacter.abilities} />
      </div>
    );
  }
}

export default CharacterDetails;