/* 

- In line 13,  "__proto__" is used to inject properties of computer object to the lenovo object.

- and in line 17, "__proto__" is used to access lenovo property i.e __proto__ that is linked to Computer 

*/

let computer = {cpu : 12};

let lenovo = {
    screen : "HD",
    __proto__ : computer
}
let Hp = {hardisk : "SDD"}

console.log(lenovo.__proto__);
