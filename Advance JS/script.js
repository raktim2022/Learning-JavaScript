// var
// var add to the window
// function abc() {
//     for (var i = 1; i <= 12; i++){
//         console.log(i);
//     }
//     console.log(i);
// }
// abc();

// Let doesnot allow this
// function abc() {
//     for (let i = 1; i <= 12; i++){
//         console.log(i);
//     }
//     console.log(i);
// }
// abc();

// Execution context & lexical environment

// function abc() {
//     var a = 12;
//     function def() {
//         var b = 12;
//     }
// }

// Spread oporator
// var a = [1, 2, 3, 4, 5];
// var b = [...a];
// b.pop();
// console.log(b);
// console.log(a);


//Truthy & Falsy
// eg 1
// if (0) {
//     console.log("truthy");
// }
// else {
//     console.log("falsy");
// }
//eg2
// if (NaN) {
//     console.log("truthy");
// }
// else {
//     console.log("fasly");
// }
//eg3
// if ("Raktim") {
//     console.log("truthy");
// }
// else {
//     console.log("fasly");
// }


// forEach
// var a = [1, 2, 3, 4, 5, 6, 98, 4, 32, 32, 23, 5, 6, 67];
// a.forEach(function (val) {
//     console.log(val + 10);
// })

//forin
// var obj = {
//     name: "Raktim",
//     age: 12,
//     city: "kolkata",
// };
// for (const key in obj) {
//     console.log(key);
//     console.log(key,obj[key]);
// }


//callback func
// setTimeout(function () {
//     console.log("2sec baad chalao");
// }, 2000)// here time is in milisec... 2000ms=2sec

//first class function
// function abc(a) {
//     a();
// }
// abc(function () { console.log("hey"); })

// how array is stored in JS behind the secen
// var a = [1, 2, 3, 4];
// a[-1] = 4
// console.log(a);

// delete object 
var b = {
    age: 12,
    name: "Raktim",
    color: "green",
    type: "string",
};
delete b.age;
console.log(b);
delete b.color;
console.log(b);
