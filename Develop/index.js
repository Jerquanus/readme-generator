// Modules
const questions = require('inquirer');
const fs = require('fs');
const { message } = require('statuses');
const { title } = require('process');

// array of questions for user
questions.prompt([
    {
        type: 'input',
        message: 'What is your project titled?',
        name: 'title',
        validate: (value)=>{ if(value){return true} else {return 'value needed'}}
    },
    {
        type: 'input',
        message: 'How do you install this application?',
        name: 'installation',
        validate: (value)=>{ if(value){return true} else {return 'value needed'}}
    },
    {
        type: 'input',
        message: 'What are the instructions to follow?',
        name: 'instructions',
        validate: (value)=>{ if(value){return true} else {return 'value needed'}}
    },
    {
        type: 'input',
        message: 'Are there any credits?',
        name: 'installation',
        validate: (value)=>{ if(value){return true} else {return 'value needed'}}
    },
    {
        type: 'input',
        message: 'How do you use this application?',
        name: 'usage',
        validate: (value)=>{ if(value){return true} else {return 'value needed'}}
    },
    {
        type: 'input',
        message: 'Are there any licenses used?',
        name: 'license',
        validate: (value)=>{ if(value){return true} else {return 'value needed'}}
    },
    {
        type: 'input',
        message: 'Enter Github username',
        name: 'git',
        validate: (value)=>{ if(value){return true} else {return 'value needed'}},
    },
    {
        type: 'input',
        message: 'Enter email:',
        name: 'email',
        validate: (value)=>{ if(value){return true} else {return 'value needed'}}
    }
]
).then(({
    title,
    installation,
    credit,
    license,
    git,
    linkedin,
    email,
    usage,
    contribution
})=>{ 
  const template = `# ${title}

  *[Installation](#installation)
  *[Usage](#usage)
  *[Contribution](#contribution)
  *[Credits](#credits)
  *[License](#license)
  # Installation]
  ${installation}
  ## Usage
  ${usage}
  ## Contribution
  ${contribution}
  ### Instructions
  ${instructions}
  ## Credits
  ${credit}
  ## License
  ${license}

  # Contact
  * Github :${git}
  * LinkedIn :${linkedin}
  * Email : ${email}`;  
}
) 
createNewFile(title,template);{
    // function to write README file
fs.writeToFile(`./${fileName.tolowercase().split(' ').join('')}.md`,data,(err)=>{
    if(err){
        console.log(err)
    }
    console.log('The Readme has been created');
})
}



// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
