const mysql = require('mysql2')
const inquirer = require('inquirer')
const table = require('console.table')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'employment'
})

const menuOptions = [
    'View all departments',             
    'View all roles',
    'View all employees',
    'Add a department',
    'Add a role',
    'Add an employee',
    'Update an employee role',
    'Exit'
]

const menuQuestions = [{
    type: 'list',
    name: 'option',
    message: 'What would you like to do?',
    choices: menuOptions
}]

function presentMenu() {
    inquirer.prompt(menuQuestions).then(choice => {
        switch (choice.option) {
            case menuOptions[0]:
                viewDepartments()
                break

            case menuOptions[1]:
                viewRoles()
                break

            case menuOptions[2]:
                viewEmployees()
                break

            case menuOptions[3]:
                addDepartment()
                break

            case menuOptions[4]:
                addRole()
                break

            case menuOptions[5]:
                addEmployee()
                break

            case menuOptions[6]:
                updateEmployeeRole()
                break

            default:
                db.end()
        }
    })
}

function viewDepartments() {
    db.query('SELECT * FROM department;', (err, rows) => {
        console.table(rows)
        presentMenu()
    })
}

function viewRoles() {
    db.query('SELECT * FROM role;', (err, rows) => {
        console.table(rows)
        presentMenu()
    })
}

function viewEmployees() {
    db.query('SELECT * FROM employee;', (err, rows) => {
        console.table(rows)
        presentMenu()
    })
}

function addDepartment() {
    let questions = [{name: 'name', message: 'Enter department name'}]

    inquirer.prompt(questions).then(answers => {
        db.query(`INSERT INTO department (name) VALUES ('${answers.name}');`, (err, rows) => presentMenu())
    })
}

function addRole() {
    let departments = []

    db.query('SELECT * FROM department;', (err, rows) => {
        rows.forEach(x => departments.push({name: x.name, value: x.id}))

        let questions = [{name: 'title', message: 'Enter role title'},
                         {name: 'salary', message: 'Enter role salary'},
                         {type: 'list', name: 'department', message: 'Select department', choices: departments}]

        inquirer.prompt(questions).then(answers => {
            db.query(`INSERT INTO role (title, salary, department_id) VALUES ('${answers.title}', ${answers.salary}, '${answers.department}');`, (err, rows) => {
                presentMenu()
            })
        })
    })
}

function addEmployee() {
    let roles = []
    let managers = []

    db.query('SELECT * FROM role;', (err, rows) => {
        rows.forEach(x => roles.push({name: x.title, value: x.id}))

        db.query('SELECT * FROM employee WHERE role_id=1;', (err, rows) => {
            rows.forEach(x => managers.push({name: x.first_name + ' ' + x.last_name, value: x.id}))

            let questions = [{name: 'first', message: "Enter employee's first name"},
                             {name: 'last', message: "Enter employee's last name"},
                             {type: 'list', name: 'role', message: 'Select role', choices: roles},
                             {type: 'list', name: 'manager', message: 'Select manager', choices: managers}]
    
            inquirer.prompt(questions).then(answers => {
                db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${answers.first}', '${answers.last}', ${answers.role}, ${answers.manager});`, (err, rows) => {
                    presentMenu()
                })
            })
        })
    })
}

function updateEmployeeRole() {
    let employees = []
    let roles = []

    db.query('SELECT * FROM employee;', (err, rows) => {
        rows.forEach(x => employees.push({name: x.first_name + ' ' + x.last_name, value: x.id}))

        db.query('SELECT * FROM role;', (err, rows) => {
            rows.forEach(x => roles.push({name: x.title, value: x.id}))

            let questions = [{type: 'list', name: 'employee', message: 'Select employee', choices: employees},
                             {type: 'list', name: 'role', message: 'Select role', choices: roles}]
    
            inquirer.prompt(questions).then(answers => {
                db.query(`UPDATE employee SET role_id=${answers.role} WHERE id=${answers.employee};`, (err, rows) => {
                    presentMenu()
                })
            })
        })
    })
}

presentMenu()