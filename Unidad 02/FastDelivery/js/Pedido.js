class Pedido {
    // Constructor de la clase Pedido
    constructor(codigo, cliente, producto, direccion, telefono) {
        // Código único del pedido (ej: D001)
        this.codigo = codigo;
        // Nombre del cliente que realiza el pedido
        this.cliente = cliente;
        // Producto solicitado
        this.producto = producto;
        // Dirección de entrega del pedido
        this.direccion = direccion;
        // Número de contacto del cliente
        this.telefono = telefono;
    }
}