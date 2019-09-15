var readline = require('readline-sync');

do{
    console.log("Seleccione 'S' o 'N' ");
    var frases= readline.question("Frases: ");
    if(frases.charAt(0)!="S" && frases.charAt(0)!="N"){
        console.log("Eleccion incorrecta");
    }
}while(!frases.includes("S") && !frases.includes("N"));

console.log("Opcion elegida");
