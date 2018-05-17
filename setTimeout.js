// setInterval(function () {
//     console.log('second passed');
// }, 1000);
// var s=setTimeout(function () {
//     console.log("done");
// },2000);
//
// console.log("waiting");
function welcome () {
    console.log("Welcome to JavaTpoint!");
}
var id1 = setTimeout(welcome,1000);
var id2 = setInterval(welcome,1000);

// clearInterval(id2);
clearTimeout(id1);
