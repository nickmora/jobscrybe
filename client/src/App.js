import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import NavBar from './Components/NavBar';
import SignIn from './pages/SignIn';
import NoMatch from "./pages/NoMatch"
import MainPage from "./pages/MainPage"
import SignUp from "./pages/SignUp"
import Search from "./pages/Search"
import MyResumes from "./pages/MyResumes"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={SignIn} />
            <Route exact path="/SignUp" component={SignUp} />
            <Route exact path="/main" component={MainPage} />
            <Route exact path="/Search" component={Search} />
            <Route exact path="/MyResumes" component={MyResumes} />
            <Route component = {NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
