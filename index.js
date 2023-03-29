// GET THE SCREEN
const screen = document.getElementById("screen")

let operation = [];

  // Function to print the value in screen
  const print = (a) => {
    document.getElementById("screen").innerHTML = a;
};

const getKey = (buttonId) => {

   // Get the symbol and make the arithmetic operation
   let buttonContent;
  
   let result ;

    // Conditional to search for the value of button that was clicked
    switch (buttonId) {
        case "arith1" :
            buttonContent = document.getElementById("arith1");
            operation.push(buttonContent.innerHTML);
            print(buttonContent.innerHTML);
            console.log(operation);
            break;
            
        case "arith2" :
            buttonContent = document.getElementById("arith2");
            operation.push(buttonContent.innerHTML);
            print(buttonContent.innerHTML);
            console.log(operation);
            break;

        case "arith3" :
            buttonContent = document.getElementById("arith3");
            operation.push(buttonContent.innerHTML);
            print(buttonContent.innerHTML);
            console.log(operation);
            break;

        case "arith4" :
            buttonContent = document.getElementById("arith4");
            operation.push(buttonContent.innerHTML);
            print(buttonContent.innerHTML);
            console.log(operation);
            break;

         case "number1" :
            buttonContent = document.getElementById("number1");
            operation.push(buttonContent.innerHTML);
            print(buttonContent.innerHTML);
            console.log(operation);
            break;

        case "number2" :
            buttonContent = document.getElementById("number2");
            operation.push(buttonContent.innerHTML);
            print(buttonContent.innerHTML);
            console.log(operation);
            break;

        case "number3" :
            buttonContent = document.getElementById("number3");
            operation.push(buttonContent.innerHTML);
            print(buttonContent.innerHTML);
            console.log(operation);
            break;

        case "number4" :
            buttonContent = document.getElementById("number4");
            operation.push(buttonContent.innerHTML);
            print(buttonContent.innerHTML);
            console.log(operation);
            break;

     case "number5" :
            buttonContent = document.getElementById("number5");
            operation.push(buttonContent.innerHTML);
            print(buttonContent.innerHTML);
            console.log(operation);
            break;

        case "number6" :
            buttonContent = document.getElementById("number6");
            operation.push(buttonContent.innerHTML);
            print(buttonContent.innerHTML);
            console.log(operation);
            break;

        case "number7" :
            buttonContent = document.getElementById("number7");
            operation.push(buttonContent.innerHTML);
            print(buttonContent.innerHTML);
            console.log(operation);
            break;

        case "number8" :
            buttonContent = document.getElementById("number8");
            operation.push(buttonContent.innerHTML);
            print(buttonContent.innerHTML);
            console.log(operation);
            break;

        case "number9" :
            buttonContent = document.getElementById("number9");
            operation.push(buttonContent.innerHTML);
            print(buttonContent.innerHTML);
            console.log(operation);
            break;

        case "number0" :
            buttonContent = document.getElementById("number0");
            operation.push(buttonContent.innerHTML);
            print(buttonContent.innerHTML);
            console.log(operation);
            break;

        case "clear" :
            buttonContent = document.getElementById("clear");
            operation.push(buttonContent.innerHTML);
            console.log(operation);
            break;

        case "clear1" :
            buttonContent = document.getElementById("clear1");
            operation.push(buttonContent.innerHTML);
            console.log(operation);
            break;

        default :
            console.log("Give a value");
    }

    print(operation.join(""))

};

// Function to get and print the result into the screen
const getResult = () => {
    print(operation);
}

// A simple calculator function when read that operation the user wants to use
const Math = (a , b, c ) => {
    let result ;

    switch (c){
        case "+" :
            result = Number(a) + Number(b);
            break;
        case "-" :
            result = a - b;
            break;
        case "*" :
            result = a * b;
            break;
        case "/" :
            result = a / b;
            break;
        default :
            result = "Give me a number"
    }

    return result;
}


