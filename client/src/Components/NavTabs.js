import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import NoSsr from '@material-ui/core/NoSsr';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import SearchPage from "../pages/Search"
import {Link} from 'react-router-dom';
import ResumesPage from "../pages/MyResumes"
import NavBar from "./NavBar"
import Logout from '../pages/Logout';
import SavedJobs from "../pages/SavedJobs"

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

function LinkTab(props) {
  return <Tab component="a" onClick={event => event.preventDefault()  } {...props} />;
}

const styles = theme => ({
  root: {
    flexGrow: 1,
  }
});

class NavTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (

        <div className={classes}>
            <Tabs variant="fullWidth" value={value} onChange={this.handleChange}>
              <LinkTab label="Search" href="../pages/Search" />
              <LinkTab label="My Resumes" href="../pages/MyResumes" />
              <LinkTab label="Saved Jobs" href="../SavedJobs" />
              <LinkTab label="Edit Profile" href="page4" />
              <LinkTab label="Logout" href="Logout" />
            </Tabs>
          {value === 0 && <TabContainer> <SearchPage /></TabContainer>}
          {value === 1 && <TabContainer> <ResumesPage user = {this.props.user} /></TabContainer>}
          {value === 2 && <TabContainer> <SavedJobs user ={this.props.user} /> </TabContainer>}
          {value === 3 && <TabContainer>Edit Profile</TabContainer>}
          {value === 4 && <TabContainer><Logout logoutHandler={this.props.logoutHandler} /></TabContainer>}
        </div>
    );
  }
}

// NavTabs.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default (NavTabs);