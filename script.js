const buttons = document.querySelectorAll("button");

const displayTop = document.querySelector(".screen .top");
const displayBottom = document.querySelector(".screen .bottom");

const backspaceBtn = document.getElementById("backspace");
const clearBtn = document.getElementById("clear");
const signBtn = document.getElementById("sign");
const divideBtn = document.getElementById("divide");
const multiplyBtn = document.getElementById("multiply");
const subtractBtn = document.getElementById("subtract");
const addBtn = document.getElementById("add");
const modBtn = document.getElementById("mod");
const periodBtn = document.getElementById("period");
const equalsBtn = document.getElementById("equals");
const nineBtn = document.getElementById("nine");
const eightBtn = document.getElementById("eight");
const sevenBtn = document.getElementById("seven");
const sixBtn = document.getElementById("six");
const fiveBtn = document.getElementById("five");
const fourBtn = document.getElementById("four");
const threeBtn = document.getElementById("three");
const twoBtn = document.getElementById("two");
const oneBtn = document.getElementById("one");
const zeroBtn = document.getElementById("zero");

var clickSound = document.getElementById("sound");

let currentInput = "";
let firstOperand = null;
let operator = null;
let isInput = true;

function updateDisplay() {
    displayBottom.textContent = currentInput || "0";
}

function calculate(operand1, operand2, operator) {
    switch(operator) {
        case "+":
            return operand1 + operand2;
        case "-":
            return operand1 - operand2
        case "x":
            return operand1 * operand2;
        case "/":
            return operand1 / operand2;
        case "%":
            return operand1 % operand2;
        default: 
            return operand2;
    }
}

function numberInput(number) {
    if(isInput) {
        currentInput = number;
        isInput = false;
    }
    else currentInput += number;
    updateDisplay();
}

function operatorInput(op) {
    if (firstOperand === null) 
        firstOperand = parseFloat(currentInput);
    else if (operator) {
        const result = calculate(firstOperand, parseFloat(currentInput), operator);
        firstOperand = result;
        displayTop.textContent = result;
    }
    operator = op;
    isInput = true;
    currentInput = "";
    displayTop.textContent = `${firstOperand} ${operator}`;
}


function equalsInput() {
    if (operator && firstOperand !== null) {
        const result = calculate(firstOperand, parseFloat(currentInput), operator);
        displayTop.textContent = `${firstOperand} ${operator} ${currentInput} =`;
        currentInput = result.toString();
        firstOperand = null;
        operator = null;
        isInput = true;
        updateDisplay();
    }
}

function clearInput() {
    displayTop.textContent = "let's do some GIRL MATH!";
    currentInput = "";
    firstOperand = null;
    operator = null;
    isInput = true;
    updateDisplay();
}

function backspace() {
    displayBottom.textContent = displayBottom.textContent.slice(0, -1);
    if (displayBottom.textContent.length === 0) {
        displayBottom.textContent = "0";
    }
}

function periodInput() {
    if(!currentInput.includes(".")) {
        currentInput += ".";
        updateDisplay();
    }
}

function checkInput() {
    console.log("pressed");
}

function playSound() {
    clickSound.currentTime = 0;
    clickSound.play();
  }

buttons.forEach((button) => {
    button.addEventListener("click", playSound);
  });

clearBtn.addEventListener("click", clearInput);
backspaceBtn.addEventListener("click", backspace);
periodBtn.addEventListener("click", periodInput);
divideBtn.addEventListener("click", () => operatorInput("/"));
multiplyBtn.addEventListener("click", () => operatorInput("x"));
subtractBtn.addEventListener("click", () => operatorInput("-"));
addBtn.addEventListener("click", () => operatorInput("+"));
modBtn.addEventListener("click", () => operatorInput("%"));
equalsBtn.addEventListener("click", equalsInput);
nineBtn.addEventListener("click", () => numberInput("9"));
eightBtn.addEventListener("click", () => numberInput("8"));
sevenBtn.addEventListener("click", () => numberInput("7"));
sixBtn.addEventListener("click", () => numberInput("6"));
fiveBtn.addEventListener("click", () => numberInput("5"));
fourBtn.addEventListener("click", () => numberInput("4"));
threeBtn.addEventListener("click", () => numberInput("3"));
twoBtn.addEventListener("click", () => numberInput("2"));
oneBtn.addEventListener("click", () => numberInput("1"));
zeroBtn.addEventListener("click", () => numberInput("0"));