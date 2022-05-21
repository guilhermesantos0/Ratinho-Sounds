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

    let labelValue = ""
    if(labelVolume > 50) labelValue = `<i class="fa-solid fa-volume-high"></i> Volume: <vl>${labelVolume}</vl>%`
    else if(labelVolume > 0) labelValue = `<i class="fa-solid fa-volume-low"></i> Volume: <vl>${labelVolume}</vl>%`
    else labelValue = `<i class="fa-solid fa-volume-xmark"></i> Volume: <vl>${labelVolume}</vl>%`

    label.innerHTML = labelValue 
}