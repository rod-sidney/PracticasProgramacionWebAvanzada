
class Mascota {
    constructor(nombre, especie, edad, vacunado) {
        this.nombre = nombre;
        this.especie = especie;
        this.edad = edad;
        this.vacunado = vacunado;
    }
}

// Arreglo de objetos Mascota
const mascotas = [];

// Registrar una mascota formulario
function registrarMascota(evento) {
    evento.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const especie = document.getElementById("especie").value;
    const edad = Number(document.getElementById("edad").value);
    const vacunado = document.querySelector(
        'input[name="vacunado"]:checked'
    ).value === "true";

    const mascota = new Mascota(nombre, especie, edad, vacunado);

    mascotas.push(mascota);

    console.log(mascotas);

    document.getElementById("formMascota").reset();
}

// Conectar el formulario cuando cargue HTML
document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formMascota");

    formulario.addEventListener("submit", registrarMascota);
});
