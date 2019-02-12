var cowsay = require("cowsay");
var intro = require ("./intro");
var media = require ("./media");
var final = require ("./final");

// let nombre = "Mohamed";
// let carrera = " Asesor inmoviliario ";
// let accion= " mordio ";
// let concecuencia= " Cayo ";
// let veces= 3+3 ;

// let todo= "La vaquita grosera llamda " +  nombre + accion + "a un" + carrera+ veces + " veces por lo que nunca regreso a ofrecerle una casa"

let transporte = "carro";
let lugar = "desconocido";
let clima = "nuboso";
let edad =55;

let instrumento = "palo de golpes";
let golpe = 8;
let sentimiento = "mas triste";
let mejor = "mejor";

let transporte2 = "Bus";
let postSentimient= "Mejor";
let durmio ="durmio";



console.log (intro.historia(transporte, lugar, clima, mejor, edad));
console.log (media.mitad (instrumento, golpe, sentimiento));
console.log (final.termino(transporte2, postSentimient, durmio));


console.log(cowsay.say({
	text : "Puto clima",
	e : "ç ç",
	T : " : "
}));

