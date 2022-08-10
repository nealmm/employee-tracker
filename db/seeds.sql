INSERT INTO department
VALUES (1, 'management'),
       (2, 'accounting'),
       (3, 'sales'),
       (4, 'human resources'),
       (5, 'customer service'),
       (6, 'reception'),
       (7, 'quality assurance'),
       (8, 'warehouse');

INSERT INTO role
VALUES (1, 'manager', 90000, 1),
       (2, 'accountant', 70000, 2)
       (3, 'sales representative', 65000, 3),
       (4, 'director of human resources', 70000, 4),
       (5, 'customer service representative', 60000, 5),
       (6, 'receptionist', 55000, 6),
       (7, 'director of quality assurance', 65000, 7),
       (8, 'foreman', 65000, 8);

INSERT INTO employee
VALUES (1, 'Michael', 'Scott', 1, NULL),
       (2, 'Kevin', 'Malone', 2, 1),
       (3, 'Angela', 'Martin', 2, 1),
       (4, 'Oscar', 'Martinez', 2, 1),
       (5, 'Meredith', 'Palmer', 2, 1),
       (6, 'Dwight', 'Schrute', 3, 1),
       (7, 'Jim', 'Halpert', 3, 1),
       (8, 'Andy', 'Bernard', 3, 1),
       (9, 'Ryan', 'Howard', 3, 1),
       (10, 'Stanley', 'Hudson', 3, 1),
       (11, 'Phyllis', 'Vance', 3, 1),
       (12, 'Toby', 'Flenderson', 4, 1),
       (13, 'Kelly', 'Kapoor', 5, 1),
       (14, 'Pam', 'Beesly', 6, 1),
       (15, 'Creed', 'Bratton', 7, 1),
       (16, 'Darryl', 'Philbin', 8, 1);