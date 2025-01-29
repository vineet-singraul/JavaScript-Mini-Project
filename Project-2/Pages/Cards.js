const fetchData = async () => {

    let url = `http://localhost:3000/patient`;
    let response = await fetch(url, { method: "GET" });
    let data = await response.json();

    console.log(data);
    
    pegination(data)

}


   // let patients = data;

    const displayData = (patientsToDisplay) => {
        let show = document.querySelector("#Display");
        show.innerHTML = '';

        patientsToDisplay.map((data) => {
            show.innerHTML += `
                <div id="cards">
                    <h1 id="name">${data.name}</h1>
                    <div id="detailsMainDiv">
                        <div id="detailsDiv">
                            <span id="d1">Email</span>
                            <div id="datas">
                                <span id="Email">${data.email}</span>
                            </div>
                        </div>

                        <div id="detailsDiv">
                            <span id="d1">Phone</span>
                            <div id="datas">
                                <span id="Phone">${data.phone}</span>
                            </div>
                        </div>

                        <div id="detailsDiv">
                            <span id="d1">Address</span>
                            <div id="datas">
                                <span id="Address">${data.address}</span>
                            </div>
                        </div>

                        <div id="detailsDiv">
                            <span id="d1">Doctor</span>
                            <div id="datas">
                                <span id="Doctor" class="highlight">${data.doctor}</span>
                            </div>
                        </div>

                        <div id="detailsDiv">
                            <span id="d1">Date</span>
                            <div id="datas">
                                <span id="Date">${data.date}</span>
                            </div>
                        </div>

                        <div id="detailsDiv">
                            <span id="d1">Time</span>
                            <div id="datas">
                                <span id="Time">${data.time}</span>
                            </div>
                        </div>

                        <div id="detailsDiv">
                            <span id="d1">Problem</span>
                            <div id="datas">
                                <span id="Problem" class="highlight">${data.reason}</span>
                            </div>
                        </div>

                        <div id="detailsDiv">
                            <span id="d1">Price</span>
                            <div id="datas">
                                <span id="Price" class="highlight">₹${data.price}</span>
                            </div>
                        </div>

                        <div id="detailsDiv">
                            <span id="d1">Medical History</span>
                            <div id="datas">
                                <span id="historyProblem">${data.historyProblem}</span>
                            </div>
                        </div>
                    </div>

                    <div class="footer">
                    <input type="button" id="del" value="Delete" onclick="DeleteBtn('${data.id}')">
                        <input type="button" id="edi" value="Edit"  onclick="EditBtn('${data.id}')">
                    </div>
                </div>`;
        });
    };
    

    // Display all data initially
    //pegination(patients);
    // document.getElementById("searchvalue").addEventListener("input", (event) => {

        let searchh=async()=>{

        let searchTerm=document.querySelector("#searchvalue").value.toLowerCase()
        // const searchTerm = event.target.value.toLowerCase();
        let url = `http://localhost:3000/patient`;
        let response = await fetch(url, { method: "GET" });
        let data = await response.json();
        const filteredPatients = data.filter(patient => {
            return (
                patient.name.toLowerCase().includes(searchTerm) ||
                patient.email.toLowerCase().includes(searchTerm) ||
                patient.phone.toString().includes(searchTerm) ||
                patient.address.toLowerCase().includes(searchTerm) ||
                patient.doctor.toLowerCase().includes(searchTerm) ||
                patient.date.includes(searchTerm) ||
                patient.time.includes(searchTerm) ||
                patient.reason.toLowerCase().includes(searchTerm) ||
                patient.price.toString().includes(searchTerm) ||
                patient.historyProblem.toLowerCase().includes(searchTerm)
            );
        });
        pegination(filteredPatients);
    };

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

let pegination=(data)=>{
    $('#paging').pagination({
        dataSource: data,
        pageSize: 5,
        callback: function(data, pagination) {
            displayData(data)
        }
    })
}





























// +++++++++++++  Deletw  ++++++++++++//
const DeleteBtn = (id) => {
    let url = `http://localhost:3000/patient/${id}`;
    fetch(url, { method: "DELETE" })
}
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//






















// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
// ++++++++++++  When Data Comming From Form ++++++++++
const SendDataToCard = () => {

    let formName = document.querySelector("#fullName").value.trim();
    let formEmail = document.querySelector("#email").value.trim();
    let formPhone = document.querySelector("#phone").value.trim();
    let formAddress = document.querySelector("#address").value.trim();
    let formDoctor = document.querySelector("#doctor").value.trim();
    let formDate = document.querySelector("#date").value.trim();
    let formTime = document.querySelector("#time").value.trim();
    let formReason = document.querySelector("#reason").value.trim();
    let formPrice = document.querySelector("#price").value.trim();
    let formMedicalHistory = document.querySelector("#medicalHistory").value.trim();

    // Name validation
    if (formName === "") {
        const fullNameInput = document.querySelector("#fullName");
        fullNameInput.style.border = "2px solid red";
        fullNameInput.style.backgroundColor = "#e9000061";
        return false;
    } else {
        document.querySelector("#fullName").style.border = "3px solid green";
        document.querySelector("#fullName").style.backgroundColor = "#1a55006e";
    }

    // Email validation
    if (formEmail === "" || !formEmail.includes("@") || !formEmail.includes(".com")) {
        const emailInput = document.querySelector("#email");
        emailInput.style.border = "2px solid red";
        emailInput.style.backgroundColor = "#e9000061";
        return false;
    } else {
        document.querySelector("#email").style.border = "3px solid green";
        document.querySelector("#email").style.backgroundColor = "#1a55006e";
    }

    // Phone validation
    if (formPhone === "" || isNaN(formPhone)) {
        const phoneInput = document.querySelector("#phone");
        phoneInput.style.border = "2px solid red";
        phoneInput.style.backgroundColor = "#e9000061";
        return false;
    } else {
        document.querySelector("#phone").style.border = "3px solid green";
        document.querySelector("#phone").style.backgroundColor = "#1a55006e";
    }

    // Address validation
    if (formAddress === "") {
        const addressInput = document.querySelector("#address");
        addressInput.style.border = "2px solid red";
        addressInput.style.backgroundColor = "#e9000061";
        return false;
    } else {
        document.querySelector("#address").style.border = "3px solid green";
        document.querySelector("#address").style.backgroundColor = "#1a55006e";
    }

    // Doctor validation
    if (formDoctor === "") {
        const doctorInput = document.querySelector("#doctor");
        doctorInput.style.border = "2px solid red";
        doctorInput.style.backgroundColor = "#e9000061";
        return false;
    } else {
        document.querySelector("#doctor").style.border = "3px solid green";
        document.querySelector("#doctor").style.backgroundColor = "#1a55006e";
    }

    // Date validation
    if (formDate === "") {
        const dateInput = document.querySelector("#date");
        dateInput.style.border = "2px solid red";
        dateInput.style.backgroundColor = "#e9000061";
        return false;
    } else {
        document.querySelector("#date").style.border = "3px solid green";
        document.querySelector("#date").style.backgroundColor = "#1a55006e";
    }

    // Problem validation
    if (formReason === "") {
        const reasonInput = document.querySelector("#reason");
        reasonInput.style.border = "2px solid red";
        reasonInput.style.backgroundColor = "#e9000061";
        return false;
    } else {
        document.querySelector("#reason").style.border = "3px solid green";
        document.querySelector("#reason").style.backgroundColor = "#1a55006e";
    }

    // Medical History validation
    if (formMedicalHistory === "") {
        const medicalHistoryInput = document.querySelector("#medicalHistory");
        medicalHistoryInput.style.border = "2px solid red";
        medicalHistoryInput.style.backgroundColor = "#e9000061";
        return false;
    } else {
        document.querySelector("#medicalHistory").style.border = "3px solid green";
        document.querySelector("#medicalHistory").style.backgroundColor = "#1a55006e";
    }

    // Data Submission
    let url = `http://localhost:3000/patient`;
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: formName,
            email: formEmail,
            phone: formPhone,
            address: formAddress,
            doctor: formDoctor,
            date: formDate,
            time: formTime,
            reason: formReason,
            price: formPrice,
            historyProblem: formMedicalHistory
        })
    })
        .then(response => {
            if (response.ok) {
                location.href = "Cards.html"; // Adjusted for relative paths
            } else {
                console.error("Error submitting form");
            }
        })
        .catch(error => console.error("Error:", error));

    return false;
};
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//



























// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//++++++++++++++++++++++  Data Edit Hone Vala Section  +++++++++++++++++++++++
const EditBtn = async (id) => {
    let DisplayForm = document.querySelector("#FormDataInCards");

    let url = `http://localhost:3000/patient/${id}`;
    let response = await fetch(url, { method: "GET" });
    let data = await response.json();

    console.log(data);


    DisplayForm.innerHTML = `
        <form id="appointmentForm">
            <div id="input1">
                <input type="text" id="fullNameInput" required placeholder="Enter your full name" value="${data.name}">
        
                <input type="email" id="emailInput" required placeholder="Enter your email address" value="${data.email}">
        
                <input type="tel" id="phoneInput" required placeholder="Enter your phone number" value="${data.phone}">
        
                <input type="text" id="addressInput" required placeholder="Enter your address" value="${data.address}">
        
                <select id="doctorSelect" required value="${data.doctor}">
                    <option value="">--Choose a doctor--</option>
                    <option value="Dr. John Doe">Dr. John Doe (Cardiologist --- हृदय रोग विशेषज्ञ)</option>
                    <option value="Dr. Sarah Johnson">Dr. Sarah Johnson (Dermatologist --- त्वचा रोग विशेषज्ञ)</option>
                    <option value="Dr. Emily Davis">Dr. Emily Davis (Pediatrician --- बाल रोग विशेषज्ञ)</option>
                    <option value="Dr. Michael Brown">Dr. Michael Brown (Orthopedic Surgeon --- अस्थि सर्जन)</option>
                    <option value="Dr. Linda Smith">Dr. Linda Smith (Neurologist --- तंत्रिका रोग विशेषज्ञ)</option>
                    <option value="Dr. Robert Wilson">Dr. Robert Wilson (Oncologist --- कैंसर रोग विशेषज्ञ)</option>
                    <option value="Dr. Jennifer Martinez">Dr. Jennifer Martinez (Family Medicine --- परिवार चिकित्सा)</option>
                    <option value="Dr. David Anderson">Dr. David Anderson (Gastroenterologist --- पाचन तंत्र विशेषज्ञ)</option>
                    <option value="Dr. Karen Taylor">Dr. Karen Taylor (Psychiatrist --- मानसिक स्वास्थ्य विशेषज्ञ)</option>
                    <option value="Dr. James Thomas">Dr. James Thomas (Endocrinologist --- अंतःस्रावी विशेषज्ञ)</option>
                    <option value="Dr. Patricia Moore">Dr. Patricia Moore (Ophthalmologist --- नेत्र रोग विशेषज्ञ)</option>
                    <option value="Dr. Christopher Jackson">Dr. Christopher Jackson (Urologist --- मूत्र रोग विशेषज्ञ)</option>
                    <option value="Dr. Jessica White">Dr. Jessica White (Obstetrician/Gynecologist --- स्त्री रोग विशेषज्ञ)</option>
                </select>
            </div>
        
            <div id="input2">
                <input type="date" id="dateInput" required value="${data.date}">
        
                <input type="time" id="timeInput" required value="${data.time}">
        
                <textarea id="reasonInput" rows="5" required placeholder="Enter the reason for your visit" value="${data.historyProblem}"></textarea>
        
                <input type="number" id="priceInput" value="300" readonly value="${data.price}">
        
                <textarea id="medicalHistoryInput" rows="4" placeholder="Briefly describe your medical history"></textarea>
            </div>
                    <input type="button" value="Edit Change" onclick="FinalChange('${id}')">
        </form>
    `;
};

const FinalChange = async (id) => {
    let userName = document.querySelector("#fullNameInput").value;
    let userEmail = document.querySelector("#emailInput").value;
    let userPhone = document.querySelector("#phoneInput").value;
    let userAddress = document.querySelector("#addressInput").value;
    let userDoctor = document.querySelector("#doctorSelect").value;
    let userDate = document.querySelector("#dateInput").value;
    let userTime = document.querySelector("#timeInput").value;
    let userReason = document.querySelector("#reasonInput").value;
    let userPrice = document.querySelector("#priceInput").value;
    let userHistoryReport = document.querySelector("#medicalHistoryInput").value;

    // Confirm save with SweetAlert
    const result = await Swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`,
    });

    if (result.isConfirmed) {
        let url = `http://localhost:3000/patient/${id}`;

        try {
            let response = await fetch(url, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: userName,
                    email: userEmail,
                    phone: userPhone,
                    address: userAddress,
                    doctor: userDoctor,
                    date: userDate,
                    time: userTime,
                    reason: userReason,
                    price: parseInt(userPrice),
                    historyProblem: userHistoryReport,
                }),
            });

            if (response.ok) {
                Swal.fire("Saved!", "", "success");
                location.href = "Cards.html";
            } else {
                console.error("Failed to update data", response.statusText);
                Swal.fire("Error updating data. Please try again.", "", "error");
            }
        }

        catch (error) {
            console.error("Error:", error);
            Swal.fire("An error occurred while updating the data.", "", "error");
        }
    }
    else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
    }
};
