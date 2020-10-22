let keystone = require('keystone');
let Types = keystone.Field.Types;

let Alumno = new keystone.List('Alumno', {
    map: { name: 'dni' },
    singular: 'Alumno',
    plural: 'Alumnos',
    autokey: { path: 'slug', from: 'dni', unique: true }
});

Alumno.add({
    dni: { type: String, required: true },
    tipoDni: String,
    nombre: String,
    apellido: String,
    genero: { type: Types.Select, options: ["Masculino", "Femenino"] },
    fechaNacimiento: Date,
    legajo: String,
    fechaIngreso: Date,
    fechaEgreso: Date,
    nombreEscuelaAnt: String,
    foto: String, //FIXME poner tipo de dato para la foto
    sacramentos: { type: Types.Relationship, ref: 'Sacramento', many: true },
    estadoInscripción: { type: Types.Select, options: ["Inscripto", "No Inscripto", "Reinscripto"] },
    anioCorespondiente: { type: Number, min: 1, max: 5 },
    observaciones: { type: Types.Relationship, ref: 'Observacion', many: true },
    sanciones: { type: Types.Relationship, ref: 'Sancion', many: true },
    presentismos: { type: Types.Relationship, ref: 'Presentismo', many: true },
    calificaciones: { type: Types.Relationship, ref: 'Calificacion', many: true },
    // responsable: Schema.Types.ObjectId,
    // hermanos: [Schema.Types.ObjectId],
    // padres: [Schema.Types.ObjectId]
});

Alumno.register();