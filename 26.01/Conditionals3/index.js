
age = 65


if (age<=17){
    console.log("underage");
}
else if ( age <=65){
    console.log("insurable");
}
else{
    console.log("out of bounds");
}

let age2 = 65
let insurance = (age2 <18 ) ? "underage":
                (age2 <66)  ? "insurable": "out of bounds matey";
                
                console.log(insurance);

