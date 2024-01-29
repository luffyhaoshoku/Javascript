/*document object model
document access



*/


const colours = ['red', 'green', 'blue', 'orange', 'lime','olive', 'black', 'yellow'];


/*function buildP (placeholder){

    let p = document.createElement('p');
    let text = document.createTextNode("have you tried turning it off and back on again?")


    p.appendChild(text)
    placeholder.appendChild(p) //div id =placeholder
}

buildP(document.querySelector('#placeholder'))
//setting placeholder with element found replacing with div in html*/

function buildP (placeholder, num){
    let i = 0;
    do{
        let p = document.createElement('p');
    let text = document.createTextNode("have you tried turning it off and back on again?")

    p.appendChild(text)
    

    p.style.color = colours[/*integer value*/parseInt(Math.random() * colours.length)];

    placeholder.appendChild(p) //with num as second var. allows for loop of same elements






        i++
    } while (i < num);

}

buildP(document.querySelector('#placeholder'), 7);