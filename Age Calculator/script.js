       
       
       const Display = () => {

            let userageYaer = document.querySelector("#AgeYear");

            let userAgeMonth = document.querySelector("#AgeMonth");

            let userAgeDay = document.querySelector("#AgeDay");

            let userAge = document.querySelector("#AgeInput").value;


            // Thise Is Current Date Which Is Running :

            let currentDates = new Date();

            let currentDate = currentDates.getDate();

            let currentday = currentDates.getDay();

            let currentYear = currentDates.getFullYear();


            // This Given By The User :
            let userDates = new Date(userAge);

            let userDate = userDates.getDate();

            let userDay = userDates.getDay();

            let userYear = userDates.getFullYear();





            let errors = document.querySelector("#emptys")

            if (userAge === "") {

                errors.innerHTML = "Plase Select Your Birth Age : ";
              
                errors.style.background = "black";

            }
            else {

                let storedYear = currentYear - userYear;

                let storedDate = currentDate - userDate;

                let storedDay = currentday - userDay;

                if (storedYear < 0) {

                    storedYear = -storedYear;

                }


                if (storedDate < 0) {

                    storedDate = -storedDate;

                }


                if (storedDay < 0) {

                    storedDay = -storedDay;

                }



                userageYaer.innerHTML = storedYear;

                userAgeMonth.innerHTML = storedDate;

                userAgeDay.innerHTML = storedDay;



            }







        }




































































































































































































        