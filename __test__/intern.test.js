const Employee = require('../lib/Employee.js');
const Intern = require('../lib/Intern.js');

test('create Intern object', () => {
    const school = "123";
    const testPerson = new Intern('123', 1, '123@gmail.com', school)
    expect(testPerson.school).toBe(school);
});