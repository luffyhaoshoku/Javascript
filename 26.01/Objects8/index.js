/*All objects have the same properties, but the property values differ from car to car.

All objects have the same methods, but the methods are performed at different times. */


//object created with name value pairs PROPERTIES

const darthVader = {
    allegiance: "Empire",
    weapon: "lightsaber",
    sith: true
};

console.log(darthVader.allegiance);
console.log(darthVader.weapon)
console.log(`DV is a sith: ${darthVader["sith"]}`)

console.log(darthVader.Jedi)//unknown property


console.log(Object.keys(darthVader).length);


darthVader.children = 2;
darthVader.childNames = ['Luke', 'Leia'];
console.log(darthVader);

console.log(`Darth Vader's first child: ${darthVader.childNames[0]}`);//array 0 = 1

/*for (let [name,value] in darthVader){
    console.log(`${name}, ${value}`)
    
}*/

for (let key in darthVader) {
    console.log(`Darth Vader's ${key} is ${darthVader[key]}`);
}


darthVader.allegiance = "The light side"
console.log(darthVader);

delete darthVader.children;
console.log(darthVader);

let {allegiance, weapon, sith, childNames} = darthVader;
console.log(allegiance);
console.log(weapon);
console.log(sith);
console.log(childNames);

console.log(darthVader);