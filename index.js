const arg2 = document.getElementById("arg2");
const screen = document.getElementById("screen")

// Function to plus result
const plusValues = (a , b) => Number(a) + Number(b);

// Function to get the value & see it on screen
const getValue = () =>{
    let arg1 = document.getElementById("arg1").value;
    let arg2 = document.getElementById("arg2").value;

    document.getElementById("screen").innerHTML = plusValues(arg1, arg2);
}

