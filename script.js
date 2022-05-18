let audioVolume = 1

function playAudio(fileName){
    let audio = new Audio(`./sounds/${fileName}.wav`)
    if(audio) {
        audio.volume = audioVolume
        audio.play()
    }
}

let slider = document.getElementById("volume")

slider.oninput = function(){
    audioVolume = this.value / 10
}