import React from "react";

class AbilityListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const ability = this.props.ability;
    return (
      <div>
        <h5>{ability.name}</h5>
      </div>
    );
  }
}

export default AbilityListItem;