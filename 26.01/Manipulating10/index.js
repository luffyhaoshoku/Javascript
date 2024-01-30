// Set up code - do not remove
document.querySelector('button#textColour').addEventListener('click', blueToRed);
document.querySelector('button#bgColour').addEventListener('click', greenToPink);
document.querySelector('button#fonts').addEventListener('click', tnrToArial);
// Do not alter lines of code 2-4!

const blueParagraph = document.getElementById("blueParagraph")

console.log(blueParagraph.style.color)//logging the colour of blue para

console.log(getComputedStyle(blueParagraph).color); //colour obtained from getComputerStyle




function blueToRed() { //button calls in function
    blueParagraph.style.color = "red";
    console.log(blueParagraph.style.color);
    console.log(getComputedStyle(blueParagraph).color);
    blueParagraph.textContent = blueParagraph.textContent.replace('blue', 'red');
}

const greenParagraphs = document.querySelectorAll(".greenBg"); 
console.log(greenParagraphs[0].style.color); 
console.log(getComputedStyle(greenParagraphs[0]).color);

function greenToPink() {

    for (let greenParagraph of greenParagraphs){
        greenParagraph.className = 'hotpinkBg';
        console.log(greenParagraph.style.backgroundColor);
        console.log(getComputedStyle(greenParagraph).backgroundColor);
        greenParagraph.textContent = greenParagraph.textContent.replace('green', 'pink');

    }
}

const tnrParagraph = document.querySelector("#tnrParagraph"); //queryselector works with any css selector
console.log(tnrParagraph.style.fontFamily);
console.log(getComputedStyle(tnrParagraph).fontFamily);


function tnrToArial() {
    tnrParagraph.style.fontFamily = "arial";
    console.log(tnrParagraph.style.fontFamily);
    console.log(getComputedStyle(tnrParagraph).fontFamily);
    tnrParagraph.textContent = tnrParagraph.textContent.replace('Time New Roman', 'Arial');
}
