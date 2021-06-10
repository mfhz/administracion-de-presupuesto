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
    insertarPresupuesto(cantidad) {
        // console.log(cantidad);
        // Extraer valores
        const { presupuesto, restante } = cantidad;
        // Agregar al HTML
        document.querySelector('#total').textContent = presupuesto; 
        document.querySelector('#restante').textContent = restante; 
    }
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

    ui.insertarPresupuesto(presupuesto);
}