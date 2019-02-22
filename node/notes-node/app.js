console.log('Starting app.');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

// // EXPORT function from notes.js
// var sum = notes.addSum(9,-2);
// console.log(sum);

// // prints object with user info
// var user = os.userInfo();

// // adds to greetings.txt
// fs.appendFileSync('greetings.txt', 'Hello ' + user.username + '! I am ' + notes.age + ' years old.');

// // lodash docs - https://lodash.com/docs/4.17.11
// console.log(_.isString(true));
// console.log(_.isString('test'));

// // remove duplicates using lodash.uniq()
// var filteredArray = _.uniq(['Jon','Jon','test',2,3,4,'Jon'])
// console.log(filteredArray)

const argv = yargs.argv;
var command = process.argv[2]; // == argv._[0]
console.log('Command: ', command);
console.log('Yargs', argv);
// `node app.js add --title 'big secrets' adds title:secrets as key:value to process. can be updated by changing 'big secrets' to any other string

if (command == 'add') {
	console.log('adding new note');
	notes.addNote(argv.title, argv.body);
} else if (command == 'list') {
	notes.getAll();
	console.log('Listing all notes');
} else if (command == 'read') {
	notes.getNote(argv.title);
	console.log('Reading not es');
} else if (command == 'remove') {
	console.log('Removing notes');
	notes.removeNote(argv.title);
} else {
	console.log('Command not recognized');
}














