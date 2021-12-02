
let nombre = prompt("Ingresa tu Nombre");

if (!nombre) {
    alert('El nombre es obligatorio')

}else {
}
console.log(nombre.toUpperCase())
console.log(nombre[0])

console.log(nombre)

let apellido = prompt("Ingresa tu Apellido");

if (!apellido) {
    alert('El apellido es obligatorio')

}else {
}
console.log(apellido.toUpperCase())
console.log(apellido[0])

console.log(apellido)

let edad= prompt("Ingresa tu Edad");
edad = parseInt(edad) 

if (edad <=18){
    alert('Debes ser mayor de 18 años para ingresar a este sitio')
}
