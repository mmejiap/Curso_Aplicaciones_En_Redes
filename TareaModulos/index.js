console.log("Iniciando modulo 'index.js'");


let cadena =  "";

//modulo de las notas
const listaNotas = require('./modulo01.js');

//modulo de validacion
const val = require('./modulo02.js');

//modulo de eliminacion de nota mas baja
const dellNotaBaja = require('./modulo03.js');

//modulo de promedio de notas

const prom = require('./modulo04.js');



console.log(listaNotas.notas);

cadena += "\n\n\t\tNotas completas:\n";

for(let i=0; i<listaNotas.notas.length; i++){
        cadena += "\tnota "+listaNotas.notas[i].numNota + " -> "+listaNotas.notas[i].nota+"\n";
}

cadena += "\nvalidando Notas!...\n";
console.log("Validando Notas!....")
for(let i=0; i<listaNotas.notas.length; i++){
	if(val.validate(listaNotas.notas[i].nota)===true)
		console.log("...ok!");
	else
		console.log("Nota numero " +(i+1)+ "!!!...");
}

cadena += "\n\tElimando la nota mas baja!...\n";

//Eliminando la nota mas baja
cadena +="\n\tEliminando!...\n";
dellNotaBaja.eliminarNotaBaja(listaNotas.notas);

console.log("Elimando notas mas baja.\n")
console.log(listaNotas.notas);


//mostrando el promedio
console.log("promedio -> "+prom.promedio(listaNotas.notas));

cadena += "\nActualizando notas!...\n\n";
cadena +="****************************************************************************************************************\n\n\n";

cadena += "\n\n\t\tSus notas validadas son:\n";

for(let i=0; i<listaNotas.notas.length; i++){
        cadena += "\tnota "+(i+1) + " -> "+listaNotas.notas[i].nota+"\n";
}

cadena += "\n\t\t El promedio es: "+prom.promedio(listaNotas.notas)+"\n";

////////////////////////////////////////////
/////////  implementando server
////////////////////////////////////////////


const http = require("http");
const hostname = "127.0.0.1";
const port = 8088;
const fs = "fs";

const server = http.createServer((req,res) => {
	res.statusCode=200;
	res.write("HOLA USUARIO....\n\n\tBIENVENIDO!!!...\n"+cadena);
	res.end();
});

server.listen(port, hostname, () => {
	//console.log('Server running at http://${hostname}:${port/}');
	console.log(`Server running at http://${hostname}:${port}/`);

});


