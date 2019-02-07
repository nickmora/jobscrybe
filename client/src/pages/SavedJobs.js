import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import JobCard from "../Components/JobCard"
import API from "../utils/API"


const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
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
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
});


class SavedJobs extends React.Component {

    state={
        jobs:[]
    }

    getSavedJobs = ()=>{
        // console.log("begin")
        API.getSavedJobs()
          .then(resp=>{
              console.log(resp.data)
            this.setState({jobs:resp.data})
          })
      }

    componentDidMount(){
        // console.log("hellow from mounted")
        this.getSavedJobs();
    }




  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <main>
          {/* Hero unit */}
          <div className={classes.heroUnit}>
            <div className={classes.heroContent}>
              <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Saved Jobs
            </Typography>
              <Typography variant="h6" align="center" color="textSecondary" paragraph>
                Below you can find all the jobs that you've saved
            </Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={16} justify="center">


                </Grid>
              </div>
            </div>
          </div>
          <div className={classNames(classes.layout, classes.cardGrid)}>
            {/* End hero unit */}
            <Grid container spacing={40} >

                {this.state.jobs.length ? 
                    (this.state.jobs.map(card=>(
                        <Grid item xs={12}>
                            <JobCard user ={this.props.user} jobInfo={card}/>
                        </Grid>

                    ))
                    )
                :
                    ( <Typography variant="h4" color="inherit">
                        couldn't find any saved jobs, search and save some above
                    </Typography> ) 
                }

              


            </Grid>
          </div>
        </main>
      </React.Fragment>
    )
  }
}


SavedJobs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SavedJobs);