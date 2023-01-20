const submitButton = document.querySelector("button");

submitButton.addEventListener("click", changeBorder);

function changeBorder() {
    const inputs = document.querySelectorAll("input");

    inputs.forEach(input => {
        if (input.hasAttribute("required") && input.textContent ===""
        && !input.hasAttribute("bad-input")) {
            input.classList.toggle("bad-input");
            console.log("there");
        } else if (input.hasAttribute("required") && input.textContent !==""){
            input.classList.toggle("bad-input");
        }
    });
}