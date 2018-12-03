import React from "react";

import CharacterClassList from './characterClassList';
import CharacterDetails from './characterDetails';

class SinglePlayer extends React.Component {
    constructor(props) {
        super(props);
        this.selectCharacter = this.selectCharacter.bind(this);
        this.reset = this.reset.bind(this);
        this.state = { characters: [], selectedCharacter: {} };
    }

    componentDidMount() {
        const component = this;
        fetch('https://thevideogameapi.azurewebsites.net/v1/mass-effect-3/single-player/characters')
            .then(function (response) {
                return response.json();
            })
            .then(function(data) {
                component.setState({characters: data});
            });
    }

    selectCharacter(characterId) {
        var character = this.state.characters.find(function(c) {
            return c.id ===  characterId.trim();
            });

        const component = this;
        fetch('https://thevideogameapi.azurewebsites.net/v1/mass-effect-3/single-player/characters/' +character.id)
            .then(function (response) {
                return response.json();
            })
            .then(function(data) {
                component.setState({selectedCharacter: data});
            });
    }

    reset() {
        this.setState({selectedCharacter: {} });
    }

    render() {
        const selectedCharacter = this.state.selectedCharacter;
        const isCharacterSelected = selectedCharacter.id !== undefined && this.selectCharacter.id !== null;
        return (
            <div className="row">
                <div className="col-sm">
                    <h2>Single Player</h2>

                    { isCharacterSelected ? (
                        <CharacterDetails 
                            character={this.state.selectedCharacter}
                            onReset={this.reset} />
                    ) : (
                        <CharacterClassList 
                            characters={this.state.characters}
                            onSelectCharacter={this.selectCharacter} />
                    )}

                    <button className="btn btn-light" onClick={this.reset}>Reset</button>
                </div>
            </div>
        );
    }
  }

export default SinglePlayer;