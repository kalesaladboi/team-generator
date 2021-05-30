const Employee = require('../lib/Employee.js');

test('check if employee is created', () => {
    const testPerson = new Employee('123', 1, '123@gmail.com')
    expect(testPerson).toBe(testPerson);
});