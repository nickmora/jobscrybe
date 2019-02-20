import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button"
import JobDialog from "./JobDialog";

class JobCard extends React.Component{
    render(){
        const { classes } = this.props;
        return(

            
            
    <Card>
        <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {this.props.jobInfo.title}
            </Typography>
            <Typography>
                {this.props.jobInfo.company}
            </Typography>
            <CardMedia>
                {this.props.jobInfo.company_logo}
            </CardMedia>
            <Typography>
                {this.props.jobInfo.location}
            </Typography>
            <Typography>
                {this.props.jobInfo.created_at}
            </Typography>
        </CardContent>
        <CardActions>
                <JobDialog jobInfo={this.props.jobInfo} user={this.props.user} />
    
        </CardActions>
    </Card>
)
}
}

export default JobCard