const axios = require("axios");






// var githubPicture = `![Github Picture of ${githubUser}](${avatarUrl})`;


function getProjUrl (githubUser, projName){

  return `https://github.com/${githubUser}/${projName}`

}


function getLicense(license, projUrl){

  if(license === 'None'){
    return ''
  }else{
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)(${projUrl})`
  }

}

function renderLicenseSection(license) {
  if (license !== "None") {
    return (
      `## License

This project is licensed under the ${license} license.`
    )
  }
  return ''
}

function generateMarkdown(data) {

  var avatarUrl;
  axios.get(`https://api.github.com/users/${data.githubUser}`)
  .then( res => {
    avatarUrl = res.avatar_url
  })
  .catch(err =>{
    console.log(err)
  });


  return `
# ${data.title}

#![Github Avatar[(${avatarUrl})

${getLicense(data.license, data.githubUser, data.projName, data.projUrl)}

## Description

${data.description}

## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

\`\`\`
${data.installInstructions}
\`\`\`

## Usage

${data.instructions}

${renderLicenseSection(data.license)}
  
## Contributing

${data.contributors}

## Tests

To run tests, run the following command:

\`\`\`
${data.test}
\`\`\`

## Questions

If you have any questions about the repo, open an issue or contact [${data.githubUser}](${data.url}) directly at ${data.ghEmail}.

`;
}



module.exports = generateMarkdown;
