import React from "react";

import AbilityList from './abilityList';
import toTitleCase from '../../prototypes/stringPrototypes';

class CharacterDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const selectedCharacter = this.props.character;

    return (
      <div>

        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item" aria-current="page"><a href="#" onClick={this.props.onReset}>Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">{selectedCharacter.name.toTitleCase()}</li>
            </ol>
        </nav>

        <h1>{selectedCharacter.name.toTitleCase()}</h1>
        <h3>Abilities</h3>
        <AbilityList abilities={selectedCharacter.abilities} />
      </div>
    );
  }
}

export default CharacterDetails;