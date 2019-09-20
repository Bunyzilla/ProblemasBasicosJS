var dado1, dado2, cont=0;
for(var i=0;i<100;i++){
    dado1 = Math.floor((Math.random() * 6) + 1);
    dado2 = Math.floor((Math.random() * 6) + 1);
    if((dado1 + dado2)==10){
        cont++;
    }
}
console.log("Numero de 10's: " + cont);