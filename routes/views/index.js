var keystone = require('keystone');
var unirest = require("unirest");

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	let libro = "Luke";
	let capitulo = "1";
	let nVersiculo = "5";

	var req = unirest("GET", "https://ajith-holy-bible.p.rapidapi.com/GetVerseOfaChapter");
	req.query({
		"Book": libro,
		"chapter": capitulo,
		"Verse": nVersiculo
	});
	req.headers({
		"x-rapidapi-host": "ajith-holy-bible.p.rapidapi.com",
		"x-rapidapi-key": "dd19a88c50msh2897ee489b20330p1d37aajsna49e7ee7a30f",
		"useQueryString": true
	});

	let versiculo = "";

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';
	locals.data = {
		libro,
		capitulo,
		nVersiculo,
		versiculo: "",
	}

	view.on('init', function (next) {

		req.end(function (res) {
			if (res.error) throw new Error(res.error);

			versiculo = res.body.Output;
			// console.log(pasaje);

			locals.data.versiculo = versiculo;
			console.log(locals.data.versiculo);

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
