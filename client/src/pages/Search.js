import React, { Fragment } from "react";
import NavBar from "../Components/NavBar";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core";
import SearchForm from "../Components/SearchForm";


const styles = theme =>({
    // paper: {
    //     marginTop: theme.spacing.unit * 8,
    // },
    Jumbo:{
        marginTop: 20,
        padding: 50
    }
})

class Search extends React.Component{

    render(){
        return(
            <Fragment>

            {/* <NavBar /> */}
            <Grid container spacing={24} >
                <Grid item xs={12}>
                    <Paper className={"Jumbo"}>
                        S E A R C H
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <SearchForm />
                </Grid>

            </Grid>
            </Fragment>
        )
    }
}

export default withStyles(styles)(Search);