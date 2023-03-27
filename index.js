const arg2 = document.getElementById("arg2");
const screen = document.getElementById("screen")

// Function to plus result
// const plusValues = (a , b) => Number(a) + Number(b);

// A simple calculator function when read that operation the user wants to use
const Math = (a , b) => {
    let sign = "/";
    let result ;
    switch (sign){
        case "+" :
            result = Number(a) + Number(b);
            break;
        case "-" :
            result = a - b;
            break;
        case "*" :
            result = Number(a) * Number(b);
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

    document.getElementById("screen").innerHTML = Math(arg1, arg2);
}

