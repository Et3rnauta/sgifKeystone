let keystone = require('keystone');
let Types = keystone.Field.Types;

let Presentismo = new keystone.List('Presentismo', {
    map: { name: 'id' },
    singular: 'Presentismo',
    plural: 'Presentismos',
    autokey: { path: 'slug', from: 'id', unique: true }
});

Presentismo.add({
    fecha: Date,
    horaEntrada: Date,
    horaSalida: Date,
    esInasistencia: Boolean,
    valor: { type: Types.Select, options: [0.25, 0.5, 1] },
    estado: { type: Types.Select, options: ["Justificada", "Injustificada", "Justificacion Especial"] },
    justificacion: String, //FIXME puede ser archivo
    nombreMateria: String
})

Presentismo.register();