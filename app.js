function add(x, y) {
    return x + y  
};

function subtract(x, y) {  
    return x - y
};

function multiply(x, y) {
    return x * y
};

function divide(x, y) {
    return x / y
};

function clearInput() { 
// if CE > then clear the current input
// if C > then clear the final val
};

function operatorInput() { 
    
    const buttonArray = document.getElementsByClassName("button operatorInput");
    let operatorArray = [];

    for (let i = 0; i < buttonArray.length; i++) {
        operatorArray.push(buttonArray[i].innerHTML)

        buttonArray[i].addEventListener("click", function(event) {
            if (currNum.length > 0 && currInput.length < 3) {
                currInput = [];
                currInput.push(parseInt(currNum.join("")));
                currNum = [];
                currInput.push(buttonArray[i].innerHTML);
            } else if (operatorArray.includes(currInput.at(-1))) {
                //console.log('2')
                currInput.pop();
                currInput.push(buttonArray[i].innerHTML);
            } else if (currInput.length === 0) {
                //console.log('1')
                return;
            } else {
                return;
            }
            // handle a situation where there you have something like [1, +] and a currNUM
        });
    };
};

function numInput() {

    const buttonArray = document.getElementsByClassName("button numInput");

    for (let i = 0; i < buttonArray.length; i++) {
        buttonArray[i].addEventListener("click", function(event) {
            if (currNum.length < 10) {
                currNum.push(buttonArray[i].innerHTML)
            }
        });
    };

};

function operatorSelector() {
    
    let finalVal = 0;

    if (currInput.includes('÷')) {
        finalVal = divide(currInput[0], currInput[2])
    } else if (currInput.includes('×')) {
        finalVal = multiply(currInput[0], currInput[2])
    } else if (currInput.includes('+')) {
        finalVal = add(currInput[0], currInput[2])
    } else if (currInput.includes('-')) {
        finalVal = subtract(currInput[0], currInput[2])
    }

    return finalVal

};

function evaluator() {
    
    const buttonArray = document.getElementsByClassName("button evalInput");

    for (let i = 0; i < buttonArray.length; i++) {
        buttonArray[i].addEventListener("click", function(event) {
            
            if (isNaN(parseInt(currNum.join("")))) {
                return;
            } else {
                currInput.push(parseInt(currNum.join("")))
                currInput = [operatorSelector()]
                currNum = [operatorSelector()]
            }

        });
    };

};

let currInput = []; 
let currNum = [];

const buttonArray = document.getElementsByClassName("button test");

for (let i = 0; i < buttonArray.length; i++) {
    buttonArray[i].addEventListener("click", function(event) {
        console.log(currInput)
        console.log("currentNum:" + currNum)
    });
};

operatorInput();
numInput();
evaluator();