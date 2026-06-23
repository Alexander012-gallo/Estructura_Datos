class RegistroCalificaciones {
  constructor(nombreCurso) {
    this.nombreCurso = nombreCurso;
    this.calificaciones = []; // arreglo de objetos { estudiante, nota }
  }

  registrar(estudiante, nota) {
    const notaValida = nota >= 0 && nota <= 10;

    if (!notaValida) {
      console.log(`Nota inválida para ${estudiante}: debe estar entre 0 y 10.`);
      return;
    }

    this.calificaciones.push({ estudiante, nota });
  }

  calcularPromedio() {
    if (this.calificaciones.length === 0) return 0;

    const sumaTotal = this.calificaciones.reduce(
      (acumulado, registro) => acumulado + registro.nota,
      0
    );

    return Number((sumaTotal / this.calificaciones.length).toFixed(2));
  }

  obtenerMejorNota() {
    return this.calificaciones.reduce((mejorNota, actual) =>
      actual.nota > mejorNota.nota ? actual : mejorNota
    );
  }

  obtenerPeorNota() {
    return this.calificaciones.reduce((peorNota, actual) =>
      actual.nota < peorNota.nota ? actual : peorNota
    );
  }

  obtenerAprobados() {
    const NOTA_MINIMA_APROBATORIA = 7;
    return this.calificaciones.filter(
      (registro) => registro.nota >= NOTA_MINIMA_APROBATORIA
    );
  }

  mostrarResumen() {
    console.log(`\nResumen del curso: ${this.nombreCurso}`);
    console.log(`Total de estudiantes registrados: ${this.calificaciones.length}`);
    console.log(`Promedio general: ${this.calcularPromedio()}`);
    console.log(`Mejor nota:`, this.obtenerMejorNota());
    console.log(`Peor nota:`, this.obtenerPeorNota());
    console.log(`Aprobados: ${this.obtenerAprobados().length} de ${this.calificaciones.length}`);
  }
}

const curso = new RegistroCalificaciones("Estructuras de Datos");

curso.registrar("Ana", 9);
curso.registrar("Luis", 6);
curso.registrar("Marta", 8.5);
curso.registrar("Pedro", 4);
curso.registrar("Sofía", 7);
curso.registrar("Carlos", 12); // caso inválido, para probar la validación

curso.mostrarResumen();