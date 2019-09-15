var contpar=0;
var contimp=0;

for (var i= 0; i < 100; i++)
{
    if((i+1)%2==0){
        contpar+=(i+1);
    }else{
        contimp+=(i+1);
    }
}

console.log("Suma de numeros pares:");
console.log(contpar);
console.log("Suma de numeros impares:");
console.log(contimp);