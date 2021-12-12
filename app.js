function add(x, y) {
    
    return x + y  
};

function subtract(x, y) {
    
    return x - y
};

function sum(numList) {
    
    let num = 0
    
    for (let i = 0; i < numList.length; i++) {
        num += numList[i]
    }

    return num
};

function multiply(numList) {

    let finalNum = numList.reduce((prevVal, nextVal) => prevVal * nextVal);

    return finalNum
};

function power(x, y) {
    
    let numList = []

    for (let i = 0; i < y; i++) {
        numList.push(x)
    };

    const finalVal = numList.reduce((prevVal, nextVal) => prevVal * nextVal);
    return finalVal
};

function factorial(num) {
    let numList = []
    
    for (let i = num; i > 0; i--) {
        numList.push(i)
    };

    const finalVal = numList.reduce((prevVal, nextVal) => prevVal * nextVal);
    return finalVal
};
