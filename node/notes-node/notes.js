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

var fetchNotes = () => {
	try {
		var notesString = fs.readFileSync('notes-data.json');
		return JSON.parse(notesString)
	} catch (e) {
		return [];
	}
};

// function to save notes to JSON 
var saveNotes = (notes) => {
	fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}


// empty array, add to array, then write object to JSON
var addNote = (title, body) => {
	// get object and return string
	var notes = fetchNotes();	
	var note = {
		title,
		body
	};

	// check for duplicate attributes in notes object
	var duplicateNotes = notes.filter((note) => note.title === title);

	// add attribute if none found in notes object
	if (duplicateNotes.length === 0) {
		notes.push(note);
		saveNotes(notes);
		return note;
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