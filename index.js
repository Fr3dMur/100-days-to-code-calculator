// GET THE SCREEN
const screen = document.getElementById("screen")

let operation = [];

  // Function to print the value in screen
const print = (a) => {
    document.getElementById("screen").innerHTML = a;
};

let operator;
let operatorIndex;

const getKey = (buttonId) => {
    let buttonContent;

//   Function to save and print when a number button is click it
    const savePrint = () => {
        operation.push(buttonContent.innerText);
        print(buttonContent.innerText);
    }

// Function to get index & sign for the operation
    const indices = (a) => {
        let sign = a.innerText;
        operator = operation.find(number => number === sign);
        operatorIndex = operation.findIndex(number => number === sign );
    }
    // Conditional to search for the value of button that was clicked
    switch (buttonId) {
        // Arithmetcs bottons
        case "arith1" :
            buttonContent = document.getElementById("arith1");
            savePrint();
            indices(buttonContent);
            break;
            
        case "arith2" :
            buttonContent = document.getElementById("arith2");
            savePrint();
            indices(buttonContent);
            break;

        case "arith3" :
            buttonContent = document.getElementById("arith3");
            savePrint();
            indices(buttonContent);
            break;

        case "arith4" :
            buttonContent = document.getElementById("arith4");
            savePrint();
            indices(buttonContent);
            break;

        // Number buttons
         case "number1" :
            buttonContent = document.getElementById("number1");
            savePrint();
            break;

        case "number2" :
            buttonContent = document.getElementById("number2");
            savePrint();
            break;

        case "number3" :
            buttonContent = document.getElementById("number3");
            savePrint();
            break;

        case "number4" :
            buttonContent = document.getElementById("number4");
            savePrint();
            break;

     case "number5" :
            buttonContent = document.getElementById("number5");
            savePrint();
            break;

        case "number6" :
            buttonContent = document.getElementById("number6");
            savePrint();
            break;

        case "number7" :
            buttonContent = document.getElementById("number7");
            savePrint();
            break;

        case "number8" :
            buttonContent = document.getElementById("number8");
            savePrint();
            break;

        case "number9" :
            buttonContent = document.getElementById("number9");
            savePrint();
            break;

        case "number0" :
            buttonContent = document.getElementById("number0");
            savePrint();
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

