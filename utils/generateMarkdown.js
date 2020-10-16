// const axios = require("axios")


// function generateProjectUrl(github, title) {
//   const kebabCaseTitle = title.toLowerCase().split(" ").join("-");
//   return `https://github.com/${github}/${kebabCaseTitle}`;
// }

// function generateAvatarUrl(github){  
//     const url = axios.get("https://api.github.com/users/" + github).then(
//       response => {
//         // console.log(response.response.avatar_url)
//         return response.response.avatar_url
//       }).catch(error=>"error")
      
//       return url
//   }

// function renderLicenseBadge(license, github, title) {
//   if (license !== "None") {
//     return `[![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)](${generateProjectUrl(github, title)})`
//   }
//   return ''
// }

// function renderAvatar(github, avatar){  
//     // const avatar = generateAvatarUrl(github);
//     // console.log(avatar)
//      return `[![${github}](${avatar})](https://github.com/${github})`
// }

// function renderLicenseSection(license) {
//   if (license !== "None") {
//     return (
//       `## License

// This project is licensed under the ${license} license.`
//     )
//   }
//   return ''
// }


// function generateMarkdown(response) {


//   return `
// # ${response.title}
// ${renderLicenseBadge(response.license, response.github, response.title, response.url)}
// ${renderAvatar(response.github,aUrl)}
// ## Description

// ${response.description}

// ## Table of Contents 

// * [Installation](#installation)

// * [Usage](#usage)

// * [License](#license)

// * [Contributing](#contributing)

// * [Tests](#tests)

// * [Questions](#questions)

// ## Installation

// To install necessary dependencies, run the following command:

// \`\`\`
// ${response.installation}
// \`\`\`

// ## Usage

// ${response.usage}

// ${renderLicenseSection(response.license)}
  
// ## Contributing

// ${response.contributing}

// ## Tests

// To run tests, run the following command:

// \`\`\`
// ${response.test}
// \`\`\`

// ## Questions

// If you have any questions about the repo, open an issue or contact [${response.github}](${response.url}) directly at ${response.email}.

// `;
// }

// module.exports = generateMarkdown;
