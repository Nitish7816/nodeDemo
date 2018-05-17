//
// var obj_notation = {
//     field: "value",
//     field2: 234,
//     field3: [ 1, 2, 3 ],
//     field4 : {
//         subfield1 : 'value1',
//     },
// }
// console.log(JSON.stringify(obj_notation));
// console.log("\n");
// console.log(JSON.stringify(obj_notation, 0, 1));
// console.log("\n");
// console.log(JSON.parse(JSON.stringify(obj_notation)));
// function printit(var_name) {
//     console.log(global[var_name]);
// }
//
// global.fish = "swordfish";
// global.pet = "cat";
//
// printit("fish");
// printit("pet");
// printit("fruit");
function uhoh () {
    throw new Error("Something bad happened!");
}

try {
    uhoh();
} catch (e) {
    console.log("I caught an error: " + e.message);
}

console.log("program is still running");
