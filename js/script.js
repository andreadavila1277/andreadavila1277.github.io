// Gráfica ODS

const grafica = document.getElementById("graficaODS");

if(grafica){

new Chart(grafica, {
    type: 'bar',

    data: {
        labels: ['Reciclaje', 'Energía limpia', 'Reducción CO2'],

        datasets: [{
            label: 'Impacto ambiental positivo',

            data: [70, 85, 90],

            backgroundColor: [
                '#4CAF50',
                '#2196F3',
                '#FFC107'
            ]
        }]
    },

    options: {
        responsive: true
    }
});

}
