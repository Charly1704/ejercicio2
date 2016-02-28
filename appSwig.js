var app = require('express')(),
  swig = require('swig'),
  people;
  
  app.engine('html', swig.renderFile);
  
  app.set('view engine', 'html');
  app.set('views', __dirname + '/views');



app.set('view cache', false);

swig.setDefaults({ cache: false });



app.get('/', function (req, res) {
  res.render('indexSwig.html', { 
      pageName: 'Hola mundo usando Swig',
      name: 'Hola mundo',
      ducks: ['Hugo','Paco','Luis']
      
  });
});

app.listen(8080);
console.log('Application Started on http://localhost:8080/');
