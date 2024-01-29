//create a map in JS
/*
A Map holds key-value pairs where the keys can be any datatype.

A Map remembers the original insertion order of the keys.

A Map has a property that represents the size of the map.*/



// hansolo map

const hansolo = new Map([
    ["vehicle", "Millenium Falcon"],
    ["bff", "Chebacca"],
    ["sweetheart", "Leia"]
    ]);

    console.log(hansolo.size);

    console.log(hansolo.get("vehicle")) //vehicle name
    console.log(hansolo.has("sweetheart")) //does he have a sweetheart
    console.log(hansolo.has("jedi")) //is he a jedi

    hansolo.set("son", "Ben"); //adding son ben key pair
    console.log(`hansolo's son's name is ${hansolo.get("son")}`)


    for (let x of hansolo){
        console.log(x)
    }

    //step solution method

    for (let [key, value] of hansolo) {
        console.log(`Han Solo's ${key} is ${value}`);
    }

    hansolo.set("bff", "Luke"); // setting another value
    console.log(hansolo.get("bff"));


hanSolo.delete("son"); // deleting entry
console.log(hanSolo);
hanSolo.clear(); // clearing complete map 
console.log(hanSolo);
