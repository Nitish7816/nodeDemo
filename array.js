// var a=['apple','banana'];
// console.log(a);
// console.log(a.length);
// var b=a[0];
// console.log(b);
// var c=a[a.length -1];
// console.log(c);
// var newlength=a.push('orange');
// console.log(newlength);
// console.log(a);
// var c=a.pop();
// console.log(c);
// console.log(a);
// var b=a.shift();
// console.log(a);
// var newlength=a.unshift('grapes');
// console.log(newlength);
// console.log(a);
// a.push('mango');
// console.log(a);
// var pos = a.indexOf('banana');
// var removeitem=a.splice(pos,1);
// var shallowCopy = a.slice();
// console.log(shallowCopy);

var fruits=[];
fruits.push('orange','mango','banana');
console.log(fruits.length);
fruits.push('lemon');
var veg=['aaa','bbb'];
var add=fruits.concat(veg);
fruits.push('lemon');
for (var i=0; i<add.length; i++){
    console.log(add[i]);
}
console.log(Array.isArray(add));
console.log(fruits instanceof Array);

