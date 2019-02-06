import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button"

class JobCard extends React.Component{

    render(){
        return(

            
            
            <Card className={classes.card}>
    <CardContent className={classes.cardContent}>
    <Typography gutterBottom variant="h5" component="h2">
    Job Heading
    </Typography>
    <Typography>
    San Jose, CA, USA (94666)
    </Typography>
    </CardContent>
    <CardActions>
    <Button size="small" color="primary">
    View
    </Button>
    
    </CardActions>
    </Card>
)
}
}

export default JobCard