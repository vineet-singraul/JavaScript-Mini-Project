
let store = "";
let Pressed = (value) => {
    let show = document.querySelector("#display");
    store = store + value;
    show.value = store;
}


EqalTo = () => {
    let show = document.querySelector("#display");
    show.value = eval(store);
    store = eval(store);
    store.toString();
}

CleareAll = () => {
    store = "";
    let show = document.querySelector("#display");
    show.value = store;
}

const CleareOne = () => {
    let show = document.querySelector("#display");
    show.value = show.value.slice(0, -1);
    store = ""
}

const Sqar=()=>{
    let show = document.querySelector("#display");
    show.value = store*store;
}

const Qube=()=>{
    let show = document.querySelector("#display");
    show.value = store*store*store;
}

























































































































































