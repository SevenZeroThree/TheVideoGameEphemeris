import React from "react";

import RankOptionList from './rankOptionList';

class RankListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const rank = this.props.rank;
    return (
        <div className="col-sm">
            <RankOptionList options={rank.options} />
        </div>
    );
  }
}

export default RankListItem;