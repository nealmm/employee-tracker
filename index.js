const mysql = require('mysql2')
const inquirer = require('inquirer')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'employment'
})

const options = [
    'View all departments',             
    'View all roles',
    'View all employees',
    'Add a department',
    'Add a role',
    'Add an employee',
    'Update an employee role',
    'Exit'
]

const question = {
    type: 'list',
    name: 'option',
    message: 'What would you like to do?',
    choices: options
}

function presentMenu() {
    inquirer.prompt([question]).then(choice => {
        switch (choice.option) {
            case options[0]:
                console.log('Fetching all departments...')
                presentMenu()
                break
            case options[1]:
                console.log('Fetching all roles...')
                presentMenu()
                break
            case options[2]:
                console.log('Fetching all employees...')
                presentMenu()
                break
            case options[3]:
                console.log('Adding new department...')
                presentMenu()
                break
            case options[4]:
                console.log('Adding new role...')
                presentMenu()
                break
            case options[5]:
                console.log('Adding new employee...')
                presentMenu()
                break
            case options[6]:
                console.log('Updating new employee role...')
                presentMenu()
                break
            case options[7]:
                db.end()
                break
        }
    })
}

presentMenu()