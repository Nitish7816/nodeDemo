var i=0;
// for(i; i<10;i++){
//     console.log(i);
// }
while (i<10){
    console.log(i);
    i++;
}

var res = '\n';
for(var i = 0; i < 10; i++) {
    for(var j = 0; j < 10; j++) {
        res += '* ';
    }
    res+= '\n';
}
console.log(res);

var i,j;
for(i=1;i<=5;i++){
    for (j=1; j<=i; j++){
        if(j%2 == 0)
            res +=0;
        else
           res +=1;
    }
    res +='\n';
}
console.log(res);

var a=['a','b','c','x','y','z'];
for (var i in a){
    console.log("index=",i," ","value=",a[i]);
}
