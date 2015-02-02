fotos = ['http://c4.staticflickr.com/8/7369/15799001574_1315f607d1_n.jpg', 
         'http://c1.staticflickr.com/9/8625/15794208943_30743c6017_n.jpg' , 
         'http://c1.staticflickr.com/9/8654/16233056440_344d792f0d_n.jpg',
         'http://c2.staticflickr.com/8/7356/15795113883_e5f51a7a1b_n.jpg']
         
function changer (id, newValue) {
  var element = document.getElementById(id);
  element.style.visibility = 'visible';
  element.setAttribute('src', newValue);
}

function CambiaFotos(){
    imagenrandom = imagenAleatoria()

    changer('imagen', imagenrandom)
    
}
function CambiaFotosEnHTML(){  
     
     valor = aleatorio(1,4);
     id = 'imagen' + valor;   
     var element = document.getElementById(id);
     element.style.visibility = 'visible';
    
}

function aleatorio(inferior,superior){
    var numPosibilidades = superior - inferior
    var aleat = Math.random() * numPosibilidades
    aleat = Math.round(aleat)
    return parseInt(inferior) + aleat
} 

function imagenAleatoria(){
    primervalor = aleatorio(0,(fotos.length - 1));
    return fotos[primervalor];
}