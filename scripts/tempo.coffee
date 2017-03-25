class Tempo
    @s
    @m
    @h
    @S
    @getSegundo = ->
        document.getElementById('segundo').value = @s
        
    @setSegundo = (segundo) ->
        @s = if segundo  then segundo else parseInt(document.getElementById('segundo').value)
    @getMinuto: ->
        document.getElementById('minuto').value = @m
    @setMinuto = (minuto) ->
        @m = if minuto then minuto else parseInt(document.getElementById('minuto'). value)
    @getHora = ->
        document.getElementById('hora').value = @h
    @setHora = (hora) ->
        @h = if hora then hora else parseInt(document.getElementById('hora').value)
    @setContador = (numero) ->
        @S = 0
        @S += @s
        @S += @m * 60
        @S += @h * 3600
        if numero
            @S = numero

    @resetContador = ->
        @S = 0
    @getContador = ->
        parseInt(@S)
    
    

#Tempo.resetContador()

window.cuenta
window.salida = document.getElementById('salida')

detener = ->
    Tempo.setHora("00")
    Tempo.setMinuto("00")
    Tempo.setSegundo("00")
    Tempo.getSegundo()
    Tempo.getMinuto()
    Tempo.getHora()
    Tempo.resetContador()
    clearInterval(window.cuenta)
    window.cuenta = null;
    window.salida.innerHTML = ""

iniciar = (event) ->
    Tempo.setHora()
    Tempo.setMinuto()
    Tempo.setSegundo()
    Tempo.setContador()
    if window.cuenta
        event.preventDefault()
    window.cuenta = setInterval(contar,1000)
    
         
    

contar = ->
    Tempo.setHora("00")
    Tempo.setMinuto("00")
    Tempo.setSegundo("00")
    pantalla();
    Tempo.setContador(Tempo.getContador() - 1)
    
    if Tempo.getContador() < 0
        Tempo.resetContador()
        clearInterval(window.cuenta)
        window.salida.innerHTML="<audio src=\"sound/una.mp3\" autoplay ></audios>"
        # setTimeout(alert("Tiempo Agotado"), 1000)


pantalla = ->
    restante = Tempo.getContador()
    minis = Math.floor(restante / 60)
    resHoras = Math.floor(restante / 3600)
    resMinutos = (Math.floor(restante / 60)) - (60 * parseInt(resHoras))
    resSegundos = restante - (60 * minis)

    if resHoras < 10
        resHoras = "0#{resHoras}"
    if resMinutos < 10
        resMinutos = "0#{resMinutos}"
    if resSegundos < 10
        resSegundos = "0#{resSegundos}"
    
    document.getElementById('hora').value = resHoras
    document.getElementById('minuto').value = resMinutos
    document.getElementById('segundo').value = resSegundos
    
detener()