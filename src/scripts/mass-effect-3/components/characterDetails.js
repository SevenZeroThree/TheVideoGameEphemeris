import React from "react";

import AbilityList from './abilityList';

class CharacterDetails extends React.Component {
  constructor(props) {
    super(props);

    this.updatePoints = this.updatePoints.bind(this);
    this.resetSkillPoints = this.resetSkillPoints.bind(this);
    this.state = { remainingPoints: 0, resetSkillPoints: false };
  }

  componentDidMount() {
    this.setState({ remainingPoints: this.props.character.maximumPoints });
  }

  updatePoints(updateValue) {
    var newPoints = this.state.remainingPoints + updateValue;

    this.setState({ remainingPoints: newPoints });
  }

  resetSkillPoints() {
    this.setState({ resetSkillPoints: true, remainingPoints: this.props.character.maximumPoints });
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
            {/* <ResetSkillPointsButton onResetSkills={this.resetSkillPoints} /> */}
            <button className="btn btn-secondary" onClick={this.resetSkillPoints}>Reset</button>
          </div>
          <div className="col-sm">
            <p>{this.state.remainingPoints}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <AbilityList 
              abilities={selectedCharacter.abilities}
              updateRemainingPoints={this.updatePoints}
              resetSkillPoints={this.state.resetSkillPoints} />
          </div>
        </div>
      </div>
    );
  }
}

export default CharacterDetails;