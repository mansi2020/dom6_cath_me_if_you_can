//todo fetch data from html element
let square = document.getElementById("container");
let elementWidth = square.offsetWidth;
// console.log(square);
let heightOfViewport = document.documentElement.clientHeight - 100;
let widthOfViewport = document.documentElement.clientWidth - 100;
let bodyOfHtml = document.querySelector("body");
// console.log(heightOfViewport);
// console.log(widthOfViewport);
square.style.left = "0px";
square.style.right = "0px";


//todo add onmouseenter event
square.addEventListener("mouseover",(e)=>{
    let leftPosition = Math.floor(Math.random()*widthOfViewport);
    let topPosition = Math.floor(Math.random()*heightOfViewport);

    square.style.left = leftPosition+"px";
    square.style.top = topPosition+"px";
    let hexCodeColor = generateRandomColor();
    bodyOfHtml.style.backgroundColor = "#"+hexCodeColor;

})


//todocreate hex code using string
function  generateRandomColor(){
    let hexStr = "0123456789abcdef";
    let colorCodeString = "";
    let colorCodeStringLength = 6;

    for(let i=0; i<colorCodeStringLength; i++){
        let randoIndex = Math.floor(Math.random()*16);
        colorCodeString += hexStr[randoIndex];
    }
    return colorCodeString;
}
