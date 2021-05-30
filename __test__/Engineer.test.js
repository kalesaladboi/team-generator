const Employee = require('../lib/Employee.js');
const Engineer = require('../lib/Engineer.js');

test('create Engineer object', () => {
    const testHub = "123";
    const testPerson = new Engineer('123', 1, '123@gmail.com', testHub)
    expect(testPerson.github).toBe(testHub);
});