const inquirer = require("inquirer")
require("console.table")

const db = require("./connection")

function mainMenu() {
    inquirer.prompt([
        {
            type: "list",
            name: "action",
            message: "What would you like to do?",
            choices: [
                "view all departments",
                "view all roles",
                "view all employees",
                "add a department",
                "add a role",
                "add an employee",
                "update an employee role",
                "exit"
            ]
        }
    ])
        .then(answers => {

            if (answers.action == "view all departments") {
                viewAllDepartments()
            }

            if (answers.action == "view all roles") {
                viewAllRoles()
            }

            if (answers.action == "view all employees") {
                viewAllDepartments()
            }

            if (answers.action == "add a department") {
                addDepartment()
            }

            if (answers.action == "add a role") {
                addRole()
            }

            if (answers.action == "add an employee") {
                addEmployee()
            }

            if (answers.action == "update an employee role") {
                updateEmployee()
            }

            if (answers.action == "exit") {
                process.exit(1)
            }

        })
}
    // show a table of all departments
    // SELECT * FROM department
function viewAllDepartments() {
    db.query("SELECT * FROM department", (err, data) => {
        console.table(data)
        mainMenu();
    })
}

// create a function for viewAllRoles
function viewAllRoles() {
    db.query("SELECT * FROM roles", (err, data) => {
        console.table(data)
        mainMenu();
    })
}

// create a function for viewAllEmployees
function viewAllEmployees() {
    db.query("SELECT * FROM employees", (err, data) => {
        console.table(data)
        mainMenu();
    })
}

//  create a function for addRole
function addRole() {
    inquirer.prompt([
        {
            type: "input",
            name: "role_id",
            message: "what is the role id?"
        },
        {
            type: "input",
            name: "title",
            message: "what is the role title?"
        },
        {
            type: "input",
            name: "salary",
            message: "what is the salary?"
        },
        {
            type: "input",
            name: "department_id",
            message: "what is the department?"
        }
    ])
    .then(answers => {

        db.query("INSERT INTO role (id, title, salary, department_id) VALUES (?, ?);", [answers.role_id, answers.title, answers.salary, answers.dept_id], (err, data) => {
            if (err) console.log(err);

            console.log("Role added!")
            mainMenu();
        })
    }) 
}

//  create a function for addEmployee
function addEmployee() {
    inquirer.prompt([
        {
            type: "input",
            
        }
    ])

}

//works

function addDepartment() {
    inquirer.prompt([
        {
            type: "input",
            name: "dept_id",
            message: "What is the id of the new department?"
        },
        {
            type: "input",
            name: "dept_name",
            message: "What is the name of the new department?"
        }
    ])
        .then(answers => {

            db.query("INSERT INTO department (id, name) VALUES (?, ?);", [answers.dept_id, answers.dept_name], (err, data) => {
                if (err) console.log(err);

                console.log("Department added!")
                mainMenu();
            })

        })
}


// create a function for updating employee role



mainMenu();