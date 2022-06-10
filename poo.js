let user = {
    name: 'Federico',
    lastname: 'Lopez Pondal',
    age: 26,
    active: true
}

// OBTENIENDO VALORES DEL OBJETO
console.log(user.name);

// AGREGAGANO PROPIEDADES AL OBJETO
user.genre = 'Male';

// MODIFICANDO VALORES DE LAS PROPIEDADES DEL OBJETO
user.lastname = 'Busquets';

// ELIMINANDO PROPIEDAS DEL OBJETO
delete user.age;