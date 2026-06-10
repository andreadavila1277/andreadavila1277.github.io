// Gráfico ODS

window.onload = function(){

    const canvas = document.getElementById("graficoODS");

    if(canvas){

        const ctx = canvas.getContext("2d");

        new Chart(ctx,{
            type:"bar",
            data:{
                labels:["Agua","Educación","Salud","Ambiente"],
                datasets:[{
                    label:"Impacto ODS",
                    data:[90,75,80,85]
                }]
            }
        });
    }
}

// Galería de eventos

const imagenes = [
    "img/evento1.jpg",
    "img/evento2.jpg",
    "img/evento3.jpg"
];

let actual = 0;

function siguiente(){

    actual++;

    if(actual >= imagenes.length){
        actual = 0;
    }

    document.getElementById("galeria").src = imagenes[actual];
}

function anterior(){

    actual--;

    if(actual < 0){
        actual = imagenes.length - 1;
    }

    document.getElementById("galeria").src = imagenes[actual];
}
