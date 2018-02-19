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
		nav: {
			land: 'https://www.bejaboo.com/en',
			babybook: 'https://www.bejaboo.com/babybook',
			pricing: 'https://www.bejaboo.com/Pricing',
			legal: 'https://www.bejaboo.com/Legal',
			babybook: 'https://www.bejaboo.com/babybook',
			pregnantbook: 'https://www.bejaboo.com/pregnantbok',
			membership: 'https://www.bejaboo.com/shop/en',
			names: 'https://www.bejaboo.com/babynames',
			howDoesItWork: 'https://www.bejaboo.com/HowDoesItWork/En',
			login: 'https://www.bejaboo.com/login'
		},
		lan: 'en'
	});
});
app.get('/pub/:folder/:file', function(req, res){
	res.sendFile(__dirname+'/'+req.params.folder+'/'+req.params.file.replace('.map',''));
});
require('http').Server(app).listen(80);
console.log('Load from your browser at: http://localhost/');