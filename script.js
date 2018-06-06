// Réglages
    const frameRate = 1000 / 60;
    const multiplicator = 5;
    const bounceHeight = 100;

    const randomFont = false;
    const fonts = [
        "Georgia",
        "Times New Roman",
        "Arial",
        "Helvetica",
        "Comic Sans MS",
        "Verdana"
    ];

    const colorEdge = "rgb(0, 0, 10)";
    const colorCenter = "rgb(50, 0, 60)";

let body;
let title;
let frameCount = 0;
let letters = [];
let switchBackgroundColor = false;

window.onload = ()=>{
    body = document.getElementsByTagName("body")[0];
    title = document.title;

    let container = document.createElement('h1');

    for(const char of title){
        let singleLetter = document.createElement('span');
        singleLetter.innerText = char;
        letters.push(singleLetter);
        container.appendChild(singleLetter);
    }

    document.querySelector('body').appendChild(container);

    setInterval( update, frameRate );
};


const update = ()=>{

    let limit = letters.length;
    for(let i = 0; i < limit; i++){
        const hue = (((frameCount + i) * multiplicator) % 255);
        const light = 75;
        let singleLetter = letters[i];
        singleLetter.style.bottom = Math.cos(radians((frameCount + i) * multiplicator)) * bounceHeight + "px";
        singleLetter.style.color = "hsl(" + hue + ", 100%, "+ light +"%)";
        
        if(randomFont && Math.random() < 0.1){
            singleLetter.style.fontFamily = fonts[Math.floor(Math.random() * fonts.length)];
        }
    }

    // const pos1 = 50 - ((frameCount) % 50);
    // const pos2 = 50 + ((frameCount) % 50);

    // if(frameCount % 50 == 0){
    //     switchBackgroundColor = !switchBackgroundColor;
    // }

    // let color1 = colorEdge;
    // let color2 = colorCenter;
    // if(switchBackgroundColor){
    //     color1 = colorCenter;
    //     color2 = colorEdge;
    // }
    
    // body.style.background = "linear-gradient( 0deg, "+ color1 +" 0%, "+ color2 +" "+ pos1 +"%, "+ color2 +" "+ pos2 +"%, "+ color1 + "100%)";

    frameCount++;
};