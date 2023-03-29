// GET THE SCREEN
const screen = document.getElementById("screen")

const getKey = (buttonId) => {

   // Get the symbol and make the arithmetic operation
   let buttonContent;
   let result  ;

    // Function to print the value in screen
    const print = (a) => {
        document.getElementById("screen").innerHTML = a;
    };

    // Conditional to search for the value of button that was clicked
    switch (buttonId) {
        case "arith1" :
            buttonContent = document.getElementById("arith1");
            print(buttonContent.innerHTML);
            break;
        case "arith2" :
            buttonContent = document.getElementById("arith2");
            print(buttonContent.innerHTML);
            break;
        case "arith3" :
            buttonContent = document.getElementById("arith3");
            print(buttonContent.innerHTML);
            break;
        case "arith4" :
            buttonContent = document.getElementById("arith4");
            print(buttonContent.innerHTML);
            break;
         case "number1" :
            buttonContent = document.getElementById("number1");
            print(buttonContent.innerHTML);
            break;
        case "number2" :
            buttonContent = document.getElementById("number2");
            print(buttonContent.innerHTML);
            break;
        case "number3" :
            buttonContent = document.getElementById("number3");
            print(buttonContent.innerHTML);
            break;
        case "number4" :
            buttonContent = document.getElementById("number4");
            print(buttonContent.innerHTML);
            break;
     case "number5" :
            buttonContent = document.getElementById("number5");
            print(buttonContent.innerHTML);
            break;
        case "number6" :
            buttonContent = document.getElementById("number6");
            print(buttonContent.innerHTML);
            break;
        case "number7" :
            buttonContent = document.getElementById("number7");
            print(buttonContent.innerHTML);
            break;
        case "number8" :
            buttonContent = document.getElementById("number8");
            print(buttonContent.innerHTML);
            break;
             case "number9" :
            buttonContent = document.getElementById("number9");
            print(buttonContent.innerHTML);
            break;
        case "number0" :
            buttonContent = document.getElementById("number0");
            print(buttonContent.innerHTML);
            break;
        case "clear" :
            buttonContent = document.getElementById("clear");
            print(buttonContent.innerHTML);
            break;
        case "clear1" :
            buttonContent = document.getElementById("clear1");
            print(buttonContent.innerHTML);
            break;
        default :
            console.log("Give a value");
    }

};

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


