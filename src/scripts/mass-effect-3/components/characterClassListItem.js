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
      <div className="col-sm-6" onClick={this.selectCharacter}>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{character.name}</h5>
            <p className="card-text">{character.description}</p>
          </div>
        </div>
      </div>
      
    );
  }
}

export default CharacterClassListItem;