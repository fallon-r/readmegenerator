const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");



// These are the questions it will ask when you run the app
const questions = [
    {
        type: "input",
        name: "githubUser",
        message: "What is your username on github?"
    },
    {
        type: "input",
        name: "ghEmail",
        message: "What email do you use for Github?"
    },
    {
        type:"input",
        name:"pojName",
        message:"What's the project's name?"
    },
    {   
        type:"input",
        name:"projUrl",
        message:"Add a link to the deployed version of your project"
    },
    {   
        type:"input",
        name:"description",
        message:"Write a short description of your project"
    },
    {   
        type:"list",
        name:"licenseJoke",
        message:"What license will your project have?",
        choices:["MIT", "GPL 3.0", "BSD", "Driver's","None"],
        // validate:licenseVal
    },
    {   
        type:"list",
        name:"license",
        message:"Don't get cute, buddy",
        choices:["MIT", "GPL 3.0", "BSD", "None"],
        when: function (answer){
            return answer.licenseJoke === "Driver's"
        }
    },
    {
        type: "confirm",
        name:"needNPM",
        message:"Does this require any installation?",
    },
    {
        input:"input",
        name:"installInstruction",
        message:"What are the installation steps?",
        default:"npm i",
        when: function(answers){
            return answers.needNPM === true;
        }
    },
    {
        input:"input",
        name:"test",
        message:"What is the command for tests?",
        default:"npm test"
    },
    {
        input:"input",
        name:"instructions",
        message:"Are there any special things to know about this repo?"
    },
    {
        input:"input",
        name:"contributors",
        message:"How can people contribute to your project?"
    }
    

];



function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        writeToFile("README.md", generateMarkdown({ ...inquirerResponses }))
    }
    )

}

init();
