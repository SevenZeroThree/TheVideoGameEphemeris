import React from "react";

import CharacterClassList from './characterClassList';

class SinglePlayer extends React.Component {
    constructor(props) {
        super(props);
        this.selectCharacter = this.selectCharacter.bind(this);
        this.state = {selectedCharacter: ''};
    }

    getCharacters() {
        return [
            {
                name: 'Engineer',
                description: 'engineer description'
            },
            {
                name: 'Vanguard',
                description: 'vanguard description'
            },
            {
                name: 'Infiltrator',
                description: 'infiltrator description'
            },
            {
                name: 'Soldier',
                description: 'soldier description'
            }
        ];
    }

    selectCharacter(name) {
        console.log('You have selected: ' + name);
        this.setState({selectedCharacter: name});
    }

    render() {
      return (
        <div>
            <h2>Single Player</h2>
            <CharacterClassList 
                characters={this.getCharacters()}
                onSelectCharacter={this.selectCharacter} />

            <h4>Selected Character</h4>
            <p>{this.state.selectedCharacter}</p>
        </div>
      );
    }
  }

export default SinglePlayer;