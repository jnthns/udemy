console.log("Starting notes.js");

const fs = require('fs');

// --------------------------------------------------------------------------------
// // console.log(module)

// // add key, value to module/exports object
// module.exports.age = 24;

// // add function to module/exports object
// module.exports.addSum = (a,b) => {
// 	return a + b;
// };
// --------------------------------------------------------------------------------

// empty array, add to array, then write object to JSON
var addNote = (title, body) => {
	// console.log('Adding note', title, body);
	var notes = [];
	var note = {
		title,
		body
	};

	try {
		var notesString = fs.readFileSync('notes-data.json');
		notes = JSON.parse(notesString)
	} catch (e) {

	}

	var duplicateNotes = notes.filter((note) => note.title === title);

	if (duplicateNotes.length === 0) {
		notes.push(note);
		fs.writeFileSync('notes-data.json', JSON.stringify(notes));
	}
};

var getAll = () => {
	console.log('Getting all notes');
}

var getNote = (title) => {
	console.log('Getting note', title);
}

var removeNote = (title) => {
	console.log('Removing note', title);
}

module.exports = {
	addNote,
	getAll,
	getNote,
	removeNote
};