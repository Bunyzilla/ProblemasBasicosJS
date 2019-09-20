/*41. Hacer un programa que nos permita dar altas en el archivo DATOS.DAT, cuyos campos son:
ID, NOMBRE, APELLIDOS, DIRECCIÓN y ESTADO.*/

function nombre(){ 
    var readline = require('readline-sync');
    var nombre = readline.question("Nombre: ")
    return nombre;
}
function apellido(){ 
    var readline = require('readline-sync');
    var ap = readline.question("Apellido: ")
    return ap;
}
function direccion(){ 
    var readline = require('readline-sync');
    var dir = readline.question("Direccion: ")
    return dir;
}
function estado(){ 
    var readline = require('readline-sync');
    var est= readline.question("Estado: ")
    return est;
}
var fs= require('fs');
fs.appendFile("DATOS.DAT", nombre()+" "+apellido() + " "+ direccion()+" "+estado()+"\n", function(err){
    if(err){
        return console.log(err);
    }
    console.log("El archivo fue creado");
});