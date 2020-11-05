var keystone = require('keystone');
var unirest = require("unirest");

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	var req = unirest("GET", "https://ajith-holy-bible.p.rapidapi.com/GetBooks");
	req.query({
		"Book": "Luke",
		"chapter": "1",
		"VerseFrom": "5",
		"VerseTo": "5"
	});
	req.headers({
		"x-rapidapi-host": "ajith-holy-bible.p.rapidapi.com",
		"x-rapidapi-key": "dd19a88c50msh2897ee489b20330p1d37aajsna49e7ee7a30f",
		"useQueryString": true
	});

	let pasaje = "";

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';
	locals.data = {
		pasaje: "",
	}

	view.on('init', function (next) {

		req.end(function (res) {
			if (res.error) throw new Error(res.error);

			pasaje = res.body.Output;
			// console.log(pasaje);

			locals.data.pasaje = pasaje;
			console.log(locals.data.pasaje);

			next();
		})

		// let q = keystone.list('Alumno').model.findOne({
		//     dni: "39.682.936"
		// });
		// q.exec(function (err, result) {
		//     locals.data.alumno = result;
		//     next(err);
		// })
	})

	// Render the view
	view.render('index');
};
