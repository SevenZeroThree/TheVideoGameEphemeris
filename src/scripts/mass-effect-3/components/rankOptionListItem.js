import React from "react";

class RankOptionListItem extends React.Component {
  constructor(props) {
    super(props);

    this.toggleSelection = this.toggleSelection.bind(this);
    this.state = { isSelected: false };
  }

  toggleSelection() {
    var newValue = !this.state.isSelected;
    this.setState({isSelected: newValue});

    // If the option is being selected, we need to remove 1 point from the remaining points
    // if the option is being deselected, we need to add 1 point to the remaining points
    var valueToUpdate = newValue
      ? -1
      : 1;
    this.props.updateRemainingPoints(valueToUpdate);
  }

  render() {
    const buttonStyle = this.state.isSelected
      ? "btn btn-primary"
      : "btn btn-outline-primary";
    const option = this.props.option;
    return (
        <button onClick={this.toggleSelection} className={buttonStyle}>{option}</button>
    );
  }
}

export default RankOptionListItem;