import React from "react";
import Button from "@material-ui/core/Button"
import UnsaveIcon from "@material-ui/icons/NotInterested"


class SaveButton extends React.Component {

    state={
        user:this.props.user,
        jobInfo:this.props.jobInfo
    }


  render() {
    return (
      <Button color="primary"
        onClick={this.saveJob}
      >
            <UnsaveIcon />
        Remove
      </Button>

    )
  }
}

export default SaveButton;
