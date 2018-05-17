function sum() {
    var a=arguments.length;
    console.log(a);
    var i,s=0;
    for (i=0;i<arguments.length; i++){
        s=s+arguments[i];
    }
    console.log(s);
}
sum(5,5,5,6);

sum(34,6);

