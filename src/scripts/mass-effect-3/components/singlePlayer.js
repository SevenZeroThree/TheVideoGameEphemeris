import React from "react";

import CharacterClassList from './characterClassList';

class SinglePlayer extends React.Component {
    getCharacters() {
        return [
            {
                name: 'Engineer'
            },
            {
                name: 'Vanguard'
            },
            {
                name: 'Infiltrator'
            },
            {
                name: 'Soldier'
            }
        ];
    }

    render() {
      return (
        <div>
            <h2>Single Player</h2>
            <CharacterClassList characters={this.getCharacters()} />
        </div>
      );
    }
  }

export default SinglePlayer;