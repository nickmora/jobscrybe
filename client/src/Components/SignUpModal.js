import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Grid from "@material-ui/core/Grid"
import API from "../utils/API"

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 75,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
});

class SignUpModal extends React.Component {
  state = {
    open: false,
    email:"",
    password:""

  };


  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event=>{
    event.preventDefault();
    console.log(this.state.email, this.state.password)
    if(!this.state.email||!this.state.password){
      alert("Fields are incomplete, please enter your name and password");
    } else{
      API.signUp({
        email:this.state.email, 
        password:this.state.password
      })
      .then(resp=>{
        console.log(resp)
        if(resp.status===200){
          this.props.history.push("/")
        }
        // window.location.href = "/main" 
      })

      .catch(err=>console.log(err));
      this.setState({
        email:"",
        password:"",
      })
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Button
          variant="outlined"
          color="primary"
          onClick={this.handleOpen}>here</Button>
        <Modal
          aria-labelledby="email"
          aria-describedby="modal-body"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Grid container spacing={8} alignItems="flex-end" >
              <Grid item sm={12}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="email">Email</InputLabel>
                  <Input fullWidth value={this.state.email} onChange = { this.handleInputChange } id="email" name="email" />
                </FormControl>
              </Grid>
              <Grid item sm={12}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <Input fullWidth value={this.state.password} onChange = { this.handleInputChange } id="password" name="password" type="password" />
                </FormControl>
              </Grid>


              <Grid item md={12}>
                <Button
                  variant="outlined"
                  color="primary"
                  fullWidth
                  onClick = { this.handleSubmit }
                >
                  Sign Up
                </Button>
              </Grid>
            </Grid>
          </div>
        </Modal>
      </div>
    );
  }
}

SignUpModal.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(SignUpModal);