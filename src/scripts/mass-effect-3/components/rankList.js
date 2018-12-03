import React from "react";

import RankListItem from './RankListItem';

function RankList(props) {
    const ranks = props.ranks;
    const listOfRanks = ranks.map((rank) =>
      <RankListItem 
        key={rank.level} 
        rank={rank} />
    );

    return (
      <div className="row">{listOfRanks}</div>
    );
  }

export default RankList;