import React, { Component } from "react";
import API from "../utils/API";

class Logout extends Component {
    handleLogout= function(){
        API.logout()
        .then( resp=>{
            if(resp.status===200){
                console.log("success")
                // this.props.history.push("/")
            }
        })
    }

    componentDidMount(){
        this.handleLogout();
    }

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
