const Display = () => {
    let counter = Math.floor(Math.random() * 6) + 1;

    let box1 = document.querySelector("#main_div1");
    let box2 = document.querySelector("#main_div2");
    let box3 = document.querySelector("#main_div3");
    let box4 = document.querySelector("#main_div4");
    let box5 = document.querySelector("#main_div5");
    let box6 = document.querySelector("#main_div6");

    if (counter == 1) {
        box1.style.opacity = 1;
        box2.style.opacity = 0;
        box3.style.opacity = 0;
        box4.style.opacity = 0;
        box5.style.opacity = 0;
        box6.style.opacity = 0;
    } else if (counter == 2) {
        box1.style.opacity = 0;
        box2.style.opacity = 1;
        box3.style.opacity = 0;
        box4.style.opacity = 0;
        box5.style.opacity = 0;
        box6.style.opacity = 0;
    } else if (counter == 3) {
        box1.style.opacity = 0;
        box2.style.opacity = 0;
        box3.style.opacity = 1;
        box4.style.opacity = 0;
        box5.style.opacity = 0;
        box6.style.opacity = 0;
    } else if (counter == 4) {
        box1.style.opacity = 0;
        box2.style.opacity = 0;
        box3.style.opacity = 0;
        box4.style.opacity = 1;
        box5.style.opacity = 0;
        box6.style.opacity = 0;
    } else if (counter == 5) {
        box1.style.opacity = 0;
        box2.style.opacity = 0;
        box3.style.opacity = 0;
        box4.style.opacity = 0;
        box5.style.opacity = 1;
        box6.style.opacity = 0;
    } else if (counter == 6) {
        box1.style.opacity = 0;
        box2.style.opacity = 0;
        box3.style.opacity = 0;
        box4.style.opacity = 0;
        box5.style.opacity = 0;
        box6.style.opacity = 1;
    }
}