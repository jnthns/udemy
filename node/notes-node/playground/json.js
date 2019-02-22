// var obj = {
// 	name: 'Jonathan'
// };

// var stringObj = JSON.stringify(obj);
// console.log(stringObj);
// console.log(typeof stringObj);

// var personString = '{"name": "Jonathan", "age": 24}';
// var person = JSON.parse(personString);
// console.log(person)
// console.log(typeof person)

// import fs module 
const fs = require('fs');

// create sample object
var originalNote = {
	title: 'Some title',
	body: 'Some body'
};

// convert obj to string with JSON.stringify
var originalNoteString =  JSON.stringify(originalNote)
// write to JSON file 
fs.writeFileSync('notes.json', originalNoteString)

// read JSON 
var noteString = fs.readFileSync('notes.json');
// convert back to obj with JSON.parse
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);