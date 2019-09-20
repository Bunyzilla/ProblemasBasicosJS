//Dado el archivo DATOS.DAT, realizar un programa que nos permita realizar modificaciones

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

var data = fs.readFileSync('DATOS.DAT', 'utf-8');
var ip = "juanito dfd dfv dg";

var newValue = data.replace(new RegExp(ip), '');
fs.writeFileSync('DATOS.DAT', newValue, 'utf-8');