var tocar_musica = document.getElementById("tocar_musica")
var musica = document.getElementById("musica")
var video = document.getElementById("video")

video.addEventListener("play", () => {
    musica.pause()
    tocar_musica.src = "./public/img/icon/musica_pause.png"
})
tocar_musica.addEventListener("click", () => {

    if (musica.paused) {
        musica.play()
        //musica.currentTime = 0  
        tocar_musica.src = "./public/img/icon/musica_play.png"
        video.pause()
    } else {
        musica.pause()
        tocar_musica.src = "./public/img/icon/musica_pause.png"
    }
})


window.onload = () => {
    const card_aside = document.querySelector(".card-aside")
    const inicio = document.querySelector(".inicio")
    setTimeout(() => {
        card_aside.classList.remove("loading")
        inicio.classList.remove("loading")
    }, 1600)
}

