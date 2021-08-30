// JavaScript Document



function animacion(e){

    var elemento = document.getElementById('lienzo');
    var dibujo = elemento.getContext('2d');
    
    dibujo.beginPath();
    dibujo.arc(150, 80, 40, 0, Math.PI*2, true);
    dibujo.closePath();
    dibujo.strokeStyle='#FFFFFF';
    dibujo.stroke();
    dibujo.beginPath();
    dibujo.arc(200, 100, 20, 0, Math.PI*2, false);
    dibujo.closePath();
    dibujo.fillStyle='#cccccc';
    dibujo.fill();
} 

window.addEventListener("load", animacion, false);
