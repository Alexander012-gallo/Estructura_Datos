class NodoTrie {
    constructor() {
        this.hijos = new Map();
        this.esFinDePalabra = false;
    }
}

class MotorAutocompletado {
    constructor() {
        this.raiz = new NodoTrie();
    }

    insertarTermino(termino) {
        let actual = this.raiz;
        const palabra = termino.toLowerCase();
        for (const char of palabra) {
            if (!actual.hijos.has(char)) {
                actual.hijos.set(char, new NodoTrie());
            }
            actual = actual.hijos.get(char);
        }
        actual.esFinDePalabra = true;
    }

    buscarNodoPrefijo(prefijo) {
        let actual = this.raiz;
        const p = prefijo.toLowerCase();
        for (const char of p) {
            if (!actual.hijos.has(char)) return null;
            actual = actual.hijos.get(char);
        }
        return actual;
    }

    obtenerSugerencias(prefijo) {
        const resultados = [];
        const nodoInicial = this.buscarNodoPrefijo(prefijo);
        if (nodoInicial) {
            this.dfsExtraerPalabras(nodoInicial, prefijo.toLowerCase(), resultados);
        }
        return resultados;
    }

    dfsExtraerPalabras(nodo, palabraActual, resultados) {
        if (nodo.esFinDePalabra) resultados.push(palabraActual);
        for (const [char, hijo] of nodo.hijos) {
            this.dfsExtraerPalabras(hijo, palabraActual + char, resultados);
        }
    }
}

// --- INSTANCIACIÓN ÚNICA ---
const motor = new MotorAutocompletado();
const diccionario = ["paquete_express", "postal_nacional", "prioritario", "estandar", "perecedero"];

diccionario.forEach(termino => motor.insertarTermino(termino));
console.log("Diccionario cargado exitosamente.");

// --- ZONA DE PRUEBAS ---
console.log("\n--- Búsqueda Manual ---");
console.log("Sugerencias para 'p':", motor.obtenerSugerencias("p"));
console.log("Sugerencias para 'pa':", motor.obtenerSugerencias("pa"));
console.log("Sugerencias para 'pos':", motor.obtenerSugerencias("pos"));

const prefijosPrueba = ["p", "pa", "pos", "e", "pe"];

console.log("\n--- Simulación de Bucle de Búsqueda (Carga de Trabajo) ---");
prefijosPrueba.forEach(prefijo => {
    console.time(`Tiempo_Busqueda_${prefijo}`);
    const resultados = motor.obtenerSugerencias(prefijo);
    console.timeEnd(`Tiempo_Busqueda_${prefijo}`);
    console.log(` -> Sugerencias para '${prefijo}':`, resultados);
});