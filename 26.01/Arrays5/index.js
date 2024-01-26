
let quote = ["I", "am", "your", "friend"];

console.log(quote);
console.log(quote[2])

quote.pop();
console.log(quote)

quote.push("father");
console.log(quote)

quote.unshift("Luffy");
console.log(quote);

let erroneousWord = "Luffy"

let LuffyIsHere = quote.find(n => {return n === erroneousWord});

let LuffyIsAt;

//LuffyIsAt = quote.findIndex(n => {return n === erroneousWord});


if (LuffyIsHere){
    LuffyIsAt = quote.findIndex(n => {return n === erroneousWord});
    quote[LuffyIsAt] = "No";
}

let output = "";

for (let i = 0, j = quote.length; i < j; i++) { 
    if (i === j - 1) 
    { output += quote[i] + '!'; } 
    else if 
    (quote[i] === 'No') { output += quote[i] + ', '; } 
    else 
    { output += quote[i] + ' ' } 
}

console.log(output);
console.log("k")