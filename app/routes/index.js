'use strict';

var path = process.cwd();

module.exports = function (app) {
	app.route('/api/whoami')
		.get(function (req, res) {
			var ipaddress = req.headers['x-forwarded-for'];
			var language = req.headers['accept-language'].split(",")[0];
			
			var re = new RegExp("(?:\\()([^\\)]+)");
			var software = re.exec(req.headers['user-agent'])[1];
			
			var response = {
				"ipaddress": ipaddress,
				"language": language,
				"software": software
			}
			
			res.send(response);
		});
};
