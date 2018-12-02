import React from "react";

import CharacterClassList from './characterClassList';

class SinglePlayer extends React.Component {
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