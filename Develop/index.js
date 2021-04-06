// Modules
const inquirer = require('inquirer');
const fs = require('fs');
const { message } = require('statuses');
const { title } = require('process');
const generateMarkdown = require('./utils/generateMarkdown')

// array of questions for use


inquirer.prompt([
    {
        type: 'input',
        message: 'What is your project titled?',
        name: 'title'
        // validate: (value)=>{ if(value){return true} else {return 'value needed'}}
    },
    {
        type: 'input',
        message: 'How do you install this application?',
        name: 'installation'
        // validate: (value)=>{ if(value){return true} else {return 'value needed'}}
    },
    {
        type: 'input',
        message: 'What are the instructions to follow?',
        name: 'instructions'
        // validate: (value)=>{ if(value){return true} else {return 'value needed'}}
    },
    {
        type: 'input',
        message: 'Are there any credits?',
        name: 'credit',
        // validate: (value)=>{ if(value){return true} else {return 'value needed'}}
    },
    {
        type: 'input',
        message: 'How do you use this application?',
        name: 'usage',
        // validate: (value)=>{ if(value){return true} else {return 'value needed'}}
    },
    {
        type: 'input',
        message: 'Are there any licenses used?',
        name: 'license',
        // validate: (value)=>{ if(value){return true} else {return 'value needed'}}
    },
    {
        type: 'input',
        message: 'Enter Github username',
        name: 'git',
        // validate: (value)=>{ if(value){return true} else {return 'value needed'}},
    },
    {
        type: 'input',
        message: 'Enter email:',
        name: 'email',
        // validate: (value)=>{ if(value){return true} else {return 'value needed'}}
    },
    {
        type: 'input',
        message: 'Enter LinkdIn name',
        name: 'linkedin'
    }
    ])
    .then((answer)=> { 
        console.log(answer)
        const template = generateMarkdown(answer)
        fs.writeFile(`NEW_README.md`,template,(err)=>{
                if(err){
                    console.log(err)
                }
                console.log('The Readme has been created');
            })
        })
    

   

//createNewFile(title,template);
// function to write README file
// {
// }



// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
/* 
{
    title,
    installation,
    credit,
    license,
    git,
    linkedin,
    email,
    usage,
    contribution
} */

// ./${fileName.tolowercase().split(' ').join('')}