const display = document.getElementById("display");


function appendToDisplay(input){
    display.value += input;
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch{
        display.value = "ERROR";
        console.error(error);
    }
}

function clearDisplay(){
    display.value = "";
}