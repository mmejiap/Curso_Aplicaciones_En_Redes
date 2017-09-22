const yargs = require('yargs');
const fs = require('fs');
const_ = require('lodash');

const notes = require('./notes');

////////////////////////////////////////////////////////////
////opciones de argumentos
////////////////////////////////////////////////////////////

const titleOptions = {
	describe: 'Title of note',
	demand: true,
	alias: 't'
};

const bodyOptions = {
	describe: 'Body of note',
	demand: true,
	alias: 'b'
};

const argv = yargs
	.command('add','Add anew note',{
		title: titleOptions,
		body: bodyOptions
	})
	.command('list','Lists all the notes',{
	})
	.command('read','Read a note',{
		title: titleOptions
	})
	.help()
	.argv;


let command = argv._[0];


// add
if(command=="add"){
	console.log("Ejecutando el comando 'add'.");
	console.log(command);
	notes.addNote(argv.title, argv.body);
}
else if(command=="list"){
	console.log("Ejecutando el comando 'list'");
	console.log(command);
	let allNotes = notes.getAll();
	console.log(`Printing ${allNotes.length} note(s), `);
	allnotes.forEach(note => {
		notes.logNote(note);
	});

}
else if(command=="read"){
	console.log("Ejecutando el comando");
	console.log(command);
	let test = notes.getNote(argv.title);
	if(test)
		notes.logNotes(test);
	else
		console.log("No Existe note");
}
else if(command == "removePart"){
	console.log("Ejecutando el comando");
	console.log(command);
        notes.removeNote(argv.title);
        console.log(`Borrado parcial con exito: ${argv.title}`)

}
else if(command == "removeFull"){
	console.log("Ejecutando el comando");
	console.log(command);
	notes.removeAll();
	console.log(`Borrado total con exito:`);
};

console.log("End.");


