/*

2nd method to inject object properties to another object. 

(HW : Try to to this with arrays. Add your own custom behaviours)


*/ 





let rangeRover = {color : "Black"};
let lambo = {feature : "speed"};
let tesla = {driver : "AI"};

Object.setPrototypeOf(tesla, rangeRover);

console.log(Object.getPrototypeOf(tesla));
