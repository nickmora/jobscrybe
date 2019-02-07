import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

function getModalStyle() {

  return {
    width: "max",
    top: "50%",
    left: "50%",

    // transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',

  },
});

class jobSearchModal extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Button onClick={this.handleOpen}>Show me the Job!</Button>
        <Modal style={{overflow: 'scroll', maxHeight:350, width: 500}}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div className={classes.paper}>
            <Typography variant="h6" id="modal-title">
              {this.props.jobInfo.title}
            </Typography>
            <Typography variant="subtitle1" id="simple-modal-description">
              {this.props.jobInfo.description}
            </Typography>
<Button onClick={this.handleClose}>Hide this</Button>
            
          </div>
        </Modal>
      </div>
    );
  }
}

jobSearchModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.


export default withStyles(styles)(jobSearchModal);
