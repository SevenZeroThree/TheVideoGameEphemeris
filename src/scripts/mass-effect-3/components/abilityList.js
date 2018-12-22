import React from "react";

import AbilityListItem from './AbilityListItem';

function AbilityList(props) {
    const abilities = props.abilities;
    const listOfAbilities = abilities.map((ability) =>
      <AbilityListItem 
        key={ability.name} 
        ability={ability}
        updateRemainingPoints={props.updateRemainingPoints}
        resetSkillPoints={props.resetSkillPoints} />
    );

    return (
      <div>{listOfAbilities}</div>
    );
  }

export default AbilityList;