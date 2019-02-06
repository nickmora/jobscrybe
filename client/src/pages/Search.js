import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core";
import SearchForm from "../Components/SearchForm";


const styles = theme =>({
      heroContent: {
        maxWidth: 600,
        margin: '0 auto',
        padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
          width: 1100,
          marginLeft: 'auto',
          marginRight: 'auto',
        },
      },
})

class Search extends React.Component{
    
    render(){
        const {classes} = this.props
        return(
            <Fragment>
            <Grid container spacing={24}>
                <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Search
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              Use the space below to organize your personalized resumes
            </Typography>
          </div>
        </div>

                <Grid item xs={12}>
                    <SearchForm />
                </Grid>

            </Grid>
            </Fragment>
        )
    }
}

export default withStyles(styles)(Search);