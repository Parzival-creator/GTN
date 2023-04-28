let secretNumber = parseInt(Math.random()*100);
let results = document.getElementById("result");
let min_value = parseInt(1);
let max_value = parseInt(100);
console.log(secretNumber)
let tries = 0

function Check() {
    let player = document.getElementById("choice").value;
    let rules = document.getElementById("rule");
    tries += 1;
    
    if (player < secretNumber && player >= min_value && player <= max_value) {
        results.textContent = "The Goal Number is higher !";
        min_value = parseInt(player) + 1;
        rules.textContent = min_value + " et " + max_value + " (included)";
        document.getElementById("choice").min = parseInt(player) + 1;
    }
    else if (player > secretNumber && player >= min_value && player <= max_value) {
        results.textContent = "The Goal Number is lower !";
        max_value = parseInt(player) - 1;
        rules.textContent = min_value + " et " + max_value + " (included)";
        document.getElementById("choice").max = parseInt(player) - 1;
    }
    else if (player == secretNumber && player >= min_value && player <= max_value) {
        results.textContent = "YOU WIN in " + tries + " tries!";
    }
}