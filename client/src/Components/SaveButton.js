import React from "react";
import Button from "@material-ui/core/Button"
import HeartIcon from "@material-ui/icons/Favorite"
import API from "../utils/API";

class SaveButton extends React.Component {

    state={
        user:this.props.user,
        jobInfo:this.props.jobInfo
    }

    saveJob = ()=>{
        API.saveJob(this.state)
    }

  render() {
    return (
      <Button color="primary"
        onClick={this.saveJob}
      >
            <HeartIcon />
        Save
      </Button>

    )
  }
}

export default SaveButton;
