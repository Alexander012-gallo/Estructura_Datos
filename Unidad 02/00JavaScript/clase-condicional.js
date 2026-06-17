/**
 * Condicionales
 * 
 * Las condicionales son estructuras que me permiten evaluar 
 * reglas de negocio, por lo tanto las aplicamos al definir caracteristicass especificas
 * en nuestro progama para que ejecute y toma decisiones si se cumplen o no ciertas reglas.
 * 
 */

let edad = 18
if (edad >=18){
    // Código para ejecutar si la condición es verdadera
    console.log("Mayor de edad")
}

if (edad >= 18){
    // Código para ejecutar si la condición es verdadera
    console.log("Mayor de edad")
} else {
    // código para ejecutar si la condición es falsa
    console.log("Menor de edad")
}


let edad1 = 10
if (edad1 >=18) {
  // Código para ejecutar si la condicion1 es verdadera
  console.log("Joven")
} else if (edad1 > 30) {
  // Código para ejecutar si la condicion1 es falsa y la cóndición es verdadera
  console.log("Señor")
} else {
  // Código para ejecutar si la condicion1 es falsa y la condicion2 es falsas
  console.log("Niñ@")
}

// Se usa switch para especificas varios bloques de códigos alternativos
const mes = "Julio"
switch(mes){
    case "Enero":
    case "Febreo":
    case "Marzo":
        console.log("Primavera")
        break;
    case "Abril":
    case "Mayo":
    case "Junio":
        console.log("Otoño")
        break;
    default:
        console.log("Otra estación")
}


// Operador Ternario
condition3 ? expression1 : expression2

let mensaje;

if (edad => 18){
    mensaje = console.log("Eres mayor de edad")
} else {
    mensaje = console.log("Eres menor de edad")
}
console.log(mensaje)

let mensaje1 = edad >=18 ? "Eres mayor de edad" : "Eres menor de edad"
console.log(mensaje1)