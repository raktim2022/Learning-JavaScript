//async JS
// setTimeout(callback --is a function,time in millisec)

// callback func humeshaa async code mein ans aane par chalta haai

// console.log("hey1");
// setTimeout(function () {
//     console.log("hey2");
// }, 2000)
// console.log("hey3");


// promise function

// var ans = new Promise((res, rej) => {
//     var a = Math.floor(Math.random() * 10);
//     if (a < 5) {
//         return res();
//     }
//     else {
//         return rej();
//     }
        
// })
// ans.then(function() {
//     console.log("below");
// })
//     .catch(function() {
//     console.log("above");
// })

// var ans = new Promise(function (resolve, reject) {
//     return resolve("sabse pahle ghar par aoo")
// })
// var p2=ans.then(function (data) {
//     console.log(data);
//     return new Promise(function (resolve, reject) {
//         return resolve("gate kholo and gate lagao")
//     })
// })

// var p3=p2.then(function (data) {
//     console.log(data);
//     return new Promise(function (resolve, reject) {
//         return resolve("khana pakao or khan khao")
//     })
// })
// var p4=p3.then(function (data) {
//     console.log(data);
//     return new Promise(function (resolve, reject) {
//         return resolve("soo jaaoo")
//     })
// })
// p4.then(function (data) {
//     console.log(data);
// })


//async await

async function abc() {
    await fetch('');
}

// jabhi koi code async haai to appko uske lia wait karna padta haai kyoko humein nahi pata uska ans kabh aegaa