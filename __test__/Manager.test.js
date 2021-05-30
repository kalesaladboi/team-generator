const Employee = require('../lib/Employee.js');
const Manager = require('../lib/Manager.js');

test('create Manager object', () => {
    const officeNumber = 50;
    const testPerson = new Manager('123', 1, '123@gmail.com', officeNumber)
    expect(testPerson.officeNumber).toBe(officeNumber);
});