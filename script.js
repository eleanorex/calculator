function addToOutput(input) {
    output.textContent += input;
}

function clearOutput() {
    output.textContent = "";
}

function calculate() {
    try {
        output.textContent = eval(output.textContent)
    }
    catch(error) {
        output.textContent = "Error"
    }
}