var video = document.querySelector('#videoPrincipal');
var play = document.querySelector('#play');
var stop = document.querySelector('#stop');
var forward = document.querySelector('#forward');
var rewind = document.querySelector('#rewind');
var pantallaCompleta = document.querySelector('#fullScreen');

function reproducir() {
    if(video.paused) {
        video.play();
        play.innerHTML='<span class="icon-pause"></span>';
    } else {
        video.pause();
        play.innerHTML ='<span class="icon-play">';
    }
}

function detener() {
    video.currentTime=0;
    video.pause();
    play.innerHTML = '<span class="icon-play">';
}

function adelantar(valor) {
    video.currentTime+=valor;
}

function retroceder(valor) {
    video.currentTime-=valor;
}

function openFullscreen() {
    if (video.requestFullscreen) {
        video.requestFullscreen();
        if(video.paused) {
            play.innerHTML='<span class="icon-pause"></span>';
        } else {
            play.innerHTML ='<span class="icon-play">';
        }
    }
}

play.addEventListener('click', function(e) {
    e.preventDefault();
    reproducir();
})

stop.addEventListener('click', function(e) {
    e.preventDefault();
    detener();
})

forward.addEventListener('click', function(e) {
    e.preventDefault();
    adelantar(30);
})

rewind.addEventListener('click', function(e) {
    e.preventDefault();
    retroceder(10);
})

pantallaCompleta.addEventListener('click', function(e) {
    e.preventDefault();
    openFullscreen();
})