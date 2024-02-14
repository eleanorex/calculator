const output = document.getElementById("output");

function appendToOutput(value) {
    output.textContent += value;
}

function clearOutput() {
    output.textContent = "";
}

function calculateResult() {
    try {
        output.textContent = eval(output.textContent);
    } catch (error) {
        output.textContent = "Error";
    }
}

document.querySelectorAll(".number").forEach((button) => {
    button.addEventListener("click", () => {
        appendToOutput(button.textContent);
    });
});

document.querySelectorAll(".operation").forEach((button) => {
    button.addEventListener("click", () => {
        appendToOutput(button.textContent);
    });
});

document.getElementById("clear").addEventListener("click", clearOutput);
document.getElementById("equal").addEventListener("click", calculateResult);
