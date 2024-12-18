
const buttons = document.querySelectorAll('.col');
const resetBtn = document.getElementById('resetBtn');

let player1 = 'X';
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6] 
];
const checkWinner = () =>{
    const firstThreeBoxes = Array.from(buttons).slice(0, 9);
    const boxesValue = Array.from(firstThreeBoxes).map(button => button.innerText);
    winningCombinations.forEach(combination =>{
        const [a, b, c] = combination;
        if (boxesValue[a] === 'X' && boxesValue[b] === 'X' && boxesValue[c] === 'X') {
            alert('X is a Winner');
            setTimeout(() => {
                // After the user clicks "OK", clear buttons
                buttons.forEach(button => {
                    button.innerText = "";
                    button.disabled = false;
                });
            }, 1000);
        } else if (boxesValue[a] === 'O' && boxesValue[b] === 'O' && boxesValue[c] === 'O') {
            alert('O is a Winner');
            setTimeout(() => {
               
                // After the user clicks "OK", clear buttons
                buttons.forEach(button => {
                    button.innerText = "";
                    button.disabled = false;
                });
            }, 1000);
        }
        
    })
}

buttons.forEach(button => {
    button.addEventListener('click', ()=>{
        button.disabled = true;
        if(player1 === 'X'){
            player1 = 'O';
        }
        else if(player1 === 'O'){
            player1 = 'X';
        }
        button.innerText = player1;
        checkWinner();
    });
});


resetBtn.addEventListener('click', ()=>{
    buttons.forEach(button => {
        button.innerText = "";
        button.disabled = false;
    });
})