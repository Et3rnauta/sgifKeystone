let keystone = require('keystone');
let Types = keystone.Field.Types;

let Sacramento = new keystone.List('Sacramento', {
    map: { name: 'id' },
    singular: 'Sacramento',
    plural: 'Sacramentos',
    autokey: { path: 'slug', from: 'id', unique: true }
});

Sacramento.add({
    tipo: { type: Types.Select, options: ["Bautismo", "Comunión", "Confirmación"] },
    fueTomado: Boolean,
    fecha: Date,
    diocesis: String
})

Sacramento.register();