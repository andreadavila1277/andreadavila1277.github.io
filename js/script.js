// Gráfico ODS
window.onload = function(){

if(document.getElementById("graficoODS")){

const ctx = document.getElementById("graficoODS");

new Chart(ctx,{
type:'bar',
data:{
labels:[
'Agua Potable',
'Saneamiento',
'Educación',
'Conservación'
],
datasets:[{
label:'Impacto del Proyecto (%)',
data:[90,80,70,85]
}]
}
});

}

}

// Galería
const imagenes=[
"img/galeria1.jpg",
"img/galeria2.jpg",
"img/galeria3.jpg"
];

let indice=0;

function siguiente(){
indice++;
if(indice>=imagenes.length){
indice=0;
}
document.getElementById("galeriaImg").src=imagenes[indice];
}

function anterior(){
indice--;
if(indice<0){
indice=imagenes.length-1;
}
document.getElementById("galeriaImg").src=imagenes[indice];
}
