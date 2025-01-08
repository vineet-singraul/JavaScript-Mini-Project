const submitted = () => {
    const errorName = document.getElementById("errorName");
    const errorEmail = document.getElementById("errorEmail");
    const errorPass = document.getElementById("errorPass");
    const errorConPass = document.getElementById("errorConPass");
    const errorNumber = document.getElementById("errorNumber");

    const inputName = document.getElementById("inp1").value;
    const inputEmail = document.getElementById("inp2").value;
    const inputPass = document.getElementById("inp3").value;
    const inputConPass = document.getElementById("inp4").value;
    const inputNumber = document.getElementById("inp5").value;

    errorName.innerHTML = "";
    errorEmail.innerHTML = "";
    errorPass.innerHTML = "";
    errorConPass.innerHTML = "";
    errorNumber.innerHTML = "";

    if (inputName === "") {
        errorName.innerHTML = "⚠️ Please enter your name";
        return false;
    }

    if (inputEmail === "" || !(inputEmail.includes('@') && inputEmail.includes('.com'))) {
        errorEmail.innerHTML = "⚠️ Please enter a valid email address (e.g., name@gmail.com)";
        return false;
    }

    if (inputPass === "" ||inputPass.match(/[1234567890]/)  &&  inputPass.match(/[!@#$%^&*()_+{}|+:"<>?]/) && inputPass.match(/[a-z]/) && inputPass.match(/[A-Z]/)) {
        errorPass.innerHTML ="⚠️ Please confirm your password";
        return false;
    }


    if (!(inputConPass===inputPass)) {
        errorConPass.innerHTML = "⚠️ Passwords do not match";
        return false;
    }

    if (inputNumber === "" ||  isNaN(inputNumber) || inputNumber.lenght!=10) {
        errorNumber.innerHTML = "⚠️ Please enter a valid number";
        return false;
    }

    return true;
}





















































































