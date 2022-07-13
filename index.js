"use strict";
//2. ստեղծում եք spread operator-ի նման ֆունկցիա, որը կվերցնի զանգվածներ ու կսփրի ինչ-որ այլ զանգվածի մեջ

let x = [1,2,3];
let y = [4,5,6]
let z = [7,8,9]
let b = {
  a:1,
  b:2
}

Array.prototype.mySpread = function() {
  let arr = []
  for (let i = 0; i < arguments.length; i++) {
    arr.push(arguments[i]);
  }
  return arr.flat();
}

x = x.mySpread(x, z, b, [17, 52, 55, ],1,2,'Anun',true)
console.log(x);