//Con el archivo DATOS.DAT listar todos los registros cuyo estado sea uno
// determinado que introduciremos por teclado. https://www.w3schools.com/nodejs/nodejs_filesystem.asp

var fs = require('fs');
function (req, res) { fs.readFile('DATOS.DAT', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
};
