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
    
    const clrButton = document.getElementById("clr");

    clrButton.addEventListener("click", function(event) {
        currNum = [];
        currInput = [];
    });

    const clrEntryButton = document.getElementById("clrEntry");

    clrEntryButton.addEventListener("click", function(event) {
        currNum = [];
    });

};



function numInput() {

    const buttonArray = document.getElementsByClassName("button numInput");

    for (let i = 0; i < buttonArray.length; i++) {
        buttonArray[i].addEventListener("click", function(event) {
            
            if (evaluateFlag === 1 && currInput.length === 1) {
                currNum = [];
                currInput = [];
                evaluateFlag = 0;
            } else if (evaluateFlag === 1) {
                currNum = [];
                evaluateFlag = 0;
            };
            
            if (currNum.length < 9) {
                if (currNum[0] == "0") {
                    currNum.shift();
                }
                currNum.push(buttonArray[i].innerHTML)
            };
        });
    };
};

function operatorInput() { 
    
    const buttonArray = document.getElementsByClassName("button operatorInput");
    let operatorArray = [];

    for (let i = 0; i < buttonArray.length; i++) {
        operatorArray.push(buttonArray[i].innerHTML)

        buttonArray[i].addEventListener("click", function(event) {

            if (currInput.length === 0 && currNum.length > 0) { // no inputs currently
                currInput[0] = parseInt(currNum.join(""));
                currInput[1] = buttonArray[i].innerHTML; 
                currNum = [];
            } else if (currInput.length === 2 && currNum.length > 0 && evaluateFlag === 0) {
                // if you have a current input (e.g., [1+]) and a currNum > treat as evaluate
                evaluate();
                currInput[1] = buttonArray[i].innerHTML;
            } else if (evaluateFlag === 1 || currInput.length === 1) {
                currInput[1] = buttonArray[i].innerHTML;
            }
            
        });
    };
};

function operatorSelector() {
    
    let finalVal;
    
    if (currInput.includes('÷')) {
        finalVal = divide(currInput[0], currInput[2]);
    } else if (currInput.includes('×')) {
        finalVal = multiply(currInput[0], currInput[2]);
    } else if (currInput.includes('+')) {
        finalVal = add(currInput[0], currInput[2]);
    } else if (currInput.includes('-')) {
        finalVal = subtract(currInput[0], currInput[2]);
    }
    
    return finalVal

};

function evaluate () {
    // evaluates what has been input into currInput 
    // currinput should be something like [num, operator, num]

    if (isNaN(parseInt(currNum.join("")))) {
        // do nothing if no number has been selected
        return;
    } else {
        currInput[2] = parseInt(currNum.join(""));
        const finalNum = operatorSelector();
        currInput = [finalNum];
        currNum = [finalNum];
        evaluateFlag = 1;
    };
}

function evaluator() {
    // adds the EVALUATE function specifically to the "=" button

    const buttonArray = document.getElementsByClassName("button evalInput");

    for (let i = 0; i < buttonArray.length; i++) {
        buttonArray[i].addEventListener("click", function(event) {
            if (currInput.length === 2 && currNum.length > 0) {
                evaluate();
            }
        });
    };

};

function displayVals() {
    // display nums/operators in the corresponding HTML spots
    const buttonArray = document.getElementsByClassName("button");

    for (let i = 0; i < buttonArray.length; i++) {
        buttonArray[i].addEventListener("click", function(event) {
            document.getElementById("prevSelection").innerHTML = currInput.join(" ");
            document.getElementById("currSelection").innerHTML = currNum.join("");
        });
    }; 

};

let evaluateFlag = 0; // if evaluateFlag is on > the currNum should be overwritten
let currInput = []; 
let currNum = []; 

clearInput();
operatorInput();
numInput();
evaluator();
displayVals();