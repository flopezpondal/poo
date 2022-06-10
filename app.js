// PROTOTIPOS Y CLASES
class Usuario{
    constructor(nombre, apellido, edad, genero){
        this.nombre = nombre,
        this.apellido = apellido,
        this.edad = edad,
        this.genero = genero
    }
    hablar(){
        console.log(`${this.nombre} esta hablando`);
    }
}

let federico = new Usuario('Federico', 'Lopez Pondal', 26, 'Hombre');
let pablo = new Usuario('Pablo', 'Perez', 30, 'Hombre');

class Mentor extends Usuario{
    constructor(nombre, apellido, edad, genero, tipo){
        super(nombre, apellido, edad, genero),
        this.tipo = tipo
    }   
    tipoFormateado(){
        return `Tipo de contratacion ${this.tipo}`;
    } 
}