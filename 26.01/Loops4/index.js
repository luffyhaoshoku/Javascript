
/*i=0
for (i; i<10; i++) {
    console.log(i); //10 iterations inclusing 0-9
}*/

let x=2;
let loopCounter = 0;


while (x < 10000) {
    x *= x; //multiply upon itself and assign to the left value
    loopCounter++;
    console.log( x);
    console.log(loopCounter);
}
