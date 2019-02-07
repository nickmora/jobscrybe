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
    resumes: [],
  };

  
  getResumes = (user)=>{
    API.getResumes(user).then(resp=>{
      this.setState({resumes:resp.data})
      console.log(this.state.resumes)
    })
  }

  componentDidMount(){
    this.getResumes(this.props.user)
  }
  
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.root} autoComplete="off">
        <FormControl fullWidth className={classes.formControl}>
          <InputLabel htmlFor="age-simple">Resume</InputLabel>
          <Select
            value={this.state.resumes}
            onChange={this.handleChange}
            inputProps={{
              name: 'age',
              id: 'age-simple',
            }}
          >
            {this.state.resumes.map(item=>(
              <MenuItem value={item.title}>
                {item.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </form>
    );
  }
}


export default withStyles(styles)(SimpleSelect);
