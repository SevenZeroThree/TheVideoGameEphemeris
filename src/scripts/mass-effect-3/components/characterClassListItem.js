import React from "react";

import toTitleCase from '../../prototypes/stringPrototypes';

class CharacterClassListItem extends React.Component {
  constructor(props) {
    super(props);
    this.selectCharacter = this.selectCharacter.bind(this);
  }

  selectCharacter(event) {
    var name = event.target.innerText;
    this.props.onSelectCharacter(name.toLowerCase());
  }

  render() {
    const character = this.props.character;
    return (
      <div className="col-sm-6" onClick={this.selectCharacter}>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{character.name.toTitleCase()}</h5>
            <p className="card-text">{character.description}</p>
          </div>
        </div>
      </div>
      
    );
  }
}

export default CharacterClassListItem;