// GET THE SCREEN
const screen = document.getElementById("screen")

let operation = [];

  // Function to print the value in screen
const print = (a) => {
    document.getElementById("screen").innerHTML = a;
};

//   Function to save and print when a number button is click it
const printNumber = () => {
    operation.push(buttonContent.innerHTML);
    print(buttonContent.innerHTML);
}

let operator;
let buttonContent;

const getKey = (buttonId) => {

    // Conditional to search for the value of button that was clicked
    switch (buttonId) {
        // Arithmetcs bottons
        case "arith1" :
            buttonContent = document.getElementById("arith1");
            operation.push(buttonContent.innerText);
            operator = operation.find(number => number === "+");
            operatorIndex = operation.findIndex(number => number === "+" )
            print(buttonContent.innerHTML);
            break;
            
        case "arith2" :
            buttonContent = document.getElementById("arith2");
            operation.push(buttonContent.innerText);
            operator = operation.find(number => number === "-");
            operatorIndex = operation.findIndex(number => number === "-" )
            print(buttonContent.innerHTML);
            break;

        case "arith3" :
            buttonContent = document.getElementById("arith3");
            operation.push(buttonContent.innerText);
            operator = operation.find(number => number === "*");
            operatorIndex = operation.findIndex(number => number === "*" )
            print(buttonContent.innerHTML);
            break;

        case "arith4" :
            buttonContent = document.getElementById("arith4");
            operation.push(buttonContent.innerText);
            operator = operation.find(number => number === "%");
            operatorIndex = operation.findIndex(number => number === "%" )
            print(buttonContent.innerHTML);
            break;

        // Number buttons
         case "number1" :
            buttonContent = document.getElementById("number1");
            printNumber();
            break;

        case "number2" :
            buttonContent = document.getElementById("number2");
            printNumber();
            break;

        case "number3" :
            buttonContent = document.getElementById("number3");
            printNumber();
            break;

        case "number4" :
            buttonContent = document.getElementById("number4");
            printNumber();
            break;

     case "number5" :
            buttonContent = document.getElementById("number5");
            printNumber();
            break;

        case "number6" :
            buttonContent = document.getElementById("number6");
            printNumber();
            break;

        case "number7" :
            buttonContent = document.getElementById("number7");
            printNumber();
            break;

        case "number8" :
            buttonContent = document.getElementById("number8");
            printNumber();
            break;

        case "number9" :
            buttonContent = document.getElementById("number9");
            printNumber();
            break;

        case "number0" :
            buttonContent = document.getElementById("number0");
            printNumber();
            break;

        // Erase buttons
        case "clear" :
            buttonContent = document.getElementById("clear");
            operation = [];
            break;

        case "clear1" :
            buttonContent = document.getElementById("clear1");
            operation.pop();
            break;
    }

    print(operation.join(""))

};

// Function to get and print the result into the screen
const getResult = () => {
    let result;

    // To get the arguments to operate
    let arg1 = operation.slice(0 , operatorIndex);;
    let arg2 = operation.slice(operatorIndex + 1);

    // Make array arguments to str
    arg1 = arg1.join("");
    arg2 = arg2.join("");

    // Function to calculate
    switch(operator) {
        case "+" :
            result = Number(arg1) + Number(arg2);
            print(result);
            break;
        case "-" :
            result = arg1 - arg2;
            print(result);
            break;
        case "*" :
            result = arg1 * arg2;
            print(result);
            break;
        case "%" :
            result = arg1 / arg2;
            print(result);
            break;    
        }

}

