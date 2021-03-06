import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import CopyPasteModal from "../Components/CopyPasteModal";
import Resume from "../Components/ResumeCard"
import API from '../utils/API';

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


class MyReusmes extends React.Component{

  state={
    resumes:[]
  }
  
  componentDidMount(){
    this.getResumes();
  }

  getResumes= ()=>{
    API.getResumes(this.props.user)
    .then(resp=>{
      this.setState({resumes: resp.data})
    })
  }

  handleResumeDelete = id => {
    API.deleteResume(id).then(res => this.getResumes());
  };



  render(){
    const { classes } = this.props;
    return(
      <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Your Resumes
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              Use the space below to organize your personalized resumes
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={16} justify="center">
                <Grid item>
                  <Button disabled variant="contained" color="primary">
                    Upload a resume here
                  </Button>
                </Grid>
                <Grid item>
                    <CopyPasteModal user = {this.props.user } reloadResumes={this.getResumes} />
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
        <div className={classNames(classes.layout, classes.cardGrid)}>
          {/* End hero unit */}
          <Grid container spacing={40} >
          {this.state.resumes.length ? 
            (this.state.resumes.map(card => (
              <Grid item key={card} sm={6} md={4}>
                {/* {console.log(card)} */}
                  <Resume 
                    title={card.title} 
                    description={card.description}
                    body={card.body}
                    date={card.date}
                  />
                  
                  
              </Grid>
            ))) : 
            (<Grid item>
              <Typography variant="h4" color="inherit">
                No resumes to be found, upload one above to get started
              </Typography>
            </Grid>)
          
        }
          </Grid>
        </div>
     
      </main>

    </React.Fragment>
    )
  }
}


MyReusmes.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyReusmes);