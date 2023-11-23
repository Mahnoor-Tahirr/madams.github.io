const trigger_search = document.querySelector('.trigger_search');
const input = document.querySelector('.input');

trigger_search.addEventListener('click', () => {
    if (!input.classList.contains('input-open')) {
        input.classList.add('input-open');
        trigger_search.innerHTML = "<i class='fas fa-times'></i>"
    }
    else {
        input.classList.remove('input-open');
        trigger_search.innerHTML = "<i class='fas fa-search'></i>"
    }
})
$(document).ready(function () {
    $(".btn1").click(function () {
        $("#form").slideDown();
    });
});
$(document).ready(function () {
    $(".btn2").click(function () {
        $("#form2").slideDown();
    });
});
let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime; 
}
function playPause(){
    if(ctrlIcon.classList.contains("fa-pause")){
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
    else{song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
}
 
if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime;
    },500);
}
progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
}


const cursor = document.querySelector(".cursor");
var timeout;

document.addEventListener("mousemove", (e) => {
    let x = e.pageX;
    let y = e.pageY;

    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    cursor.style.display = "block";
});
document.addEventListener("mouseout", () => {
    cursor.style.display = "none"; 
    function mouseStopped(){
        cursor.style.display = "none";
    }
    clearTimeout(timeout);
    timeout = setTimeout(mouseStopped, 1000);
});

// var wavesurfer = WaveSurfer.create({
//     container: '#waveform',
//     waveColor: 'violet',
//     progressColor: 'purple',
// });