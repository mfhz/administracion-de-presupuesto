// Variables y Selectores
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');



// Eventos
function eventListeners() {
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
    formulario.addEventListener('submit', agregarGasto);
}
eventListeners();



// Clases

class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = presupuesto;
        this.restante = presupuesto;
        this.gastos = [];
    }

    nuevoGasto(gasto) {
        this.gastos = [...this.gastos, gasto];
        console.log(this.gastos);
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

    imprimirAlerta(mensaje, tipo) {
        // crear el div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert');

        if (tipo === 'error') {
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alert-success');            
        }

        // Guardar el mensaje ya sea error o exitoso
        divMensaje.textContent = mensaje;

        //Insertar mensaje en el HTML
        document.querySelector('.primario').insertBefore(divMensaje, formulario);

        // Quitar mensaje del HTML
        setTimeout(() => {
            divMensaje.remove();
        }, 2000)
    }

    agregarGastoListado(gastos) {

        this.limpiarHTML(); //Elimina el HTML previo

        // Iterar los gastos
        gastos.forEach((gasto) => {
            const { cantidad, nombre , id } = gasto;

            // Crear LI
            const nuevoGasto = document.createElement('li');
            nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center';
            nuevoGasto.dataset.id = id;

            // Agregar el HTML del gasto
            nuevoGasto.innerHTML = `
                ${nombre} <span class="badge badge-primary badge-pill"> ${cantidad} </span>
            `;

            // Botón para borrar el gasto
            const btnBorrar = document.createElement('button');
            btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto');     
            btnBorrar.innerHTML = 'Borrar &times';       
            nuevoGasto.appendChild(btnBorrar);

            // Agregar al HTML
            gastoListado.appendChild(nuevoGasto);
        });
    }

    limpiarHTML() {
        while (gastoListado.firstChild) {
            gastoListado.removeChild(gastoListado.firstChild);
        }
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


function agregarGasto(e) {
    e.preventDefault();

    // Leer los datos del formulario
    const nombre = document.querySelector('#gasto').value;
    const cantidad = Number(document.querySelector('#cantidad').value);

    //validar
    if (nombre === '' || cantidad === '') {
        ui.imprimirAlerta('Ambos campos son obligatorios', 'error');
        return;
    } else if (cantidad <= 0 || isNaN(cantidad)) {
        ui.imprimirAlerta('Cantidad no valida', 'error');
        return;
    }

    // Generar un objeto con el gasto
    const gasto = { nombre, cantidad, id: Date.now() }

    // AÑade un nuevo gasto
    presupuesto.nuevoGasto(gasto);

    // Mensaje de ok
    ui.imprimirAlerta('Gasto agregado correctamente');

    // Imprimir los gastos
    const { gastos } = presupuesto;
    ui.agregarGastoListado(gastos);

    // Reiniciar el formulario
    formulario.reset();


}