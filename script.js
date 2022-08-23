var modo = hPm

function checar()
{
    if(document.getElementById('hPm').checked == true)
    {
        document.getElementById('inputH').style.display = "block"
        document.getElementById('inputM').style.display = "none"
        modo = hPm
    }
    else
    {
        document.getElementById('inputM').style.display = "block"
        document.getElementById('inputH').style.display = "none"
        modo = mPh
    }
}

function converter()
{
    var inputH = Number(document.getElementById('horas').value)
    var inputM = Number(document.getElementById('minutos').value)
    var resultadoTXT = document.getElementById('resultadoTXT')
    var resultado = 0

    resultadoTXT.innerHTML= 'Resultado: '

    if(modo == hPm)
    {
        resultado = inputH * 60
        resultadoTXT.innerHTML += `${resultado} minutos`
    }

    if(modo == mPh)
    {
        resultado = Math.floor(inputM/60)
        resultadoTXT.innerHTML += `${resultado} horas e ${inputM%60} minutos`
    }
}