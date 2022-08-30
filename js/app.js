class paciente {
    constructor(nombre, apellido, edad, email, telefono, direccion, motivodeconsulta, id){
this.nombre = nombre;
this.apellido = apellido;
this.edad = edad;
this.email = email;
this.telefono = telefono;
this.direccion = direccion;
this.motivodeconsulta = motivodeconsulta;
this.id = id;

    }
}

const pacientes = [];
let option = 0;
do {
    option = parseInt(
        prompt("ingrese \n 1 para agregar paciente \n 2 para ver todos los pacientes \n 3 consultar paciente \n 8 para salir")
        );
    switch (option) {
        case 1: 
        agregarPaciente(pacientes);
        break;
        case 2: 
        verTodosLosPacientes(pacientes);
        break;
        case 3:
        consultarPacientes(pacientes);
        break;
        default:
        alert ("opcion incorrecta");
        break;
    }
}  while (option != 8);



//agregar

function agregarPaciente(pacientes) {
let nombre = prompt("ingrese nombre");
let apellido = prompt("ingrese apellido");
let edad = parseInt(prompt("ingrese edad"));
let email = prompt("ingrese email");
let telefono = parseInt(prompt("ingrese telefono"));
let direccion = prompt("ingrese direccion");
let motivodeconsulta = prompt("ingrese motivo de consulta: \n - blanqueamiento \n - ortodoncia \n - control general \n - extraccion");
let newUser = new paciente(nombre, apellido, edad, email, telefono, direccion, motivodeconsulta, pacientes.length + 1);
pacientes.push(newUser);
console.log("se agrego usuario", newUser);
}

//ver todos
function verTodosLosPacientes(pacientes) {
    for (const paciente of pacientes) {
    console.log(paciente);
   }
}

// ver paciente 
function consultarPacientes(pacientes) {
    let texto = "";
    for (let index = 0; index < pacientes.length; index++) {
        texto = texto.concat(
        `Ingrese ${index + 1} para el paciente ${pacientes[index].nombre} \n`
        );
    }
    console.log(texto);
    const option = parseInt(prompt(texto));
    console.log(pacientes[option - 1]);
}
