var readline = require('readline-sync');
var filita= readline.question("Filas: ");
var col= readline.question("Columnas: ");
var i=0;

while(i<=100){
    for(var j=0;j<filita;j++){
        console.log((i + "    ").repeat(col));
    }
    i++;
}