
# PROBLEMA: Con una lista colocar nombre de alumnos, apellidos, codigo y ciclo matriculado. Luego hacer un summary de cuantos alumnos se tiene matriculado por ciclo.


## Codigo en javascript adjuntado.

Se crea las lista de alumnos en base a una fuente de la facultad de ciencias de la UNIVERSIDAD NACIONAL DE INGENIERIA, luego se crean dos listas mas para poder contabilizar estadisticamente los alumnos





```python

alumnos = [
	{
		nombres: 'Jesus Enrique',
		apellidos: 'Lovon Melgarejo',
		codigo: "20101299F",
		cicloMatric:9
	},
	{
		nombres: 'Oscar Adan',
		apellidos: 'Acevedo Sanchez',
		codigo: '20122073G',
		cicloMatric:7
	},
	{
		nombres: 'Julio Eduardo',
		apellidos: 'Caceres Gonzales',
		codigo: '20119501A',
		cicloMatric:8
	},
	{
		nombres: 'Michael David',
		apellidos: 'Morales Curi',
		codigo: '20114013I',
		cicloMatric:9
	},
	{
		nombres: 'Angelo Jonathan',
		apellidos: 'Diaz Soto',
		codigo: '20110255H',
		cicloMatric:10
	},
	{
		nombres: 'Carlos Emmanuel',
		apellidos: 'Monteza Ortiz',
		codigo: '20112158J',
		cicloMatric:6
	},
	{
		nombres: 'Felipe Adrian',
		apellidos: 'Moreno Vera',
		codigo: '20120354I',
		cicloMatric:8
	},
	{
		nombres: 'Evelyn Ruth',
		apellidos: 'Berrocal Romani',
		codigo: '20142738D',
		cicloMatric:5
	},
	{
		nombres: 'Percy Renato',
		apellidos: 'Guerra Peña',
		codigo: '20160020D',
		cicloMatric:3
	},
	{
		nombres: 'Fatima Amanda',
		apellidos: 'Santillan Espinoza',
		codigo: '20101299F',
		cicloMatric:10
	}

]


console.log("ALUMNOS CIENCIAS\n");
console.log("Alumnos por ciclo")
AlumnosPorCiclos = [
				{
					ciclo:1,
					numAlumnos:0
				},
				{
					ciclo:2,
					numAlumnos:0
				},
				{
					ciclo:3,
					numAlumnos:0
				},
				{
					ciclo:4,
					numAlumnos:0
				},
				{
					ciclo:5,
					numAlumnos:0
				},
				{
					ciclo:6,
					numAlumnos:0
				},
				{
					ciclo:7,
					numAlumnos:0
				},
				{
					ciclo:8,
					numAlumnos:0
				},
				{
					ciclo:9,
					numAlumnos:0
				},
				{
					ciclo:10,
					numAlumnos:0
				},
		];


for(let i=0; i<10; i++){
	for(let j=0; j<alumnos.length; j++){
		if(AlumnosPorCiclos[i].ciclo == alumnos[j].cicloMatric){
			AlumnosPorCiclos[i].numAlumnos = AlumnosPorCiclos[i].numAlumnos + 1;
		}
	}
}

for(let i=0; i<10; i++){
	let linea = "Ciclo" + AlumnosPorCiclos[i].ciclo + ": " + AlumnosPorCiclos[i].numAlumnos;
	console.log(linea)
}

var cicloPromedio
var suma = 0
for(let i=0; i<10; i++){
	suma+=AlumnosPorCiclos[i].numAlumnos*(i+1)
}
console.log("El ciclo promedio: "+suma/10)

console.log("\n")
console.log("Cantidad de alumnos por año de Ingreso")

AlumnosPorAnioIngreso = [
	{
		anio: 2010,
		numAlumnos:0
	},
	{
		anio: 2011,
		numAlumnos:0
	},
	{
		anio: 2012,
		numAlumnos:0
	},
	{
		anio: 2013,
		numAlumnos:0
	},
	{
		anio: 2014,
		numAlumnos:0
	},
	{
		anio: 2015,
		numAlumnos:0
	},
	{
		anio: 2016,
		numAlumnos:0
	},
	{
		anio: 2017,
		numAlumnos:0
	}
]


for(let i=1; i<7; i++){
	for(let j=0; j<alumnos.length; j++){
		var cic = alumnos[j].codigo;
		if(AlumnosPorAnioIngreso[i].anio == cic.substring(0,4)){
			AlumnosPorAnioIngreso[i].numAlumnos=AlumnosPorAnioIngreso[i].numAlumnos + 1;
		}
	}
}


for(let i=0; i<8; i++){
	let linea = "Año " + AlumnosPorAnioIngreso[i].anio + ": " + AlumnosPorAnioIngreso[i].numAlumnos;
	console.log(linea)
}

suma = 0
for(let i=0; i<7; i++){
	suma+=AlumnosPorAnioIngreso[i].numAlumnos*(i+1)
}
console.log("El ciclo promedio: "+suma/10)

console.log("\n\n********** Lista de Alumnos **********\n")

for (var i = 0; i < alumnos.length; i++) {
	let linea = "Nombres: "+alumnos[i].nombres+"\n" + "apellidos: "+ alumnos[i].apellidos + "\n" + "Codigo: "+alumnos[i].codigo + "\nCiclo: " + alumnos[i].cicloMatric+"\n\n";
	console.log(linea);
}
```

![image.png](attachment:image.png)

### fuente de la lista de alumnos
![image.png](attachment:image.png)


```python

```
