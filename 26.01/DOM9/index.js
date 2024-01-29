/*document object model
document access



*/


const colours = ['red', 'green', 'blue', 'orange', 'lime','olive', 'black', 'yellow'];


function buildP (placeholder){

    let p = document.createElement('p');
    let text = document.createTextNode("have you tried turning it off and back on again?")


    p.appendChild(text)
    placeholder.appendChild(p) //div id =placeholder
}

buildP(document.querySelector('#placeholder'))
//setting placeholder with element found replacing with div in html

function buildP (placeholder, num){
    let i = 0;
    do{
        




    } while (i < num);

}*/