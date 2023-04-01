const express = require('express');
const app = express();

// Escribir tu código aquí
let producto = {tipoProducto:null,precio:null,cantidad:null};
app.listen(3000,()=>{console.log('Servidor Corriendo')});
app.get('/producto/agregar',function(req,res){
    res.send(producto)
});

//en pagina escribir localhost:3000/producto/agregar