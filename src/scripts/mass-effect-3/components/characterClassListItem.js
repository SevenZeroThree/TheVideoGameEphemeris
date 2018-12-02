import React from "react";

class CharacterClassListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const character = this.props.character;
    return (
      <div>
        <h5>{character.name}</h5>
        <p>{character.description}</p>
      </div>
    );
  }
}

export default CharacterClassListItem;