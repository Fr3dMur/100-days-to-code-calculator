const screen = document.getElementById("screen")

// Function to plus result
// const plusValues = (a , b) => Number(a) + Number(b);

// Get the symbol for arithmetic
let arith ;

const getSymbol = (buttonId) => {
    let buttonContent;

    switch (buttonId) {
        case "arith1" :
            buttonContent = document.getElementById("arith1");
            console.log("El contenido del boton 1 es :" + buttonContent.innerHTML);
            break;
        case "arith2" :
            buttonContent = document.getElementById("arith2");
            console.log("El contenido del boton 2 es :" + buttonContent.innerHTML);
            break;
        case "arith3" :
            buttonContent = document.getElementById("arith3");
            console.log("El contenido del boton 3 es :" + buttonContent.innerHTML);
            break;
        case "arith4" :
            buttonContent = document.getElementById("arith4");
            console.log("El contenido del boton 4 es :" + buttonContent.innerHTML);
            break;
        default :
            console.log("Dame un valor");
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

// Function to get the value & see it on screen
const getValue = () =>{
    let arg1 = document.getElementById("arg1").value;
    let arg2 = document.getElementById("arg2").value;


    document.getElementById("screen").innerHTML = Math(arg1, arg2, "*");
}

