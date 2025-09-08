let audio;

function playMusic() {
    if (!audio) {
        audio = new Audio('music/love-song.mp3');
    }
    audio.play();
}