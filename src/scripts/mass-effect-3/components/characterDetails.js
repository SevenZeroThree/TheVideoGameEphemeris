import React from "react";

import AbilityList from './abilityList';

class CharacterDetails extends React.Component {
  constructor(props) {
    super(props);

    this.updatePoints = this.updatePoints.bind(this);
    this.state = { remainingPoints: 0 };
  }

  componentDidMount() {
    this.setState({ remainingPoints: this.props.character.maximumPoints });
  }

  updatePoints(updateValue) {
    var newPoints = this.state.remainingPoints + updateValue;

    this.setState({ remainingPoints: newPoints });
  }

  render() {
    const selectedCharacter = this.props.character;

    return (
      <div>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item" aria-current="page"><a href="#" onClick={this.props.onReset}>Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">{selectedCharacter.name}</li>
            </ol>
        </nav>

        <h2>{selectedCharacter.name}</h2>
        <div className="row">
          <div className="col-sm">
            <h3>Abilities</h3>
          </div>
          <div className="col-sm">
            <p>{this.state.remainingPoints}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <AbilityList 
              abilities={selectedCharacter.abilities}
              updateRemainingPoints={this.updatePoints} />
          </div>
        </div>
      </div>
    );
  }
}

export default CharacterDetails;