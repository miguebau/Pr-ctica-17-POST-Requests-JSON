let express = require('express');
let router = express.Router();


router.get('/student', function(req, res) {
    let t = req.params.id
    res.render('student');
});

router.post('/addStudent', function(req, res) {
    res.render('displayData', { nombre: req.boby.nombre, edad: req.body.edad, nss: req.body.nss, tipoSangre: req.body.tipoSangre });
});


router.type('/endpoint', express.json({ type: '*/*' }), function(req, res) {
    console.log('nombre: $ {req.body.nombre} apellido: ${req.body.apellido} data:JSON.stringify')
});

router.get('/testJson', function(req, res) {
    res.render('testJson');
});
module.express = router;