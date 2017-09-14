console.log("Iniciando el modulo 'modulo02.js'");

module.exports.validate=nota=>{
	if(typeof nota == 'number')
		return true;
	else
		return "la no nota ingresada no es numero ... CORREGIR!...";
};
