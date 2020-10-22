let keystone = require('keystone');
let Types = keystone.Field.Types;

let Preceptor = new keystone.List('Preceptor', {
    map: { name: 'dni' },
    singular: 'Preceptor',
    plural: 'Preceptores',
    autokey: { path: 'slug', from: 'dni', unique: true }
});

Preceptor.add({
    dni: { type: String, required: true },
    nombre: String,
    apellido: String,
});

Preceptor.register();