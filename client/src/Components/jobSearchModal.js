import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
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
        <Typography gutterBottom>Software Developer
Vortx, Inc. - Ashland, OR
$80,000 - $100,000 a year</Typography>
        <Button onClick={this.handleOpen}>Show me the Job!</Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="h6" id="modal-title">
              Sr. Software Developer
Vortx, Inc. - Ashland, OR
$80,000 - $100,000 a year
            </Typography>
            <Typography variant="subtitle1" id="simple-modal-description">
              Compensation

The Vortx culture is one where motivated, customer-oriented team-players can thrive and quickly grow to reach their highest potential. Vortx offers a generous compensation and benefits package including medical and vision care coverage, a 401(k) plan, and 23 days paid time off.

To learn more about Vortx, please visit our website atvortx.comandaspdotnetstorefront.com.

Job Type: Full-time

Salary: $80,000.00 to $100,000.00 /year

Experience:

Software Development: 2 years (Preferred)
Location:

Ashland, OR (Required)
12 days ago
<Button onClick={this.handleClose}>Hide this</Button>
            </Typography>
            
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
