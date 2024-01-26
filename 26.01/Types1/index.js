let numTest = 45.324568;
console.log(numTest);

let twoDecimalPoints = numTest.toFixed(2);
console.log(twoDecimalPoints); //black not blue

let stringTest = 'I am the very model of a modern major general';
let indexofM = stringTest.indexOf('M');
console.log(indexofM); //shows first instance of location for 'm'
//-1 shows no instances


let start = stringTest.indexOf("model");
let end =stringTest.lastIndexOf("major");

console.log(start +end); //4 and 6th place

let subStr = stringTest.substring(start, end);
console.log(subStr) //prints from start to end of chosen words

document.write("<p>" + subStr+ "</p>");


