console.log("Iniciando el modulo 'modulo03.js'");

module.exports.eliminarNotaBaja=(listaNotas)=>{
	let n = listaNotas[0].nota;
	let index_n=0;
	for(let i=1; i<listaNotas.length; i++){
		if(n>listaNotas[i].nota){
			n=listaNotas[i].nota;
			index_n=i;
		}
	}
	
	let item = listaNotas[index_n];

	listaNotas.splice(index_n,1);
	console.log("Nota mas baja eliminada...\n");
};
