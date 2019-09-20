var matrix = [5]; 
for(var i=0;i<5;i++){
    matrix[i]=new Array(5);
}

for(var j=0;j<4;j++){
    for(var i=0;i<5;i++){
        matrix[j][i]= Math.floor((Math.random() * 100) + 1);
    }
}

function traspuesta(){
    var trasp = [5]; 
    for(var i=0;i<5;i++){
        matrix[i]=new Array(5);
    }
    for(var i=0;i<4;i++){
        for(var j=0;j<5;j++){
            trasp[j][i]=matrix[i][j];
        }
    }
    return trasp;
}

var matrix2 = [5]; 
for(var i=0;i<5;i++){
    matrix2[i]=new Array(5);
}

//matrix2=traspuesta();

for(var j=0;j<5;j++){
    for(var i=0;i<4;i++){
        console.log(traspuesta()[j][i]);
    }
}