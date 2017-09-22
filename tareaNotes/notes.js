console.log("Iniciando notes modules");

const fs = require('fs');
//////Metodos
let fetchNotes = () => {
	try{
		let noteString = fs.readFileSync("notes-data.json");
		return JSON.parse(noteString);
	}catch(error){
		return [];
	}
};

let saveNotes = (notes) => {
	fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};

let addNote = (title,body) => {
	let notes = fetchNotes();
	
	let note = {
		title: title,
		body: body
	};
	
	let duplicatesNotes = notes.filter( (n) => n.title === title);

	if(duplicatesNotes.length === 0){
		notes.push(note);
		saveNotes(notes);
	}
};

let getAll = () => {
	return fetchNotes();
};

let getNote = (title) => {
	let notes = fetchNotes();
	let filteredNote = notes.filter(n=>n.title==title);
	return filteredNote[0];
};

let logNote = (note) => {
	console.log(`Title: ${note.title}`);
	console.log(`Body:  ${note.body}`);
};


let removeNote = (title) => {
  	let notes = fetchNotes();
  	let newNote = notes.filter((n) => n.title !== title);
	fs.writeFileSync('notes-data.json', JSON.stringify(newNote));
};

let removeAll =() =>{
	fs.unlinkSync('notes-data.json');
};

///Exportando metodos
module.exports = {
	addNote,
	getAll,
	getNote,
	logNote,
	removeNote,
	removeAll
};
