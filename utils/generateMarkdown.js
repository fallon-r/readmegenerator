const api = require("./api")

function generateMarkdown(data) {
  return `
# ${data.title}

`;
}

module.exports = generateMarkdown;
