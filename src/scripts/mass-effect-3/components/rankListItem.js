import React from "react";

import RankOptionList from './rankOptionList';

class RankListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const rank = this.props.rank;
    return (
        <div className="col-sm-2">
            <RankOptionList 
              options={rank.options}
              updateRemainingPoints={this.props.updateRemainingPoints}
              resetSkillPoints={this.props.resetSkillPoints} />
        </div>
    );
  }
}

export default RankListItem;