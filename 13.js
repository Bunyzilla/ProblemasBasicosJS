var contpar=0;

for (var i= 0; i < 100; i++)
{
    if((i+1)%2==0 || (i+1)%3==0){
        console.log(i+1);
        contpar++;
    }
}

console.log("Numeros multiplos de 2 o de 3:");
console.log(contpar);