import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import NavBar from './Components/NavBar';
import SignIn from './pages/SignIn';
import NoMatch from "./pages/NoMatch"
import MainPage from "./pages/MainPage"


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* <NavBar /> */}
          <Switch>
            <Route exact path="/" component={SignIn} />
            <Route exact path="/main" component={MainPage} />
            <Route component = {NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
