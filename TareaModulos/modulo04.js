console.log("Iniciando modulo 'modulo04.js'");

module.exports.promedio=(listaNotas)=>{
	let suma = 0;
	for(let i=0; i<listaNotas.length; i++){
		suma += listaNotas[i].nota;
	}
	return suma/listaNotas.length;
};
