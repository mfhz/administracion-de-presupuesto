// Variables y Selectores
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');


// Eventos
function eventListeners() {
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
}
eventListeners();



// Clasess



// Funciones

function preguntarPresupuesto() {
    const presupuestoUsuario = Number(prompt('Cual es tu presupuesto?'));
    if (presupuestoUsuario == '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0) {
        window.location.reload();
    }
}