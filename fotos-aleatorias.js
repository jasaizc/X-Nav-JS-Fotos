fotos = ['http://c1.staticflickr.com/9/8674/15808133833_44b987a6e9_n.jpg', 
         'http://c1.staticflickr.com/9/8625/15794208943_30743c6017_n.jpg' , 
         'http://c1.staticflickr.com/9/8654/16233056440_344d792f0d_n.jpg',
         'http://c2.staticflickr.com/8/7356/15795113883_e5f51a7a1b_n.jpg']
         
function changer (id, newValue) {
  var element = document.getElementById(id);
  element.style.display = 'inline';
  element.setAttribute('src', newValue);
}

function CambiaFotos(){
    imagenrandom = imagenAleatoria()

    changer('imagen', imagenrandom)
    
}
function CambiaFotosEnHTML(){  
     
     valor = aleatorio(1,4);
     for (var i = 1; i < 5; i++)
     {
       id = 'imagen' + i;
       var element = document.getElementById(id); 
       if (i != valor)                
         element.style.display = 'none';
       else
         element.style.display = 'inline';  
     }
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