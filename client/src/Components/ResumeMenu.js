import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import API from '../utils/API';
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class SimpleSelect extends React.Component {
  state = {
    selected:{},
    resumes: [],
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };




  calculateAlgo = (obj) =>{
    API.calculateAlgo(obj).then(resp=>{
      console.log(resp)









      ///algorithm
//       var badWords = ["with", "have", "also", "inform"];
//       var badWordsMap = {};
//       badWords.forEach(function(a) { badWordsMap[a] = 1});
//        function wordCheck(word){
//         return badWordsMap[word] ? true : false;
//     // for(var i = 0; i < badWords.length; i++){
//       // if(word == badWords[i]){
//     //     return true;
//     //   } else {
//     //     return false;
//     //   }
//     // }
//   }

//   function countWords(str) {
//     var result = {};
    
//     var str1 = str.toLowerCase();
//     var stringArray = str1.split(  /[.<|/>,;' !-?!$%&^"●)(_#.\s]+/g);
//     for (var i = 0; i < stringArray.length; i++) {
//       if (wordCheck(stringArray[i])) {
//         console.log("bad Word");
    
      
//       }
//     }
//     if (str1.length === 0) {
//       return {};
//     } else {
//       for (var i = 0; i < stringArray.length; i++) {
//           if(stringArray[i] == "experience") {
//               stringArray.splice(i, 1);
//           }
//           if(stringArray[i] == "have") {
//             stringArray.splice(i, 1);
//         }
//         if(stringArray[i] == "description") {
//           stringArray.splice(i, 1);
//         }
//           if(stringArray[i] == "with") {
//             stringArray.splice(i, 1);
//         }
//           if(stringArray[i] == "working") {
//             stringArray.splice(i, 1);
//          }
//          if(stringArray[i] == "fluency") {
//             stringArray.splice(i, 1);
//          }
//          if(stringArray[i] == "responsiblity") {
//           stringArray.splice(i, 1);
//        }
//          if(stringArray[i] == "the") {
//             stringArray.splice(i, 1);
//          }
//          if(stringArray[i] == "culture") {
//           stringArray.splice(i, 1);
//        }
//          if(stringArray[i] == "set") {
//           stringArray.splice(i, 1);
//        }
//          if(stringArray[i] == "skill") {
//             stringArray.splice(i, 1);
//          }
//          if(stringArray[i] == "knowledge") {
//             stringArray.splice(i, 1);
//          }
//          if(stringArray[i] == "apply") {
//             stringArray.splice(i, 1);
//          }
//          if(stringArray[i] == "job") {
//           stringArray.splice(i, 1);
//        }
//        if(stringArray[i] == "required") {
//         stringArray.splice(i, 1);
//      }
//          if(stringArray[i] == "and") {
//             stringArray.splice(i, 1);
//          }
//          if(stringArray[i] == "also") {
//             stringArray.splice(i, 1);
//          }
//          if(stringArray[i] == "prior") {
//             stringArray.splice(i, 1);
//          }
//          if(stringArray[i] == "know") {
//             stringArray.splice(i, 1);
//          }
//          if(stringArray[i] == "that") {
//             stringArray.splice(i, 1);
//          }
//         // // if (wordCheck(stringArray[i])) {
//         // //     console.log("bad Word");
//         // // }
//         // else {
//             var keyLength = stringArray[i].length;
//             var key = stringArray[i];
//         if (result[key]) {
//           result[key]++;		
//         } else if (keyLength < 3){
//           delete result[key];
//         } else {
//           result[key] = 1;
//         }
//       }
//       }
//       return result; 
//     }
  
//   var resumeWordCount = resume.length;
  
//   var resumeObject = countWords(resume);
//   // console.log(resumeObject);
//   var jdObject = countWords(jd);
//   // console.log(jdObject);

//   function extend(resumeObject, jdObject) {
//   for(var i in jdObject){
//     if(!(i in resumeObject)){
//       jdObject[i] +=  ", ❌  keyword missing from resume";
//       resumeObject[i] = jdObject[i];
//     }
//   }
//   return jdObject;
//   }
//   // extend(resumeObject, jdObject);

//   var total = extend(resumeObject, jdObject);
// //   var totalList = extend(resumeObject, jdObject);
//   var resumeCompare = countWords(resume)

//   function addCheckMarkandPercent (total) {
//     var final = [];
//     var percent = 0;
//     var words = 0;
//     var correct = 0;
//       for (var prop in total) {
//         if (total[prop]) {
//             words++;
//         if(typeof total[prop] === 'number'){
//           correct++;

//           total[prop] += " ✅";

//         }
//       }
//       }
//       percent = ((correct/words)*100).toFixed(2);
//       // if (result < 80.00) {
//       //   alert("add missing keywords shown below");
//       // }

//   final.push("JOB DESCRIPTION MATCH RATE: " + percent + "%! ");
//   final.push("RESUME WORD COUNT: " + resumeWordCount + " words");
//   final.push("KEYWORD COMPAIRISON RESULT:");
//   final.push(total);
//   return final;
//   }
//   var output = addCheckMarkandPercent(total);
//   console.log(output);






















      //this is where the algorithm will return its calculations
    })
  }

  handleSubmit = event=>{
    event.preventDefault();
    console.log(this.state.selected)
    if(!this.state.selected){
      alert("You gotta select a resume, hoss");
    }
    else this.calculateAlgo(this.state)
  }


  
  getResumes = (user)=>{
    API.getResumes(user).then(resp=>{
      this.setState({resumes:resp.data})
    })
  }

  componentDidMount(){
    this.getResumes(this.props.user)
  }
  
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    this.setState({hold: event.target.value})
    console.log(this.state.hold)
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.root} autoComplete="off">

      <Grid container>


        <Grid item sm={9}>

        <FormControl fullWidth className={classes.formControl}>
          <InputLabel htmlFor="selected">Resume</InputLabel>
          <Select
            value={this.state.selected}
            onChange={this.handleChange}
            inputProps={{
              name: 'selected',
              id: 'resume',
            }}
            >
            {this.state.resumes.map(item=>(
              <MenuItem value={item}>
                {item.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        </Grid>
        <Grid item sm={2}>
                <Button onClick={this.calculateAlgo} color="primary">
                  Jobify!
                </Button>
        </Grid>

      </Grid>
      </form>
    );
  }
}


export default withStyles(styles)(SimpleSelect);
