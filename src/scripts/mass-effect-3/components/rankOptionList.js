import React from "react";

import RankOptionListItem from './RankOptionListItem';

function RankOptionList(props) {
    const options = props.options;
    const listOfOptions = options.map((option) =>
      <RankOptionListItem 
        key={option} 
        option={option} />
    );

    return (
      <div>{listOfOptions}</div>
    );
  }

export default RankOptionList;