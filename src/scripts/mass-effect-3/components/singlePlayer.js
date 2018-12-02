import React from "react";

import CharacterClassList from './characterClassList';
import CharacterDetails from './characterDetails';

class SinglePlayer extends React.Component {
    constructor(props) {
        super(props);
        this.selectCharacter = this.selectCharacter.bind(this);
        this.reset = this.reset.bind(this);
        this.state = { characters: [], selectedCharacter: '' };
    }

    componentDidMount() {
        const component = this;
        fetch('https://thevideogameapi.azurewebsites.net/v1/mass-effect-3/single-player/')
            .then(function (response) {
                return response.json();
            })
            .then(function(data) {
                component.setState({characters: data.classes});
            });
    }

    selectCharacter(name) {
        console.log('You have selected: ' + name);
        this.setState({selectedCharacter: name});
    }

    reset() {
        this.setState({selectedCharacter: ''});
    }

    render() {
        const isCharacterSelected = this.state.selectedCharacter !== '';
        let character = null;
        if (isCharacterSelected) {
            const selectedCharacter = this.state.selectedCharacter;
            character = this.state.characters.find(function(c) {
                return c.name ===  selectedCharacter.trim();
              })
        }
        return (
            <div>
                <h2>Single Player</h2>
                { isCharacterSelected ? (
                    <CharacterDetails character={character} />
                ) : (
                    <CharacterClassList 
                        characters={this.state.characters}
                        onSelectCharacter={this.selectCharacter} />
                )}

                <button className="btn btn-light" onClick={this.reset}>Reset</button>
            </div>
        );
    }
  }

export default SinglePlayer;