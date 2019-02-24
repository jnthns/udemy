// node inspect playground/debugging.js

var person = {
	name: 'Jon'
};

person.age = 24;

// press c and debugger will stop here
debugger;

person.name = 'Notjon';

console.log(person);