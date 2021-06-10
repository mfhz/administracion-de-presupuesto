// Variables y Selectores
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');



// Eventos
function eventListeners() {
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
}
eventListeners();



// Clases

class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = presupuesto;
        this.restante = presupuesto;
        this.gastos = [];
    }
}

class UI {

}


// Instanciar
let presupuesto;
const ui = new UI();




// Funciones

function preguntarPresupuesto() {
    const presupuestoUsuario = Number(prompt('Cual es tu presupuesto?'));
    if (presupuestoUsuario == '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0) {
        window.location.reload();
    }

    presupuesto = new Presupuesto(presupuestoUsuario);
    // console.log(presupuesto);
}