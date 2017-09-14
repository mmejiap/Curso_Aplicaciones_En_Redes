console.log("Iniciando Modulo 'modulo01.js'\n");

let lib = require('readline');
/*
let interface01 = lib.createInterface({
	input: process.stdin,
	output: process.stdout
});
*/
console.log("Hola!...\n");
console.log("Las notas ingresadas son: \n");

module.exports.notas = [
	{
		numNota: 1,
		nota: 15
	},
	{
		numNota: 2,
		nota: 12
	},
	{
		numNota: 3,
		nota: 18
	},
	{
		numNota: 4,
		nota: 13
	}
];



/*
for(let n of notas){
	console.log(n);
}*/
