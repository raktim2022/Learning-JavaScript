// (1) basic fat arrow function
var a = () => {
    
}
a();
// (2) fat arrow function with one parameter
var b = param => { 

}
b(12)
// (3) fat arrow function with implicit return
var c = () => 22;
// console.log(c());



// template literals
// hey 2+2 is 4 and 2-2 is 0 and if 2 is 3+2 and 6 is 3-4 print helloo
// console.log(`hey ${2+2}`)


// default parameter

function abc(prm=0) {
    console.log(prm);
}
// abc(12)
// abc("hello")
// abc();



// Spread oporator
var a = [1, 2, 3, 4, 5];
var b = [...a];
// b.pop();
// console.log(b);
// console.log(a);
// rest
function abcd(a, b, c, ...d) {
    console.log(a, b, c, d);
}
// abcd(1, 2, 3, 4, 5, 6, 7, 8, 9);



// destruction
var a = [1, 2, 3, 4, 5];
var [b, c,,,d] = a;
// console.log(b, c, d);

var obj = { name: "raktim", age: "18" };
var { age } = obj;
// console.log(age);


// try catch
console.log("hey1");
try {
    console.log(hey);
} catch (error) {
    console.log(error);
}
console.log("hey3");
