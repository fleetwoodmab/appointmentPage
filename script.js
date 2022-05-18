var budgetSelected = document.getElementById('in_budget');
var solution = document.querySelector('input[name="solution"]').value;

function isEmailValid() {
    var mailformat = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

    const element = document.querySelector('.in_bemail');
    const input = element.value;
    let message = document.querySelector("#error");

    if (input.match(mailformat)) {
        element.classList.remove("invalid")
        element.classList.add("valid")
        message.style.display = "none"
        return true
    } else {
        element.classList.add("invalid")
        message.style.display = "block"
        return false
    }
}

document.querySelector(".in_bemail").addEventListener("input", isEmailValid);

function validateForm() {
        if (isEmailValid() && budgetSelected != "none" && solution != "") {
            return true
        } 
        else {
            alert("Please fill form correctly")
            return false
        }
    }


function redirect() {
        var solutionSelected = document.querySelector('input[name="solution"]:checked').value;

        if (budgetSelected.value === "<1000" || solutionSelected == "data" || solutionSelected == "marketing" || solutionSelected == "copywriting" ) {
            window.location.href = "unqualified.html";
        } 
        else {
            window.location.href = "qualified.html"
        }

}

function submit() {
    validateForm();
    redirect();
}


document.getElementById("submit").addEventListener("click", submit);
