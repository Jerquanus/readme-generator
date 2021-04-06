// function to generate markdown for README
function generateMarkdown(answer) {
  return `# ${answer.title}

  *[Installation](#installation)
  *[Usage](#usage)
  *[Contribution](#contribution)
  *[Credits](#credits)
  *[License](#license)
  # Installation]
  ${answer.installation}
  ## Usage
  ${answer.usage}
  ## Contribution
  ${answer.contribution}
  ### Instructions
  ${answer.instructions}
  ## Credits
  ${answer.credit}
  ## License
  ${answer.license}

  # Contact
  * Github :${answer.git}
  * LinkedIn :${answer.linkedin}
  * Email : ${answer.email}`;
}

module.exports = generateMarkdown;
