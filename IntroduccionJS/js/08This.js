// This

const reservacion = {
    nombre : 'Felipe',
    apellido : 'Peralta',
    total : 250,
    pagado : false,

    informacion : function () {
        console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es ${this.total}`)
    }
}

reservacion.informacion();