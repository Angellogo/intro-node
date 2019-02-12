module.exports = {

	historia:function (transporte, lugar, clima, mejor, edad) {

		if ( edad > 19 && edad < 80) {
			return `La vaquita siempre ha sido bien portada y siempre viaja en ${transporte} con un clima ${mejor}`
		} else if ( edad > 80){ 
			return `La vaquita se siente ${mejor} al pasar los años, porque siempre ha viajado en ${transporte}.`
		} else {
			return `la vaca grosera, que siempre viajaba en ${transporte} partio hacia un lugar ${lugar}, estaba triste porque el clima estaba ${clima}. ` 
		}
	}

}
