var Tempo, contar, detener, iniciar, pantalla;

Tempo = (function() {
  function Tempo() {}

  Tempo.s;

  Tempo.m;

  Tempo.h;

  Tempo.S;

  Tempo.getSegundo = function() {
    return document.getElementById('segundo').value = this.s;
  };

  Tempo.setSegundo = function(segundo) {
    return this.s = segundo ? segundo : parseInt(document.getElementById('segundo').value);
  };

  Tempo.getMinuto = function() {
    return document.getElementById('minuto').value = this.m;
  };

  Tempo.setMinuto = function(minuto) {
    return this.m = minuto ? minuto : parseInt(document.getElementById('minuto').value);
  };

  Tempo.getHora = function() {
    return document.getElementById('hora').value = this.h;
  };

  Tempo.setHora = function(hora) {
    return this.h = hora ? hora : parseInt(document.getElementById('hora').value);
  };

  Tempo.setContador = function(numero) {
    this.S = 0;
    this.S += this.s;
    this.S += this.m * 60;
    this.S += this.h * 3600;
    if (numero) {
      return this.S = numero;
    }
  };

  Tempo.resetContador = function() {
    return this.S = 0;
  };

  Tempo.getContador = function() {
    return parseInt(this.S);
  };

  return Tempo;

})();

window.cuenta;

window.salida = document.getElementById('salida');

detener = function() {
  Tempo.setHora("00");
  Tempo.setMinuto("00");
  Tempo.setSegundo("00");
  Tempo.getSegundo();
  Tempo.getMinuto();
  Tempo.getHora();
  Tempo.resetContador();
  clearInterval(window.cuenta);
  window.cuenta = null;
  return window.salida.innerHTML = "";
};

iniciar = function(event) {
  Tempo.setHora();
  Tempo.setMinuto();
  Tempo.setSegundo();
  Tempo.setContador();
  if (window.cuenta) {
    event.preventDefault();
  }
  return window.cuenta = setInterval(contar, 1000);
};

contar = function() {
  Tempo.setHora("00");
  Tempo.setMinuto("00");
  Tempo.setSegundo("00");
  pantalla();
  Tempo.setContador(Tempo.getContador() - 1);
  if (Tempo.getContador() < 0) {
    Tempo.resetContador();
    clearInterval(window.cuenta);
    return window.salida.innerHTML = "<audio src=\"sound/una.mp3\" autoplay ></audios>";
  }
};

pantalla = function() {
  var minis, resHoras, resMinutos, resSegundos, restante;
  restante = Tempo.getContador();
  minis = Math.floor(restante / 60);
  resHoras = Math.floor(restante / 3600);
  resMinutos = (Math.floor(restante / 60)) - (60 * parseInt(resHoras));
  resSegundos = restante - (60 * minis);
  if (resHoras < 10) {
    resHoras = "0" + resHoras;
  }
  if (resMinutos < 10) {
    resMinutos = "0" + resMinutos;
  }
  if (resSegundos < 10) {
    resSegundos = "0" + resSegundos;
  }
  document.getElementById('hora').value = resHoras;
  document.getElementById('minuto').value = resMinutos;
  return document.getElementById('segundo').value = resSegundos;
};

detener();
