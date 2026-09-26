const p = document.querySelector('p')
const text = p.innerText

const charters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

let iteration = 0
function randomText(){
    const str = text.split("").map((char, index)=>{
        if(index < iteration){
            return char
        }
        return charters.split("")[Math.floor(Math.random()*52)]
    }).join("")

    p.innerText = str

    iteration += 0.5;
    // console.log(iteration);
    
    
}

setInterval(randomText,30)