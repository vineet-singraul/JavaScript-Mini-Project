let dataStore = [
    {
        id: "1",
        image: "/image/f.png",
        singer: "Arijit Singh",
        song: "Ranjhaa",
        time: "03:12 seconds.....",
        clip: '/song/r.mp3'
    },
    {
        id: "2",
        image: "/image/z1.png",
        singer: "Arijit Singh",
        song: "Kesariya",
        time: "03:12 seconds.....",
        clip: '/song/kesariya.mp3'
    },
    {
        id: "3",
        image: "/image/z2.png",
        singer: "Arijit Singh",
        song: "O mahi o mahi ",
        time: "03:12 seconds.....",
        clip: '/song/o1.mp3'
    },
    {
        id: "4",
        image: "/image/z3.png",
        singer: "Arijit Singh",
        song: "Occhhi occhhi Diwaro ko",
        time: "03:12 seconds.....",
        clip: '/song/oo.mp3'
    },
    {
        id: "5",
        image: "/image/z4.png",
        singer: "Arijit Singh",
        song: "Sajni re",
        time: "03:12 seconds.....",
        clip: '/song/sajni.mp3'
    },
    {
        id: "6",
        image: "/image/z4.png",
        singer: "Arijit Singh",
        song: "Tere Hawale Ker Diya",
        time: "03:12 seconds.....",
        clip: '/song/th.mp3'
    },
    {
        id: "7",
        image: "/image/z5.png",
        singer: "Arijit Singh",
        song: "Ranjhaa",
        time: "03:12 seconds.....",
        clip: '/song/tkdk.mp3'
    },
    {
        id: "8",
        image: "/image/h.png",
        singer: "Hony Singh , Paradox",
        song: "Payal ",
        time: "02:42 seconds.....",
        clip: '/song/honey.mp3'
    }
];

// DATA RANDER KARTA HAI DYNAMICAALY JSION SE LEKER
const Display = (value) => {
    return `
        <div id="card" onclick='updateContainer(${JSON.stringify(value)})'>
            <img src="${value.image}" onclick="PlayPushSong('${value.clip}', this)" id="img" alt="">
            <strong id="singer_name">${value.singer}</strong>
            <h4 id="song_name">${value.song}</h4>
            <p id="timing">${value.time}</p>
            <div id="Hart">💓</div>
        </div>`;
};
let mainDiv = document.querySelector("#main_div");
mainDiv.innerHTML = dataStore.map(value => Display(value)).join('');



// DATA RANDER KARTA HAI DYNAMICALLY DETAILS ME
const updateContainer = (value) => {
    const container = document.getElementById("container");
    const img = container.querySelector("img");
    const singer = container.querySelector("#singer");
    const song = container.querySelector("#song");
    const timing = container.querySelector("#timing");

    img.src = value.image; 
    singer.innerText = value.singer;
    song.innerText = value.song; 
    timing.innerText = value.time; 
};




// Play or pause the song
let currentAudio = null;
let currentButton = null; 
let playbtn = document.querySelector("#Playpush");
let count = 0;
let audio1 = null;

const PlayPushSong = (clip, btn) => {
    let audio = btn.audio || new Audio(clip);
    let buut = btn.parentElement;
    audio1 = audio;

    if (currentAudio && currentAudio !== audio) {
        currentAudio.pause();
        if (currentButton) {
            currentButton.parentElement.style.background = "#fff";
        }
    }    

    // Play or pause the new song
    if (audio.paused) {
        audio.play();
        playbtn.innerHTML = "⏸️";
        count++;
        buut.style.background = "linear-gradient(45deg,#0f506d, #650080, #000fff)";
    } else {
        audio.pause();
        playbtn.innerHTML = "▶";
        count--;
        buut.style.background = "#fff";
    }

    btn.audio = audio;
    currentAudio = audio;
    currentButton = btn; // Track the current button
};

let curretIndex = 0;
// FORWORD AND BACKWORD SONG KE LIYE
const forwordbtn = () => {
    curretIndex = (curretIndex + 1) % dataStore.length;
    const nextSong = dataStore[curretIndex];
    updateContainer(nextSong);
    count++;

    if (currentAudio) {
        currentAudio.pause();
    }

    currentAudio = new Audio(nextSong.clip);
    currentAudio.play();
    playbtn.innerHTML = "⏸️";

    const cards = document.querySelectorAll("#card");
    cards.forEach((card, index) => {
        card.style.background = index === curretIndex
            ? "linear-gradient(45deg, #0f506d, #650080, #000fff)"
            : "#fff";
    });
};

const Backwords=()=>{
    curretIndex = (curretIndex - 1) % dataStore.length;
    const nextSong = dataStore[curretIndex];
    updateContainer(nextSong);
    count--;

    if (currentAudio) {
        currentAudio.pause();
    }

    currentAudio = new Audio(nextSong.clip);
    currentAudio.play();
    playbtn.innerHTML = "⏸️";

    const cards = document.querySelectorAll("#card");
    cards.forEach((card, index) => {
        card.style.background = index === curretIndex
            ? "linear-gradient(45deg, #0f506d, #650080, #000fff)"
            : "#fff";
    });
}

// BUTTON PLAY PUSH SONG
const PlayPushSongbtn = (clip, btn) => {
    let playPush = document.querySelector("#Playpush");
    if (count !== 0) {
        audio1.pause();
        playbtn.innerHTML = "▶";
        count--;
        let buutt = btn.parentElement;
    }
    else if (count !== 1) {
        audio1.play();
        playbtn.innerHTML = "⏸️";
        count++;
    }
}
