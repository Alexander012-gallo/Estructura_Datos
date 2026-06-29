// Se crea la cola circular con capacidad de 10 pedidos
const cola = new ColaCircular(10);

// Generador de códigos únicos para pedidos
let contador = 1;

// ELEMENTOS DEL HTML (DOM)

// Referencias a los campos del formulario
const txtCliente = document.getElementById("cliente");
const txtProducto = document.getElementById("producto");
const txtDireccion = document.getElementById("direccion");
const txtTelefono = document.getElementById("telefono");

// Botones del sistema
const btnRegistrar = document.getElementById("btnRegistrar");
const btnSiguiente = document.getElementById("btnSiguiente");
const btnDespachar = document.getElementById("btnDespachar");

// Elementos de visualización
const tablaPedidos = document.getElementById("tablaPedidos");
const estadoCola = document.getElementById("estadoCola");

// EVENTOS DEL SISTEMA

// Asignación de acciones a los botones
btnRegistrar.addEventListener("click", registrarEntrega);
btnSiguiente.addEventListener("click", verSiguienteEntrega);
btnDespachar.addEventListener("click", despacharEntrega);

// REGISTRAR PEDIDO (ENCOLAR)
function registrarEntrega() {

    // Obtener datos del formulario
    const cliente = txtCliente.value.trim();
    const producto = txtProducto.value;
    const direccion = txtDireccion.value.trim();
    const telefono = txtTelefono.value.trim();

    // Validación de campos obligatorios
    if (cliente === "" || direccion === "" || telefono === "") {
        alert("Complete todos los campos.");
        return;
    }

    // Generación de código único
    const codigo = "D" + String(contador).padStart(3, "0");
    contador++;

    // Creación del objeto pedido
    const pedido = new Pedido(
        codigo,
        cliente,
        producto,
        direccion,
        telefono
    );

    // Inserción en la cola circular (FIFO)
    if (!cola.encolar(pedido)) {
        alert("La cola está llena.");
        return;
    }

    // Actualización de interfaz
    limpiarFormulario();
    actualizarTabla();
    actualizarEstado();
}


// DESPACHAR PEDIDO (DESENCOLAR)
function despacharEntrega() {

    // Se elimina el primer pedido de la cola (FIFO)
    const pedido = cola.desencolar();

    // Validación de cola vacía
    if (pedido == null) {
        alert("No existen entregas pendientes.");
        return;
    }

    alert("Entrega despachada: " + pedido.codigo);

    // Actualización de interfaz
    actualizarTabla();
    actualizarEstado();
}


// VER SIGUIENTE PEDIDO (PEEK)
function verSiguienteEntrega() {

    // Consultar el primer pedido sin eliminarlo
    const pedido = cola.peek();

    // Validación de cola vacía
    if (pedido == null) {
        alert("No existen entregas pendientes.");
        return;
    }

    // Mostrar información del siguiente pedido
    alert(
        "Siguiente entrega\n\n" +
        pedido.codigo +
        "\nCliente: " +
        pedido.cliente +
        "\nProducto: " +
        pedido.producto
    );
}


// ACTUALIZAR TABLA (INTERFAZ)
function actualizarTabla() {

    // Limpiar tabla HTML
    tablaPedidos.innerHTML = "";

    // Obtener todos los pedidos en orden FIFO
    const pedidos = cola.obtenerPedidos();

    // Pintar los pedidos en la tabla
    pedidos.forEach(pedido => {
        tablaPedidos.innerHTML += `
            <tr>
                <td>${pedido.codigo}</td>
                <td>${pedido.cliente}</td>
                <td>${pedido.producto}</td>
                <td>${pedido.direccion}</td>
                <td>${pedido.telefono}</td>
            </tr>
        `;
    });
}


// ACTUALIZAR ESTADO DE LA COLA
function actualizarEstado() {

    // Muestra cantidad de pedidos vs capacidad total
    estadoCola.textContent =
        "Entregas: " +
        cola.obtenerCantidad() +
        " / " +
        cola.obtenerCapacidad();
}


// LIMPIAR FORMULARIO
function limpiarFormulario() {

    // Reset de campos del formulario
    txtCliente.value = "";
    txtDireccion.value = "";
    txtTelefono.value = "";
    txtProducto.selectedIndex = 0;
}