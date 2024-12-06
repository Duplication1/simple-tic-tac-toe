const display = document.getElementById("display");
const userInput = document.getElementById("userInput")
const addItemBtn = document.getElementById("addItemBtn"); 
const clearItemBtn = document.getElementById("clearItemBtn");
let wheelArr = [];




function paragraphDistribution(){
    let text = "";
    wheelArr.forEach((item, index) =>{
        text += `<div class=''>${item}</div>`;
    });
    display.innerHTML = text;
}
clearItemBtn.addEventListener('click',()=>{
    wheelArr.length = 0;
    display.innerHTML = ""
})
addItemBtn.addEventListener('click', ()=>{
    wheelArr.push(userInput.value);
    paragraphDistribution();
    userInput.value = " ";
})

