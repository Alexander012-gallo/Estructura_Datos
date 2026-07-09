// --- CLASE NODO ---
/**
 * Representa un nodo individual dentro de la estructura Trie.
 */
class NodoTrie {
    constructor() {
        this.hijos = new Map();
        // Falta esta línea para cerrar la lógica de la propiedad:
        this.esFinDePalabra = false; 
    }
}
// --- CLASE MOTOR DE AUTOCOMPLETADO ---
/**
 * Clase que gestiona la lógica de inserción, búsqueda y recuperación de términos.
 */
class MotorAutocompletado {
    constructor() {
        // Inicializa la raíz del árbol como un nodo vacío
        this.raiz = new NodoTrie();
    }

    /**
     * Inserta un término en el árbol Trie.
     * @param {string} termino - La cadena que se desea añadir al diccionario.
     */
    insertarTermino(termino) {
        let actual = this.raiz; // Comienza desde la raíz del árbol
        const palabra = termino.toLowerCase(); // Convierte a minúsculas para estandarizar
        for (const char of palabra) { // Itera sobre cada letra de la palabra
            if (!actual.hijos.has(char)) { // Si el camino no existe
                actual.hijos.set(char, new NodoTrie()); // Crea una nueva rama (nodo)
            }
            actual = actual.hijos.get(char); // Se desplaza al siguiente nodo
        }
        actual.esFinDePalabra = true; // Marca el último nodo como final de una palabra válida
    }

    /**
     * Localiza el nodo correspondiente al prefijo dado.
     * @param {string} prefijo - La cadena base sobre la cual buscar.
     * @returns {NodoTrie|null} Retorna el nodo si el prefijo existe, o null si no.
     */
    buscarNodoPrefijo(prefijo) {
        let actual = this.raiz; // Comienza desde la raíz
        const p = prefijo.toLowerCase(); // Normaliza el prefijo de búsqueda
        for (const char of p) { // Itera por cada letra del prefijo
            if (!actual.hijos.has(char)) return null; // Si no encuentra una letra, el prefijo no existe
            actual = actual.hijos.get(char); // Avanza al siguiente nivel
        }
        return actual; // Devuelve el nodo donde termina el prefijo encontrado
    }

    /**
     * Obtiene una lista de palabras que coinciden con el prefijo dado.
     * @param {string} prefijo - El prefijo para buscar sugerencias.
     * @returns {string[]} Array de palabras encontradas.
     */
    obtenerSugerencias(prefijo) {
        const resultados = []; // Inicializa un array vacío para los resultados
        const nodoInicial = this.buscarNodoPrefijo(prefijo); // Encuentra el punto de inicio en el árbol
        if (nodoInicial) { // Si el prefijo existe
            // Llama a la función recursiva para explorar todas las ramas a partir de este nodo
            this.dfsExtraerPalabras(nodoInicial, prefijo.toLowerCase(), resultados);
        }
        return resultados; // Retorna la lista de sugerencias completas
    }

    /**
     * Recorrido en profundidad (DFS) para extraer palabras.
     * @param {NodoTrie} nodo - Nodo actual de procesamiento.
     * @param {string} palabraActual - La palabra construida hasta el momento.
     * @param {string[]} resultados - Referencia al array de resultados.
     */
    dfsExtraerPalabras(nodo, palabraActual, resultados) {
        if (nodo.esFinDePalabra) resultados.push(palabraActual); // Si es palabra completa, la guarda
        for (const [char, hijo] of nodo.hijos) { // Itera sobre todos los caracteres hijos del nodo
            // Llamada recursiva agregando el carácter actual a la palabra en construcción
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

// Lista de prefijos para simular la interacción del usuario
const prefijosPrueba = ["p", "pa", "pos", "e", "pe"];

console.log("\n--- Simulación de Bucle de Búsqueda (Carga de Trabajo) ---");
// Itera por los prefijos para medir el tiempo de respuesta y mostrar resultados
prefijosPrueba.forEach(prefijo => {
    console.time(`Tiempo_Busqueda_${prefijo}`); // Inicia medición de latencia
    const resultados = motor.obtenerSugerencias(prefijo); // Ejecuta búsqueda
    console.timeEnd(`Tiempo_Busqueda_${prefijo}`); // Finaliza medición y muestra tiempo
    console.log(` -> Sugerencias para '${prefijo}':`, resultados); // Muestra los resultados obtenidos

});