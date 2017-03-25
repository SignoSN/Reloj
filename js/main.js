var hora;

hora = function() {
  var A, Dia, H, M, Mes, S, d, dia, dias, fecha, h, horas, m, meses, minutos, p, peri, s, segundos;
  horas = document.getElementById("hora");
  minutos = document.getElementById("min");
  segundos = document.getElementById("seg");
  peri = document.getElementById("peri");
  fecha = document.getElementById('fecha');
  d = new Date();
  meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado"];
  A = d.getFullYear();
  Mes = d.getMonth();
  Dia = d.getDay();
  dia = d.getDate();
  fecha.innerHTML = dias[Dia] + " " + dia + " de " + meses[Mes] + " del " + A;
  h = d.getHours();
  m = d.getMinutes();
  s = d.getSeconds();
  p = h > 12 ? "PM" : "AM";
  H = h > 12 ? h - 12 : h;
  H = H < 10 ? "0" + H : H;
  H = H === "00" ? "12" : H;
  M = m < 10 ? "0" + m : m;
  S = s < 10 ? "0" + s : s;
  horas.innerHTML = H;
  minutos.innerHTML = M;
  segundos.innerHTML = S;
  peri.innerHTML = p;
  return H + ":" + M + ":" + S + " " + p;
};

hora();

setInterval(function() {
  hora();
  return document.title = hora();
}, 100);
