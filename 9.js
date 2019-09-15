var readline = require('readline-sync');
var numerito= readline.question("Numerito: ");
if(numerito>0){
    console.log("Numerito es positivo");

}else if(numerito<0){
    console.log("Numerito es negativo");
}else{
    console.log("Numerito es igual a ZERO");
}