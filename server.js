let express = require('express');
//inyecta de la indepencia de express

let app = express();
//app que se hace la funcion de servidor 
let personsRoute = require('./routes/person');
//inculimos personas en el router

app.set('view engine', 'ejs');
app.use(personsRoute);
app.use('/assets', express.static(__dirname + '/public'));

let PORT = process.env.PORT || 3000;
//inidica el puerto

app.listen(PORT, () => {
    console.log('escuchando en el puerto 3000')
});