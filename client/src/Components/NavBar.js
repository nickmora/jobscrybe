import React from "react";
import AppBar from "@material-ui/core/AppBar"
import Toolbar from '@material-ui/core/Toolbar';
import logo from "../logo.svg"
import Typography from "@material-ui/core/Typography"

class NavBar extends React.Component{
    render(){
        return(
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <img src = {logo} alt="home/logo" />
                        <Typography variant="h4" color="inherit">
                            Home
                        </Typography>
                        <Typography variant="h4" color="inherit">
                            Home
                        </Typography>
                        <Typography variant="h4" color="inherit">
                            Home
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default NavBar;