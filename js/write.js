var dev = document.getElementById("dev");
var who = document.getElementById("who");
var cursor = document.getElementById("cursor");
var resultado;
var contador = 0;
var letra = 0;
var palabra = 0;
var escritura;
var finPalabra = false;

function presentacion(frase) {
  footer.style.marginTop =
    presentation.innerHeight + header.clientHeight + "px";

  presentation.style.height = window.innerHeight - footer.clientHeight + "px";

  if (window.innerWidth < 850) {
    presentation.style.paddingTop = header.clientHeight + "px";
  } else {
    presentation.style.paddingTop = header.clientHeight * 2 + "px";
  }

  setTimeout(function () {
    var ini = setInterval(function () {
      dev.innerHTML = dev.innerHTML + frase.charAt(contador);
      contador++;
      if (contador == frase.length) {
        clearInterval(ini);
      }
    }, 70);
  }, 1500);

  setTimeout(escribir, 3000);
}

function escribir() {
  var elegidas = [adjetivos[0]];
  clearInterval(resultado);
  escritura = setInterval(function () {
    if (finPalabra == false) {
      who.innerHTML = who.innerHTML + adjetivos[palabra].charAt(letra);
      letra++;
      if (letra == adjetivos[palabra].length) {
        clearInterval(escritura);
        var contador = 0;
        resultado = setInterval(function () {
          if (contador == 4) {
            escribir();
          } else {
            if (cursor.style.display == "none") {
              cursor.style.display = "inline-flex";
            } else {
              cursor.style.display = "none";
            }
            contador++;
          }
        }, 450);
      }
    } else {
      letra--;
      who.innerHTML = who.innerHTML.substring(0, letra);
      if (letra == 0) {
        if (elegidas.length == adjetivos.length) {
          elegidas = [];
        }
        do {
          palabra = Math.floor(Math.random() * (adjetivos.length - 0)) + 0;
        } while (elegidas.indexOf(adjetivos[palabra]) != -1);
        elegidas.push(adjetivos[palabra]);
        finPalabra = false;
      }
    }

    if (palabra >= adjetivos.length) {
      palabra = 0;
    }

    if (letra > adjetivos[palabra].length) {
      finPalabra = true;
    }
  }, 70);
}

window.onresize = function () {
  footer.style.marginTop =
    presentation.innerHeight + header.clientHeight + "px";
  presentation.style.height = window.innerHeight - footer.clientHeight + "px";

  if (window.innerWidth < 850) {
    presentation.style.paddingTop = header.clientHeight + "px";
  } else {
    presentation.style.paddingTop = header.clientHeight * 2 + "px";
  }
};
var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var a = document.querySelectorAll('a');

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function(){
  cursor.classList.add('click');
  cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function(){
  cursor.classList.remove('click')
  cursorinner.classList.remove('cursorinnerhover')
});

a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
})