import React from "react";

class CharacterClassListItem extends React.Component {
  constructor(props) {
    super(props);
    this.selectCharacter = this.selectCharacter.bind(this);
  }

  selectCharacter(event) {
    var name = event.target.innerText;
    console.log('selecting ' + name);

    this.props.onSelectCharacter(name);
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

export default CharacterClassListItem;