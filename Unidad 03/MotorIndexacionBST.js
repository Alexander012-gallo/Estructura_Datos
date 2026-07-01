class NodoBusqueda {
    constructor(Keyword, urlCache) {
        this.Keyword = Keyword
        this.urlCache = urlCache
        this.visitas = 1
        this.izquierdo = null
        this.derecho = null
    }
}

class MotorIndexaciónBST {
    constructor() {
        this.raiz = null
    }

    indexar(Keyword, urlCache) {
        const nuevoNodo = NodoBusqueda(Keyword, urlCache)
        if (this.raiz == null) {
            this.raiz = nuevoNodo
            return
        }

        let actual = this.raiz
        while (true) {
            if (Keyword === actual.Keyword) {
                actual.visitas++
                return
            } else if (Keyword < actual.Keyword) {
                if (actual.izquierdo === null) {
                    actual.izquierdo = nuevoNodo
                    return
                }
                actual = actual.izquierdo

            } else {
                if (actual.derecho === null) {
                    actual.derecho = nuevoNodo
                    return
                }
                actual = actual.derecho
            }
        }
    }
    
    insertar(nodoActual, nuevoNodo){
        if (nodoActual === null){
            return nuevoNodo
        } if(nuevoNodo.Keyword < nodoActual.Keyword){
            nodoActual.izquierdo = this.insertar(nodoActual.izquierdo, nuevoNodo)
        } else if (nuevoNodo.Keyword > nodoActual.Keyword){
            nodoActual.derecho = insertar(nodoActual.derecho, nuevoNodo)
        } 
        return nodoActual
    }
}