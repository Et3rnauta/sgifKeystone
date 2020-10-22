let keystone = require('keystone');
let Types = keystone.Field.Types;

let Sancion = new keystone.List('Sancion', {
    map: { name: 'id' },
    singular: 'Sancion',
    plural: 'Sanciones',
    autokey: { path: 'slug', from: 'id', unique: true }
});

Sancion.add({
    fecha: Date,
    cantidad: { type: Types.Select, options: [0.25, 0.5, 1] },
    justificacion: String,
    preceptorSancion: { type: Types.Relationship, ref: 'Preceptor' },
})

Sancion.register();