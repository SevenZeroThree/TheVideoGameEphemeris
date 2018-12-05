import React from "react";

import RankList from './rankList';

class AbilityListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const ability = this.props.ability;
    return (
      <div className="row">
        <div className="col-sm-3">
          <h5>{ability.name}</h5>
        </div>
        <div className="col-sm">
          <RankList ranks={ability.ranks} />
        </div>
      </div>
    );
  }
}

export default AbilityListItem;