let bar = new Chart(document.getElementById("barras"), {
    type: 'bar',
    data: {
        labels: ['Palio', 'Uno', 'Gol', 'Corsa', 'Up', 'Onix'],
        datasets: [{
            label: "Vendas realizadas",
            data: [10, 35, 24, 11, 12, 19],
            backgroundColor: "#0F0F0F"
        },
            {
                label: "Planejado",
                data: [20, 25, 30, 10, 15, 20],
                backgroundColor: "#ff8966"
            }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: 'Vendas de veículos Ago/2021'
            }
        }
    }
})

let linhas = new Chart(document.getElementById("linhas"), {
    type: 'line',
    data: {
        labels: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
        datasets: [{
            data: [1123, 1109, 1008, 1208, 1423, 1114, 1036],
            label: "Casos confirmados",
            borderColor: "#FFAE03",
        },
            {
                data: [200, 250, 75, 120, 175, 50, 15],
                label: "Óbitos",
                borderColor: '#ff8966',
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'left'
            },
            title: {
                display: true,
                position: 'left',
                text: 'Casos confirmados Ago/2021'
            },
            layout: {
                padding: {
                    left: 100,
                    right: 100,
                    top: 50,
                    bottom: 10
                }
            }
        }
    }
})

let pie = new Chart(document.getElementById("pie"), {
    type: 'pie',
    data: {
        labels: ['Iphone X', 'S20', 'A32'],
        datasets: [{
            data: [1123, 1109, 1008],
            label: "Vendas Ago/21",
            backgroundColor: ["#FFAE03", "#E67F0D", "#FE4E00"]
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'bottom'
            },
            title: {
                display: true,
                position: 'top',
                text: 'Vendas smartphones Ago/2021'
            },
            layout: {
                padding: {
                    left: 100,
                    right: 100,
                    top: 50,
                    bottom: 10
                }
            }
        }
    }
})

function getData() {
    pie.data.labels.push("HyperX Phone");
    pie.data.datasets[0].data.push(78);
    pie.update()
}

// setInterval(getData,500);