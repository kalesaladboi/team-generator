const fs = require('fs');
const generatePage = require('../src/page-template.js');
const inquirer = require('inquirer');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Employee = require('../lib/Employee');



const teamMembers = [];

function Team() {
    function createManager() {
        console.log("let's start creating your team!")
        inquirer
        .prompt([
            {
                type: 'input',
                name: 'managerName',
                message: "manager name?"
            },
            {
                type: 'input',
                name: 'managerId',
                message: "manager employee Id?"
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: "manager email?"
            },
            {
                type: 'input',
                name: 'managerOfficeNumber',
                message: "manager office number?"
            },
        ]).then(answers => {
            let managerObj = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            managerObj.role = "Manager";
            teamMembers.push(managerObj);
            // console.log(managerObj);
            addEmployee()
        });
    }
    //end create manager
    //start add employee
    addEmployee = () => {
        inquirer.prompt([
            {
                type: 'list',
                name: 'teamMemberRole',
                message: 'Would you like to add an Engineer or Intern?',
                choices: ['Engineer', 'Intern','No more employees'],
            }
        ]).then(({teamMemberRole}) => {
            this.teamMemberRole = teamMemberRole;

            if(this.teamMemberRole === "Engineer") {
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'engineerName',
                        message: "Engineer name?"
                    },
                    {
                        type: 'input',
                        name: 'engineerId',
                        message: "Engineer employee Id?"
                    },
                    {
                        type: 'input',
                        name: 'engineerEmail',
                        message: "Engineer email?"
                    },
                    {
                        type: 'input',
                        name: 'engineerGithub',
                        message: "github username?"
                    }
                ]).then(({engineerName, engineerId, engineerEmail, engineerGithub}) => {
                    let engineerObj = new Engineer(engineerName, engineerId, engineerEmail, engineerGithub);
                    engineerObj.role = "Enginner";
                    teamMembers.push(engineerObj);
                    addEmployee();
                }) 

            
        } else if (this.teamMemberRole === "Intern") {

                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'internName',
                        message: "intern name?"
                    },
                    {
                        type: 'input',
                        name: 'internId',
                        message: "intern employee Id?"
                    },
                    {
                        type: 'input',
                        name: 'internEmail',
                        message: "intern email?"
                    },
                    {
                        type: 'input',
                        name: 'internSchool',
                        message: "school name?"
                    },
                ]).then(({internName, internId, internEmail, internSchool}) => {
                    let internObj = new Intern(internName, internId, internEmail, internSchool);
                    internObj.role = "Intern";
                    teamMembers.push(internObj);
                    addEmployee();
                });

            
        } else {
            //not adding any employees
            let pageHTML = new generatePage(teamMembers).createData();
            const writefile = fileContent => {
                fs.writeFile('./dist/index.html', fileContent, err => {
                    if (err) throw new Error(err);
                    console.log('Employee page generated');
                });
            }
            writefile(pageHTML);
            console.log(teamMembers);
        }
        
        });

    




}
createManager();
}
module.exports = Team;