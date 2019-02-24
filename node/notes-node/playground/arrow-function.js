var square = function (x) {
	var result = x * x;
	return result;
};

var squaretwo = x => x * x;
// don't need () around x if only one argument is passed

console.log(square(9));
console.log(squaretwo(9));

var user = {
	name: 'Jon',
	sayHi: () => {
		console.log(arguments)
		console.log('Hi. I\'m ' + user.name);
	},
	sayHiAlt () {
		console.log(arguments);
		console.log('Hi. I\'m ' + user.name);
	}
};

user.sayHi(1,2,3);
user.sayHiAlt(1,2,3);

// arrow function will return the global arguments variable
// alt function returns correct object info