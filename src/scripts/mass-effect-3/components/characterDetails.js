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

        <h2>{selectedCharacter.name.toTitleCase()}</h2>
        <div className="row">
          <div className="col-sm">
            <h3>Abilities</h3>
            <AbilityList abilities={selectedCharacter.abilities} />
          </div>
        </div>
      </div>
    );
  }
}

export default CharacterDetails;