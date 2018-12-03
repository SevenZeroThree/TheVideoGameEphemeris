import React from "react";

class RankListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const rank = this.props.rank;
    return (
        <div className="col-sm">
            <h5>{rank.level} - {rank.value}</h5>
        </div>
    );
  }
}

export default RankListItem;