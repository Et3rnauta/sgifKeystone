const keystone = require("keystone")

exports = module.exports = function (req, res) {
    let view = new keystone.View(req, res);
    let locals = res.locals;

    // Set locals
    locals.sections = 'consultar';

    // Carga de Datos
    locals.data = {
        // alumnos: []
        booleanTest: true,
    }

    view.on('init', function (next) {
        let q = keystone.list('Alumno').model.findOne({
            dni: "32323232"
        });
        q.exec(function (err, result) {
            locals.data.alumno = result;
            next(err);
        })
    })

    // // Load Products
    // view.query('alumnos', keystone.list('Alumno').model.find());

    // Render View
    view.render('consultar');
}

