let keystone = require('keystone');
let Types = keystone.Field.Types;

let Observacion = new keystone.List('Observacion', {
    map: { name: 'id' },
    singular: 'Observacion',
    plural: 'Observaciones',
    autokey: { path: 'slug', from: 'id', unique: true }
});

Observacion.add({
    titulo: String,
    descripcion: { type: Types.Html, wysiwyg: true, height: 300 },
    fecha: Date,
    archivo: String, //FIXME es un archivo
})

Observacion.register();