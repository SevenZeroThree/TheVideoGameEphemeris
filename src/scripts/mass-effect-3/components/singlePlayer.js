import React from "react";

import CharacterClassList from './characterClassList';
import CharacterDetails from './characterDetails';

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
        const isCharacterSelected = this.state.selectedCharacter !== '';
        let character = null;
        if (isCharacterSelected) {
            const selectedCharacter = this.state.selectedCharacter;
            character = this.getCharacters().find(function(c) {
                return c.name ===  selectedCharacter;
              })
        }
        return (
            <div>
                <h2>Single Player</h2>
                { isCharacterSelected ? (
                    <CharacterDetails character={character} />
                ) : (
                    <CharacterClassList 
                        characters={this.getCharacters()}
                        onSelectCharacter={this.selectCharacter} />
                )}
            </div>
        );
    }
  }

export default SinglePlayer;