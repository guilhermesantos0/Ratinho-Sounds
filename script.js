let audioVolume = 1

function playAudio(fileName){
    let audio = new Audio(`./sounds/${fileName}.wav`)
    if(audio) {
        audio.volume = audioVolume
        audio.play()
    }
}

let slider = document.getElementById("volume")
let label = document.getElementById("volumeLabel")

slider.oninput = function(){
    let labelVolume = this.value
    audioVolume = labelVolume / 100

    label.innerHTML = `<i class="fa-solid fa-volume-high"></i> Volume: <vl>${labelVolume}</vl>%`
}