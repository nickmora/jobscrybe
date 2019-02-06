import React, { Component } from "react";
import API from "../utils/API";

class Logout extends Component {
    handleLogout= function(){
        API.logout()
        .then(
            console.log("here we are in logout")
        )
    }

    // ComponentDidMount()

    render(){
        return (
            <div>
              <h1>Thank you for your patronage</h1>
              <h1>
                  <span role="img" aria-label="Face With Rolling Eyes Emoji">
                      🐔
                  </span>
              </h1>
            </div>
               
        );
    }
}


export default Logout;
