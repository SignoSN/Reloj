hora = ->
    
    horas = document.getElementById("hora")
    minutos = document.getElementById("min")
    segundos = document.getElementById("seg")
    peri = document.getElementById("peri")
    fecha = document.getElementById('fecha')
    d = new Date()
    
    meses = ["Enero", "Febrero", "Marzo" 
    "Abril", "Mayo", "Junio"
    "Julio", "Agosto", "Septiembre"
    "Octubre", "Noviembre", "Diciembre"]

    dias = ["Domingo","Lunes","Martes", "Miercoles"
    "Jueves", "Viernes", "Sábado"]

    
    
    A = d.getFullYear()
    Mes = d.getMonth()
    Dia = d.getDay()
    dia = d.getDate()

    fecha.innerHTML = "#{dias[Dia]} #{dia} de #{meses[Mes]} del #{A}"

    h = d.getHours()
    m = d.getMinutes()
    s = d.getSeconds()
    p = if h > 12 then "PM" else "AM"

    H = if h > 12 then h - 12 else h
    H = if H < 10 then "0#{H}" else H   
    M = if m < 10 then "0#{m}" else m
    S = if s < 10 then "0#{s}" else s
    horas.innerHTML = H
    minutos.innerHTML = M
    segundos.innerHTML = S
    peri.innerHTML = p

    "#{H}:#{M}:#{S} #{p}"

hora()
setInterval( () ->
    hora()
    document.title = hora()
,100)