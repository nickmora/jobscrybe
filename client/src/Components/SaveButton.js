import React from "react";
import Button from "@material-ui/core/Button"
import HeartIcon from "@material-ui/icons/Favorite"

class SaveButton extends React.Component {

  render() {
    return (
      <Button color="primary">
        <span>
            <HeartIcon />
        </span>
        Save
      </Button>

    )
  }
}

export default SaveButton;
