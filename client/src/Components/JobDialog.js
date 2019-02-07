import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';
import SaveButton from "./SaveButton"
import API from '../utils/API';
import ResumeMenu from './ResumeMenu';
import { Grid } from '@material-ui/core';


class MaxWidthDialog extends React.Component {
  state = {
    open: false,
    user: this.props.user
  };

  grabResume = (value) =>{
    this.setState({resume:value})
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };





  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          View Posting
        </Button>
        <Dialog
          fullWidth="true"
          maxWidth="xl"
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="max-width-dialog-title"
        >
          <DialogTitle id="max-width-dialog-title">
            {this.props.jobInfo.title}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
            <div className="content" dangerouslySetInnerHTML={{__html: this.props.jobInfo.description}}></div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Grid container spacing={8}>
              <Grid item sm={8}>
                <ResumeMenu user={this.props.user} jobInfo={this.props.jobInfo} grabResume={this.grabResume} />
              </Grid>

              <Grid item sm={2}>
                <SaveButton user = {this.props.user} jobInfo = {this.props.jobInfo} />
              </Grid>
              <Grid item sm={2}>
                <Button onClick={this.handleClose} color="primary">
                  Close
                </Button>
              </Grid>
            </Grid>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}

MaxWidthDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default (MaxWidthDialog);
