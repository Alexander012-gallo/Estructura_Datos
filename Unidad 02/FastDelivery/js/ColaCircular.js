class ColaCircular {

    // Constructor de la cola circular
    constructor(capacidad) {
        // Arreglo que almacenará los pedidos
        this.cola = new Array(capacidad);
        // Capacidad máxima de la cola
        this.capacidad = capacidad;
        // Puntero al primer elemento de la cola
        this.inicio = 0;
        // Puntero a la siguiente posición disponible para insertar
        this.fin = 0;
        // Cantidad actual de elementos almacenados
        this.cantidad = 0;
    }

    // Verifica si la cola no contiene elementos
    estaVacia() {
        return this.cantidad === 0;
    }

    // Verifica si la cola alcanzó su capacidad máxima
    estaLlena() {
        return this.cantidad === this.capacidad;
    }

    // Inserta un nuevo pedido al final de la cola
    encolar(pedido) {
        // Si la cola está llena no permite insertar
        if (this.estaLlena()) {
            return false;
        }

        // Guarda el pedido en la posición indicada por el puntero fin
        this.cola[this.fin] = pedido;
        // Avanza el puntero fin de forma circular
        this.fin = (this.fin + 1) % this.capacidad;
        // Incrementa la cantidad de pedidos almacenados
        this.cantidad++;
        return true;
    }

    // Elimina y devuelve el primer pedido de la cola
    desencolar() {
        // Si la cola está vacía no existe ningún pedido para eliminar
        if (this.estaVacia()) {
            return null;
        }

        // Obtiene el pedido ubicado al inicio de la cola
        const pedido = this.cola[this.inicio];
        // Libera la posición ocupada
        this.cola[this.inicio] = null;
        // Avanza el puntero inicio de forma circular
        this.inicio = (this.inicio + 1) % this.capacidad;
        // Disminuye la cantidad de pedidos
        this.cantidad--;
        // Retorna el pedido eliminado
        return pedido;
    }

    // Devuelve el primer pedido sin eliminarlo de la cola
    peek() {
        // Si la cola está vacía retorna null
        if (this.estaVacia()) {
            return null;
        }
        return this.cola[this.inicio];
    }

    // Obtiene todos los pedidos almacenados respetando el orden FIFO
    obtenerPedidos() {
        let pedidos = [];
        // Comienza el recorrido desde el inicio de la cola
        let indice = this.inicio;
        // Recorre únicamente los elementos existentes
        for (let i = 0; i < this.cantidad; i++) {
            // Agrega cada pedido al arreglo auxiliar
            pedidos.push(this.cola[indice]);
            // Avanza circularmente al siguiente elemento
            indice = (indice + 1) % this.capacidad;
        }
        // Retorna el arreglo con los pedidos
        return pedidos;
    }

    // Devuelve la cantidad actual de pedidos
    obtenerCantidad() {
        return this.cantidad;
    }

    // Devuelve la capacidad máxima de la cola
    obtenerCapacidad() {
        return this.capacidad;
    }
}