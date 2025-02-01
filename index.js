
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
    const winnerXModal = new Modal(document.getElementById('winnerXModal'));
    const winnerOModal = new Modal(document.getElementById('winnerOModal'));

    const firstThreeBoxes = Array.from(buttons).slice(0, 9);
    const boxesValue = Array.from(firstThreeBoxes).map(button => button.innerText);
    winningCombinations.forEach(combination =>{
        const [a, b, c] = combination;
        if (boxesValue[a] === 'X' && boxesValue[b] === 'X' && boxesValue[c] === 'X') {
            winnerXModal.show();
            setTimeout(() => {
                // After the user clicks "OK", clear buttons
                buttons.forEach(button => {
                    button.innerText = "";
                    button.disabled = false;
                });
            }, 1000);
        } else if (boxesValue[a] === 'O' && boxesValue[b] === 'O' && boxesValue[c] === 'O') {
            winnerOModal.show();
            setTimeout(() => {
               
                // After the user clicks "OK", clear buttons
                buttons.forEach(button => {
                    button.innerText = "";
                    button.disabled = false;
                   
                });
            }, 1000);
        }
        
    })
    document.getElementById('closeXModal').addEventListener('click', () => {
        winnerXModal.hide();
    });
    
    document.getElementById('okXButton').addEventListener('click', () => {
        winnerXModal.hide();
    });
    
    document.getElementById('closeOModal').addEventListener('click', () => {
        winnerOModal.hide();
    });
    
    document.getElementById('okOButton').addEventListener('click', () => {
        winnerOModal.hide();
    });
}


function checkTie() {
    const tieModal = new Modal(document.getElementById('tieModal'));
    let tie = true;
    buttons.forEach(button => {
        if (button.innerText === "") {
            tie = false;
        }
    });
    if (tie) {
        setTimeout(() => {
            tieModal.show();
            buttons.forEach(button => {
                button.innerText = "";
                button.disabled = false;
            });
        }, 1000);
    }
    document.getElementById('closeTieModal').addEventListener('click', () => {
        tieModal.hide();
    });
    
    document.getElementById('okTieButton').addEventListener('click', () => {
        tieModal.hide();
    });
    
}




buttons.forEach(button => {
    button.addEventListener('click', ()=>{
        button.disabled = true;
        
       player1 = player1 === 'X' ? 'O' : 'X';
        
        button.innerText = player1;
        checkWinner();
        checkTie();
    });
});


resetBtn.addEventListener('click', ()=>{
    buttons.forEach(button => {
        button.innerText = "";
        button.disabled = false;
    });
})



  


    var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
    
});
