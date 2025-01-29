const SubmitAllData = () => {
    // Select All the Inputs by Id
    const signName = document.querySelector("#fullName");
    const signemail = document.querySelector("#email");
    const signlocation = document.querySelector("#location");
    const signphone = document.querySelector("#phone");
    const signpass = document.querySelector("#password");
    const signConpass = document.querySelector("#confirmPassword");

    // Check if Full Name is empty
    if (signName.value === "") {
        signName.style.border = "2px solid red";
        return false;
    } else {
        signName.style.border = "2px solid green";
    }

    // Validate Email Format
    if (!signemail.value.includes('@') || !signemail.value.includes('.com')) {
        signemail.style.border = "2px solid red";
        return false;
    } else {
        signemail.style.border = "2px solid green";
    }

    // Check if Location is empty
    if (signlocation.value === "") {
        signlocation.style.border = "2px solid red";
        return false;
    } else {
        signlocation.style.border = "2px solid green";
    }

    // Validate Phone Number Format (Assuming it's a simple digit check)
    if (!signphone.value.match(/^\d+$/) || signphone.value.length < 10) {
        signphone.style.border = "2px solid red";
        return false;
    } else {
        signphone.style.border = "2px solid green";
    }

    // Validate Password Format
    if (!signpass.value.match(/[0-9]/) || !signpass.value.match(/[a-z]/) || !signpass.value.match(/[A-Z]/)) {
        signpass.style.border = "2px solid red";
        return false;
    } else {
        signpass.style.border = "2px solid green";
    }

    // Validate Confirm Password Matches Password
    if (signConpass.value !== signpass.value || signConpass.value === "") {
        signConpass.style.border = "2px solid red";
        return false;
    } else {
        signConpass.style.border = "2px solid green";
    }

    // Save Data to Local Storage
    // alert("Signup Successful ! ")
    localStorage.setItem("Name", signName.value);
    localStorage.setItem("Email", signemail.value);
    localStorage.setItem("Location", signlocation.value);
    localStorage.setItem("Phone", signphone.value);
    localStorage.setItem("Password", signpass.value);
    localStorage.setItem("ConformPass", signConpass.value);

    location.href = "./Pages/Home.html";

    return false; 
};
