var readline = require('readline-sync');
var numerito= readline.question("Numerito: ");
if((numerito)%2==0){
    console.log("Numerito es par");
}else{
    console.log("Numerito es impar");
}