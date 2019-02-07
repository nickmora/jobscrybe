import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import API from '../utils/API';
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class SimpleSelect extends React.Component {
  state = {
    selected:{},
    resumes: [],
  };

  
  calculateAlgo = (obj) =>{
    API.calculateAlgo(obj).then(resp=>{
      console.log(resp)

      //this is where the algorithm will return its calculations
    })
  }

  handleSubmit = event=>{
    event.preventDefault();
    console.log(this.state.selected)
    if(!this.state.selected){
      alert("You gotta select a resume, hoss");
    }
    else this.calculateAlgo(this.state)
  }


  
  getResumes = (user)=>{
    API.getResumes(user).then(resp=>{
      this.setState({resumes:resp.data})
    })
  }

  componentDidMount(){
    this.getResumes(this.props.user)
  }
  
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    this.setState({hold: event.target.value})
    console.log(this.state.hold)
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.root} autoComplete="off">

      <Grid container>


        <Grid item sm={9}>

        <FormControl fullWidth className={classes.formControl}>
          <InputLabel htmlFor="selected">Resume</InputLabel>
          <Select
            value={this.state.selected}
            onChange={this.handleChange}
            inputProps={{
              name: 'selected',
              id: 'resume',
            }}
            >
            {this.state.resumes.map(item=>(
              <MenuItem value={item}>
                {item.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        </Grid>
        <Grid item sm={2}>
                <Button onClick={this.calculateAlgo} color="primary">
                  Jobify!
                </Button>
        </Grid>

      </Grid>
      </form>
    );
  }
}


export default withStyles(styles)(SimpleSelect);
