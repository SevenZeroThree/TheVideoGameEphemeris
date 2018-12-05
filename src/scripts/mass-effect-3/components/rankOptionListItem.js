import React from "react";

class RankOptionListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const option = this.props.option;
    return (
        <p>{option}</p>
    );
  }
}

export default RankOptionListItem;