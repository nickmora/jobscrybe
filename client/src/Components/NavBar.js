
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import NavTabs from './NavTabs';

const styles = {
  root: {
    flexGrow: 1,
  },
};

class SimpleAppBar extends React.Component{
  componentDidMount(){
    // console.log(this.state)
  }
  render(){
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
              <NavTabs logoutHandler={this.props.logoutHandler} user = {this.props.user } />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}



SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);

// import React from "react";
// import PropTypes, {func} from "prop-types";
// import AppBar from "@material-ui/core/AppBar"
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from "@material-ui/core/Typography"
// import Grid from "@material-ui/core/Grid";
// import {Link} from "react-router-dom";
// import { withStyles } from "@material-ui/core";
// import { from } from "rxjs";
// import NavTabs from "./NavTabs"


// const styles = {
//     root: {
//       flexGrow: 1,
//     },
//     grow: {
//       flexGrow: 1,
//     },
//     menuButton: {
//       marginLeft: -12,
//       marginRight: 20,
//     },
//   };

// class NavBar extends React.Component{
//     render(){
//         const {classes}=this.props;
//         return(
//             <div>
//                 <AppBar position="static">
//                     <Toolbar>
//                         <Grid container spacing={24}>
//                             {/* <NavTabs />
//                             <Grid item xs={1}>
//                                 <img src = {logo} alt="home/logo" />
//                             </Grid> 
                            
//                             <Grid item xs={2}>
//                                 <Typography variant="h5" color="inherit">
//                                     Search
//                                 </Typography>
//                             </Grid>
//                             <Grid item xs={2}>
//                                 <Typography variant="h5" color="inherit">
//                                     My Resumes
//                                 </Typography>
//                             </Grid>
//                             <Grid item xs={2}>
//                                 <Typography variant="h5" color="inherit">
//                                     Saved Jobs
//                                 </Typography>
//                             </Grid>
//                             <Grid item xs={2}>
//                                 <Typography variant="h5" color="inherit">
//                                     My Profile
//                                 </Typography>
//                             </Grid>
//                             <Grid item xs={2}>
//                                 <Typography variant="h5" color="inherit">
//                                     Logout
//                                 </Typography>
//                             </Grid> */}
//                         </Grid>
//                     </Toolbar>
//                 </AppBar>
//             </div>
//         )
//     }
// }

// // NavBar.propTypes = {
// //     classes: PropTypes.object.isRequired,
// // }

// export default (NavBar);