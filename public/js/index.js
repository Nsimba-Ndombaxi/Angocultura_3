const cards = document.querySelectorAll(".card")

window.onload = () => {

    // forma certa de carregar é esta:
    /* cards.forEach(card => {
         const img = card.querySelector("img")
 
         if (img) {
             if (img.complete) {
                 card.classList.remove("loading")
                 console.log("página carregada da forma 1")
             } else {
                 img.addEventListener("load", () => {
                     card.classList.remove("loading")
                     console.log("página carregada da forma 2")
                 })
             }
         }
 
     })*/
    setTimeout(() => {
        cards.forEach(card => {
            const img = card.querySelector("img")

            if (img) {
                if (img.complete) {
                    card.classList.remove("loading")
                    console.log("página carregada da forma 1")
                } else {
                    img.addEventListener("load", () => {
                        card.classList.remove("loading")
                        console.log("página carregada da forma 2")
                    })
                }
            }

        })
    }, 1200)
}

var btn_pesquisar = document.querySelector("#btn_pesquisar")
var pesquisa = document.querySelector("#pesquisa")
var grupos = document.querySelectorAll(".grupo-1")

btn_pesquisar.addEventListener("click", () => {
    console.clear()
    grupos.forEach(grupo => {
        var cards = grupo.querySelectorAll(".card")
        if (!(window.innerWidth <= "700")) {
            grupo.style.animation = "none"
            grupo.style.paddingLeft = "3em"
        }

        cards.forEach(card => {
            card.style.display = "flex"
        })

        cards.forEach(card => {
            console.log(`id ${card.id}`)
            var cultura = pesquisa.value.toLowerCase().trim()
            console.log(`cultura ${cultura}`)
            if (!card.id.startsWith(cultura)) {
                card.style.display = "none"
            }
        })
    })
})

document.addEventListener("keydown", (evento) => {
    if (evento.key == "Enter") {
        console.clear()
        grupos.forEach(grupo => {
            var cards = grupo.querySelectorAll(".card")
            if (!(window.innerWidth <= "700")) {
                grupo.style.animation = "none"
                grupo.style.paddingLeft = "3em"
            }

            cards.forEach(card => {
                card.style.display = "flex"
            })
            
            cards.forEach(card => {
                console.log(`id ${card.id}`)
                var cultura = pesquisa.value.toLowerCase().trim()
                console.log(`cultura ${cultura}`)
                if (!card.id.startsWith(cultura)) {
                    card.style.display = "none"
                }
            })
        })
    }
})

pesquisa.addEventListener("change", () => {
    if (pesquisa.value.length == 0) {
        console.clear()
        console.log(" o input mudou")
        grupos.forEach(grupo => {
            console.log(window.innerWidth)
            if ((!(window.innerWidth <= "700"))) {
                grupo.style.animation = "spin 20s infinite linear running"
                grupo.style.paddingLeft = "0"
            }
            var cards = grupo.querySelectorAll(".card")
            cards.forEach(card => {
                card.style.display = "flex"
            })
        })
    }
})
//setInterval(, 1000)


function animationStop() {
    grupos.forEach(grupo => {
        console.log(window.innerWidth)
        if (!(window.innerWidth <= "700") & (pesquisa.value.length == 0)) {
            grupo.style.animation = "spin 20s infinite linear paused"
            grupo.style.paddingLeft = "0"
        }
    })
}

function animationPlay() {
    grupos.forEach(grupo => {
        console.log(window.innerWidth)
        if (!(window.innerWidth <= "700") & (pesquisa.value.length == 0)) {
            grupo.style.animation = "spin 20s infinite linear running"
            grupo.style.paddingLeft = "0"
        }
    })
}
