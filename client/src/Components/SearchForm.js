import React, { Fragment } from "react"
import { withStyles, InputLabel } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FormControl from "@material-ui/core/FormControl"
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import API from "../utils/API"

const styles = theme =>({
    paper: {
        marginTop: theme.spacing.unit * 8,
    }
})


class SearchForm extends React.Component{
    state={
        search:"",
        location:""
    }
    handleChange = event => {
        // Getting the value and name of the input which triggered the change
        console.log(event.target.name)
        let value = event.target.value;
        const name = event.target.name;
    
        if (name === "password") {
          value = value.substring(0, 15);
        }
        // Updating the input's state
        this.setState({
          [name]: value
        });
      };

    handleSubmit = event=>{
        event.preventDefault();
        if (!this.state.search){
            alert("You gotta enter some keywords, hoss");
        } else{
            API.getJobs({
                search: this.state.search,
                location: this.state.location
            })
            .then(resp=>{
                console.log(resp)
            })
        }
    }

    render() {
        const { classes } = this.props;
        
        return (
            <Fragment>
                <Grid container spacing={8} justify="flex-end">
                    <Grid item xs={8}>
                        <FormControl fullWidth margin="normal">
                            <InputLabel htmlFor="search">Keywords</InputLabel>
                            <Input value={this.state.search} onChange={this.handleChange} id="search" name="search" autoFocus />
                        </FormControl>
                    </Grid>
                    <Grid item xs={4}>
                        <FormControl fullWidth margin="normal">
                            <InputLabel htmlFor="location"> Location (optional)</InputLabel>
                            <Input value={this.state.location} onChange={this.handleChange} id="location" name="location"/>
                        </FormControl>
                    </Grid>
                    
                    <Grid item xs={3}>
                        <Button
                            onClick={this.handleSubmit}
                            type="submit"
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Get Searchin!
                        </Button>
                    </Grid>
                </Grid>
            </Fragment>
        )
    }
}

SearchForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchForm)