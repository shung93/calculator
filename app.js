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
    const buttonArray = document.getElementsByClassName("button clearInput");

    for (let i = 0; i < buttonArray.length; i++) {
        buttonArray[i].addEventListener("click", function(event) {
            currNum = []
            currInput = []
            // evaluateFlag = 0
        });
    };

};

function operatorInput() { 
    
    const buttonArray = document.getElementsByClassName("button operatorInput");
    let operatorArray = [];

    for (let i = 0; i < buttonArray.length; i++) {
        operatorArray.push(buttonArray[i].innerHTML)

        buttonArray[i].addEventListener("click", function(event) {
            // if (evaluateFlag === 1) {
            //     currInput.pop();
            //     currInput.push(buttonArray[i].innerHTML);
            //     currInput.push(parseInt(currNum.join("")));
            //     currNum = [];
            //     evaluate();
            // } else 
            if (currNum.length > 0 && currInput.length === 2) {
                // handle a situation where there you have something like [1, +] and a current number
                evaluate();
            } else if (currNum.length > 0 && currInput.length < 3) {
                currInput.push(parseInt(currNum.join("")));
                currNum = [];
                currInput.push(buttonArray[i].innerHTML);
            } else if (currNum.length === 1 && currInput.length === 1) {
                // do something where if we have the prev arithmetic num
                // and then we' want to arithmetic on that prev num 
                currNum = [];
                currInput.push(buttonArray[i].innerHTML);
            } else if (operatorArray.includes(currInput.at(-1))) { 
                // this is to replace operator (if the last button clicked was an operator)
                currInput.pop();
                currInput.push(buttonArray[i].innerHTML);
            } else if (currInput.length === 0) {
                // if there's no number already, do nothing
                return;
            } else {
                return;
            }
            
        });
    };
};

function numInput() {

    const buttonArray = document.getElementsByClassName("button numInput");

    for (let i = 0; i < buttonArray.length; i++) {
        buttonArray[i].addEventListener("click", function(event) {
            if (evaluateFlag === 1) {
                // numFlag = 1;
                evaluateFlag = 0;
                currNum = [];
                currNum.push(buttonArray[i].innerHTML)
            } else if (currNum.length < 9) {
                if (currNum[0] == "0") {
                    currNum.shift();
                }
                currNum.push(buttonArray[i].innerHTML)
            }
        });
    };

};

function operatorSelector() {
    
    let finalVal = 0;
    
    if (currInput.includes('÷')) {
        const nums = currInput.filter(Number.isFinite)
        finalVal = divide(nums[0], nums[1])
        // finalVal = [divide(nums[0], nums[1]), '÷']
    } else if (currInput.includes('×')) {
        const nums = currInput.filter(Number.isFinite)
        finalVal = multiply(nums[0], nums[1])
        // finalVal = [multiply(nums[0], nums[1]), '×']
    } else if (currInput.includes('+')) {
        const nums = currInput.filter(Number.isFinite)
        finalVal = add(nums[0], nums[1])
        // finalVal = [add(nums[0], nums[1]), '+']
    } else if (currInput.includes('-')) {
        const nums = currInput.filter(Number.isFinite)
        finalVal = subtract(nums[0], nums[1])
        // finalVal = [subtract(nums[0], nums[1]), '-']
    }
    
    return finalVal

};

function evaluate () {

    evaluateFlag = 1;
    // numFlag = 0;

    if (isNaN(parseInt(currNum.join("")))) {
        return;
    } else {
        currInput.push(Number(currNum.join("")))
        const finalNum = operatorSelector()
        currInput = [finalNum]
        currNum = [finalNum]
        console.log(finalNum)
    };
}

function evaluator() {
    
    const buttonArray = document.getElementsByClassName("button evalInput");

    for (let i = 0; i < buttonArray.length; i++) {
        buttonArray[i].addEventListener("click", function(event) {
            evaluate();
        });
    };

};

function displayVals() {
    const buttonArray = document.getElementsByClassName("button");

    for (let i = 0; i < buttonArray.length; i++) {
        buttonArray[i].addEventListener("click", function(event) {

            if (isNaN(parseInt(currNum.join("")))) {
                displayNum = "";
            } else {
                displayNum = parseInt(currNum.join(""));
            };
            
            document.getElementById("prevSelection").innerHTML = currInput.join("");
            document.getElementById("currSelection").innerHTML = currNum.join("");

        });
    }; 

};


let evaluateFlag = 0;
// let numFlag = 0; // use this to indicate when to start treating 'currNum' normally - maybe not needed

// let finalDisplayVal; // whenever an operation is run > this val should be displayed

let currInput = []; 
let currNum = []; // should swap what is displayed to the user based on if it has been operated on OR if you're about to do an operation

const buttonArray = document.getElementsByClassName("button test");

for (let i = 0; i < buttonArray.length; i++) {
    buttonArray[i].addEventListener("click", function(event) {
        console.log("evalluateflag" + evaluateFlag)
        console.log("current inputs" + currInput)
        console.log("currentNum:" + currNum)
    });
};

clearInput();
operatorInput();
numInput();
evaluator();
displayVals();