var derer  = require('derer');
derer.setDefaults({
	varControls: ['{{{', '}}}']
});
var app = require('express')();
app.engine('html', derer.renderFile);
app.set('view engine', 'html');
app.set('view cache', true);
app.set('views', __dirname + '/html');
app.get('/', function(req, res){
	res.render('apps', {
		lan: 'en'
	});
});
app.get('/pub/:folder/:file', function(req, res){
	res.sendFile(__dirname+'/'+req.params.folder+'/'+req.params.file.replace('.map',''));
});
require('http').Server(app).listen(80);
console.log('Load from your browser at: http://localhost/');