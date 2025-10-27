var tipo_grafico = document.getElementById("tipo_grafico")
let grafico_actual

tipo_grafico.addEventListener("change", () => {
    console.log(tipo_grafico.value)
    if (tipo_grafico.value) {
        criar_grafico(tipo_grafico.value)
    }
})

criar_grafico("doughnut")


function carregar_barra(id, percentagem) {
    var barra = document.getElementById(id)
    var width = 0
    const loop = setInterval(() => {
        if (width >= percentagem) {
            console.log("barra carregada")
            clearInterval(loop)
        }
        width++
        console.log(`${width}%`)
        barra.style.width = width + "%"
    }, 10)
}

function descarregar_barra(id) {
    var barra = document.getElementById(id)
    barra.style.width = "0%"
    console.log("barra descarregada")
}


function criar_grafico(tipo) {
    if (grafico_actual) {
        grafico_actual.destroy()
    }

    const dados = {
        labels: ["HTML5", "CSS3", "JavaScript"],
        datasets: [{
            label: "Percentagem %",
            data: [40,33,27],
            backgroundColor: [
                "#ff8918",
                "#36a2eb",
                "#ffce56",
            ],
            borderColor: "#1111",
            borderWidth: 1,
            borderRadius: 1,
            barThickness: 50,
            categoryPercentage: 0.8,
            barPercentage: 0.2,
        }]
    }

    const config = {
        type: tipo, // doughnut // bar // pie // line // radar //polarArea //
        data: dados,
        Options: {
            color: "#fff",
            pesponsive: true,
            plugins: {
                legend: {
                    labels: {
                    },
                    position: "top"
                },
                title: {
                    display: true,
                    text: "Percentagem",
                }
            }
        }
    }
    grafico_actual = new Chart(
        document.getElementById("grafico"), config
    )
}
