// // ! Implementacion plana principiante
// const stuff = {
//     '1': { apellido: 'Gan', nombres: 'Fernando Martin', grupo: 'OSM', observ: ['Operador Sala Maquinas'], credencial: function () { return `${this[1].apellido}, ${this[1].nombres} (${this[1].grupo}) - ${this[1].observ}` } },
//     '2': { apellido: 'Melendi', nombres: 'Maria', grupo: 'DIR', observ: ['Jefa'], credencial: function () { return `${this[1].apellido}, ${this[1].nombres} (${this[1].grupo}) - ${this[1].observ}` } },
//     '3': { apellido: 'Rene', nombres: '..', grupo: 'STUF', observ: ['Vestuarista', 'Mantenimiento Pileta'], credencial: function () { return `${this[1].apellido}, ${this[1].nombres} (${this[1].grupo}) - ${this[1].observ}` } },
//     '4': { apellido: 'Karime', nombres: '..', grupo: 'STUFF', observ: ['Guarda Vidas ', 'Profesora'], credencial: function () { return `${this[1].apellido}, ${this[1].nombres} (${this[1].grupo}) - ${this[1].observ}` } },
//     '5': { apellido: 'Sandra', nombres: 'Mam Rene', grupo: 'STUFF', observ: ['Maestranza'], credencial: function () { return `${this[1].apellido}, ${this[1].nombres} (${this[1].grupo}) - ${this[1].observ}` } },
//     '6': { apellido: 'Older', nombres: 'Vicky', grupo: 'ADM', observ: ['Administracion', 'Recepcionista'], credencial: function () { return `${this[1].apellido}, ${this[1].nombres} (${this[1].grupo}) - ${this[1].observ}` } },
//     '7': { apellido: 'Ta', nombres: 'Tamara', grupo: 'ADM', observ: ['Recepcionista'], credencial: function () { return `${this[1].apellido}, ${this[1].nombres} (${this[1].grupo}) - ${this[1].observ}` } }
// };
// // Ejemplo de cómo acceder a la información de un elemento del objeto
// const operador = `${stuff[1].apellido}, ${stuff[1].nombres} (${stuff[1].grupo}) - ${stuff[1].observ}`


// ! Implemntacion tipo clase avanzada
class Usuario {
    constructor(id, apellido, nombres, grupo, observ) {
        this.id = id;
        this.apellido = apellido;
        this.nombres = nombres;
        this.grupo = grupo;
        this.observ = observ;
    }

    credencial() {
        return `${this.apellido}, ${this.nombres} (${this.grupo}) - ${this.observ.join(', ')}`;
    }
}

Usuario.prototype.actividades = function () {
    let vStr = '';
    for (const actividad of this.observ) {
        if (vStr === '') {
            vStr = `Este usuario tiene las siguientes actividades : ( ${actividad}`;
        } else {
            vStr += `, ${actividad}`;
        }
    }
    vStr += `).`;
    // Devolviendo armado de actividades
    return vStr;
}

const usuarios = {
    '1': new Usuario(1, 'Gan', 'Fernando Martin', 'OSM', ['Operador Sala Maquinas']),
    '2': new Usuario(2, 'Melendi', 'Maria', 'DIR', ['Jefa']),
    '3': new Usuario(3, 'Rene', '..', 'STUF', ['Vestuarista', 'Mantenimiento Pileta']),
    '4': new Usuario(4, 'Karime', '..', 'STUFF', ['Guarda Vidas', 'Profesora']),
    '5': new Usuario(5, 'Sandra', 'Mam Rene', 'STUFF', ['Maestranza']),
    '6': new Usuario(6, 'Older', 'Vicky', 'ADM', ['Administracion', 'Recepcionista', 'Compras']),
    '7': new Usuario(7, 'Ta', 'Tamara', 'ADM', ['Recepcionista']),
};

// const usuario = usuarios['6']; // Por ejemplo, seleccionamos un usuario específico
// const nataStuffA = usuario.actividades();
// console.log(nataStuffA);
// console.log('');

// --.--.--.--.--.--.--.--.--.--.--.--.--.--.--.--.--.--.--.--.--.--.--.--.--.--
// Ejemplo de For In que se usa para ver las propiedades de los objetos
const objeto = {
    nombre: 'Juan',
    edad: 30,
    ciudad: 'México'
  };
  
  for (const propiedad in objeto) {
    console.log(propiedad); // Muestra las claves (propiedades) del objeto
  }
  
// Ejemplo de for off
const numeros = [1, 2, 3, 4, 5];

for (const numero of numeros) {
  console.log(numero); // Muestra los valores del array
}
// En el primer ejemplo (for...in), estamos recorriendo las propiedades de un objeto (nombre, edad, ciudad) y mostrando sus claves (propiedades) en la consola.
// En el segundo ejemplo (for...of), estamos recorriendo los valores de un array (numeros) y mostrando los valores en la consola.
// --.--.--.--.--.--.--.--.--.--.--.--.--.--.--.--.--.--.--.--.--.--.--.--.--.--





