import React from "react";

class CharacterDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const character = this.props.character;
    return (
      <div>
        <h5 onClick={this.selectCharacter}>{character.name}</h5>
        <p>{character.description}</p>
      </div>
    );
  }
}

export default CharacterDetails;