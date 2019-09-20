var arreglito = [];
var readline = require('readline-sync');

function media(arr){
    var med=0;
    for(var i=0;i<10;i++){
        med+=parseInt(arr[i]);
    }
    return parseInt(med)/10;
}

for(var i=0;i<10;i++){
    arreglito[i]=readline.question("Calificación "+ ( i+1 )+":");
}

console.log("Media: " + media(arreglito));