var arreglito = [];
var readline = require('readline-sync');
var num;

for(var i=0;i<10;i++){
    arreglito[i]=readline.question("Calificación "+ ( i+1 )+":");
}

num=readline.question("Numero a buscar: ");
if(buscar(num)){
    console.log("Numero encontrado!");
}else{
    console.log("Numero no encontrado!");
}

function buscar(n){
    for(var i=0;i<10;i++){
        if(arreglito[i]==n)
            return true;
    }
    return false;
}