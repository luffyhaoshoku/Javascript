// Add code here for part 5-7
document.querySelector('button#textColour').addEventListener("click", blueToRed);
//queryselector finds button. eventlistener for action of button to perform function
document.querySelector('button#bgColour').addEventListener("click", greenToPink);
//button#bgcolour is from html element button id
document.querySelector('button#fonts').addEventListener("click", tnrToArial);







// Do nt change the code between here and the next comment
const blueParagraph = document.querySelector("#blueText");

function blueToRed() {
    blueParagraph.style.color = "red";
    blueParagraph.textContent = blueParagraph.textContent.replace("blue", "red");
};

const greenParagraphs = document.querySelectorAll(".greenBg");

function greenToPink() {
    for(let greenParagraph of greenParagraphs) {
        greenParagraph.className = 'hotpinkBg';
        greenParagraph.textContent = greenParagraph.textContent.replace("green", "hotpink");
    }
}

const tnrParagraph = document.querySelector("#tnrParagraph");

function tnrToArial() {
    tnrParagraph.style.fontFamily = "arial";
    tnrParagraph.textContent = tnrParagraph.textContent.replace("Times New Roman", "Arial");
}

// Add the event handlers for mouse over, mouse out and click on tnrParagraph here and register them
