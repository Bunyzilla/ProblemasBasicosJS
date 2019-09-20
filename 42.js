//Hacer un programa que nos permita dar bajas en el fichero DATOS.DAT.
var fs= require('fs');
var data = fs.readFileSync('DATOS.DAT', 'utf-8');
var ip = "juanito dfd dfv dg";

var newValue = data.replace(new RegExp(ip), '');
fs.writeFileSync('DATOS.DAT', newValue, 'utf-8');