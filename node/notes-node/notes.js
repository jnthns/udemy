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

var saveNotes = (notes) => {
	fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

// empty array, add to array, then write object to JSON
var addNote = (title, body) => {
	// console.log('Adding note', title, body);
	var notes = fetchNotes();
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
	return fetchNotes();
}

var getNote = (title) => {
	var notes = fetchNotes();
	var filteredNotes = notes.filter((note) => note.title === title);
	return filteredNotes[0];
}

var removeNote = (title) => {
	// fetch notes
	var notes = fetchNotes();
	// filter notes, removing the one with title of argument
	var filteredNotes = notes.filter((note) => note.title !== title);
	// save new notes array
	saveNotes(filteredNotes);
	// if true, title was removed, if false, title was NOT removed
	return notes.length !== filteredNotes.length;
}

var logNote = (note) => {
	// debugger;
	console.log('--');
	console.log('Title: ' + note.title)
	console.log('Body: ' + note.body);
} 

module.exports = {
	addNote,
	getAll,
	getNote,
	removeNote,
	logNote
};