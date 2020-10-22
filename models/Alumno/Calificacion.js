let keystone = require('keystone');
let Types = keystone.Field.Types;

let Calificacion = new keystone.List('Calificacion', {
    map: { name: 'id' },
    singular: 'Calificacion',
    plural: 'Calificaciones',
    autokey: { path: 'slug', from: 'id', unique: true }
});

Calificacion.add({
    nota1T: Number,
    nota2T: Number,
    nota3T: Number,
    cicloLectivo: { type: Number, min: 1960, max: 9999 },
    promedio: { type: Number, min: 1, max: 10 },
    notaFinal: { type: Number, min: 1, max: 10 },
    condicion: { type: Types.Select, options: ["Cursando", "Aprobado", "Desaprobado", "Repitio"] },
    materia: String,
    //hace referencia a las mesas de examen en las que rindió, y asi obtiene los resultados
    // resultadosMesasExamen: [Schema.Types.ObjectId],
})

Calificacion.register();