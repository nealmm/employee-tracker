INSERT INTO department (name)
VALUES ('management'),
       ('accounting'),
       ('human resources'),
       ('quality assurance'),
       ('customer service'),
       ('sales'),
       ('reception'),
       ('warehouse');

INSERT INTO role (title, salary, department_id)
VALUES ('manager', 90000, 1),
       ('accountant', 70000, 2),
       ('dir. human resources', 70000, 3),
       ('dir. quality assurance', 65000, 4),
       ('customer service rep.', 60000, 5),
       ('sales rep.', 65000, 6),
       ('receptionist', 55000, 7),
       ('foreman', 65000, 8);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Michael', 'Scott', 1, NULL),
       ('Kevin', 'Malone', 2, 1),
       ('Angela', 'Martin', 2, 1),
       ('Oscar', 'Martinez', 2, 1),
       ('Meredith', 'Palmer', 2, 1),
       ('Toby', 'Flenderson', 3, 1),
       ('Creed', 'Bratton', 4, 1),
       ('Kelly', 'Kapoor', 5, 1),
       ('Dwight', 'Schrute', 6, 1),
       ('Jim', 'Halpert', 6, 1),
       ('Ryan', 'Howard', 6, 1),
       ('Stanley', 'Hudson', 6, 1),
       ('Phyllis', 'Vance', 6, 1),
       ('Pam', 'Beesly', 7, 1),
       ('Darryl', 'Philbin', 8, 1);