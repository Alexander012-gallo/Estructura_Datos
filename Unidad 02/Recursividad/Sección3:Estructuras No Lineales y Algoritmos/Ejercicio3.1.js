class NodoArbol {
    constructor(valor) {
        this.valor = valor;
        this.izquierdo = null;
        this.derecho = null;
    }
}

function recorridoPreorden(raiz) {
    if (!raiz) return [];
    // Orden: Raíz -> Izquierdo -> Derecho
    return [raiz.valor, ...recorridoPreorden(raiz.izquierdo), ...recorridoPreorden(raiz.derecho)];
}

function recorridoInorden(raiz) {
    if (!raiz) return [];
    // Orden: Izquierdo -> Raíz -> Derecho
    return [...recorridoInorden(raiz.izquierdo), raiz.valor, ...recorridoInorden(raiz.derecho)];
}

function recorridoPostorden(raiz) {
    if (!raiz) return [];
    // Orden: Izquierdo -> Derecho -> Raíz
    return [...recorridoPostorden(raiz.izquierdo), ...recorridoPostorden(raiz.derecho), raiz.valor];
}

// Ejemplo de uso:
const raiz = new NodoArbol(1);
raiz.izquierdo = new NodoArbol(2);
raiz.derecho = new NodoArbol(3);
raiz.izquierdo.izquierdo = new NodoArbol(4);

console.log("Preorden:", recorridoPreorden(raiz));   // [1, 2, 4, 3]
console.log("Inorden:", recorridoInorden(raiz));     // [4, 2, 1, 3]
console.log("Postorden:", recorridoPostorden(raiz)); // [4, 2, 3, 1]