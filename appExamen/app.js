let express = require("express");
let fs = require('fs');
let router=express.Router();
let aplicacion = express();

router.get('/', function(request, response) {
response.status(200).json({"mensaje":"Hola miguel mejia"});
});

/*
router.all('/bd.txt', function (req, res, next) {
  console.log('Accessing the secret section ...');
  next(); // pass control to the next handler
});

*/


/*
app.get('/fisica', function (req, res) {
  res.send('random.text');
});
*/
aplicacion.use(router);

/*
aplicacion.use('/bd.txt', function(req, res, next){
	console.log("A request for things received at " + Date.now());
	next();
});
*/

aplicacion.listen(5000, function() {
console.log("Servidor iniciado");
});