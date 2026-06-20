const SistemaInventario = () => {

    const inventario = [
        { codigo:"P001", nombre:"Laptop", valor:800, stock:5, fecha:"2026-01-10" },
        { codigo:"P002", nombre:"Mouse", valor:25, stock:10, fecha:"2026-01-12" },
        { codigo:"P003", nombre:"Teclado", valor:45, stock:3, fecha:"2026-01-15" },
        { codigo:"P004", nombre:"Monitor", valor:300, stock:2, fecha:"2026-01-18" }
    ];

    let carrito = [];
    let historial = [];
    const buscarProducto = codigo =>
        inventario.find(p => p.codigo === codigo);

    const ordenarPorFecha = productos =>
        [...productos].sort(
            (a,b)=> new Date(a.fecha)-new Date(b.fecha)
        );

    const calcularTotal = productos =>
        productos.reduce(
            (total,p)=> total + (p.valor*p.cantidad),
            0
        );

    const agregarProducto = (codigo,cantidad)=>{
        const producto = buscarProducto(codigo);
        if(!producto)
            return {error:"Producto no existe"};
        if(cantidad <= 0)
            return {error:"Cantidad inválida"};
        if(producto.stock < cantidad)
            return {error:"Stock insuficiente"};
        const existe =
            carrito.find(p=>p.codigo===codigo);
        if(existe){
            existe.cantidad += cantidad;
        }else{
            carrito.push({
                codigo:producto.codigo,
                nombre:producto.nombre,
                valor:producto.valor,
                cantidad,
                fecha:producto.fecha
            });
        }
        return {
            mensaje:"Producto agregado correctamente"
        };
    };

    const obtenerCarrito = ()=>({
        productos:[...carrito],
        total:calcularTotal(carrito)
    });

    const realizarCompra = ()=>{
        if(carrito.length===0)
            return {
                error:"Carrito vacío"
            };
        const productosCompra =
            ordenarPorFecha(carrito);

        productosCompra.forEach(item=>{
            const producto =
                buscarProducto(item.codigo);
            producto.stock -= item.cantidad;
        });

        const total =
            calcularTotal(productosCompra);
        historial.push({
            fecha:new Date(),
            productos:productosCompra,
            total
        });
        carrito=[];
        return {
            mensaje:"Compra realizada",
            productos:productosCompra,
            total
        };
    };

    const obtenerInventario = () =>
        ordenarPorFecha(inventario);
    const obtenerHistorial = () =>
        historial;
    return {
        agregarProducto,
        obtenerCarrito,
        realizarCompra,
        obtenerInventario,
        obtenerHistorial
    };
};

const readline = require("readline");
const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const preguntar = texto => {
    return new Promise(resolve => {
        entrada.question(texto, respuesta => {
            resolve(respuesta);
        });
    });
};

const sistema = SistemaInventario();

async function menu(){
    let opcion = await preguntar(`

    SISTEMA DE INVENTARIO

    1. Ver inventario
    2. Agregar producto al carrito
    3. Ver carrito
    4. Realizar compra
    5. Ver historial
    6. Salir

    Seleccione opción: 

    `);

    switch(opcion){

        case "1":
            console.table(
                sistema.obtenerInventario()
            );
            break;

        case "2":
            const codigo =
                await preguntar(
                    "Código del producto: "
                );
            const cantidad =
                Number(
                    await preguntar(
                        "Cantidad: "
                    )
                );
            console.log(
                sistema.agregarProducto(
                    codigo,
                    cantidad
                )
            );
            break;

        case "3":
            const carrito =
                sistema.obtenerCarrito();

            console.table(
                carrito.productos
            );

            console.log(
                "Total:",
                carrito.total
            );
            break;

        case "4":
            console.log(
                sistema.realizarCompra()
            );
            break;

        case "5":
            console.table(
                sistema.obtenerHistorial()
            );
            break;

        case "6":
            console.log(
                "Sistema finalizado"
            );
            entrada.close();
            return;
        default:
            console.log(
                "Opción inválida"
            );
    }
    menu();
}
menu();