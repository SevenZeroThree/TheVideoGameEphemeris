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
    if (this.state.resetSkillPoints) {
      // When we are resetting the skill points, the option is not selected
    }
    const buttonStyle = this.state.isSelected
      ? "btn btn-sm btn-primary"
      : "btn btn-sm btn-outline-primary";
    const option = this.props.option;
    return (
        <button onClick={this.toggleSelection} className={buttonStyle}>{option}</button>
    );
  }
}

export default RankOptionListItem;