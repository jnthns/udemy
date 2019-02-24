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

const titleOptions = {
			describe: 'Title of note',
			demand: true,
			alias: 't'};

const bodyOptions = {
			describe: 'Body of note',
			demand: true,
			alias: 'b'};

const argv = yargs
	.command('add','Add a new note', {
		title: titleOptions,
		body: bodyOptions
	})
	.command('list','List all notes')
	.command('read','Read a note', {
		title: titleOptions
	})
	.command('remove','Remove a note', {
		title: titleOptions
	})	
	.help()
	.argv;
var command = process.argv[2]; // == argv._[0]
// `node app.js add --title 'big secrets' adds title:secrets as key:value to process. can be updated by changing 'big secrets' to any other string

if (command === 'add') {
	var note = notes.addNote(argv.title, argv.body);
	if (note) {
		console.log('Note created');
		notes.logNote(note);
	} else {
		console.log('Note title taken');
	}
} else if (command === 'list') {
	var allNotes = notes.getAll();
	console.log('Printing ' + allNotes.length + ' note(s).');
	allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read') {
	var note = notes.getNote(argv.title);
	if (note) {
		console.log('Note found');
		notes.logNote(note);
	} else {
		console.log('Note wasn\'t found');
	}
} else if (command === 'remove') {
	var noteRemoved = notes.removeNote(argv.title);
	var message = noteRemoved ? 'Note was removed' : 'Note not found';
	console.log(message);
} else {
	console.log('Command not recognized');
}














