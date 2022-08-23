var modo = hPm
document.getElementById('horas').focus()
function checar()
{
    if(document.getElementById('hPm').checked == true)
    {
        document.getElementById('inputH').style.display = "block"
        document.getElementById('inputM').style.display = "none"
        modo = hPm
        document.getElementById('horas').focus()
        resultadoConvTXT.innerHTML= 'Resultado: '
    }
    else
    {
        document.getElementById('inputM').style.display = "block"
        document.getElementById('inputH').style.display = "none"
        modo = mPh
        document.getElementById('minutos').focus()
        resultadoConvTXT.innerHTML= 'Resultado: '
    }
}

function converter()
{
    var inputH = Number(document.getElementById('horas').value)
    var inputM = Number(document.getElementById('minutos').value)
    var inputMH = Number(document.getElementById('minutosH').value)
    var resultadoConvTXT = document.getElementById('resultadoConvTXT')
    var resultadoConv = 0
    var resto = 0 

    resultadoConvTXT.innerHTML= 'Resultado: '

    if(modo == hPm)
    {
        if (isNaN(inputH) == true)
        {
            inputH = Number(document.getElementById('horas').value.replace(',','.'))
        }
        resultadoConv = (inputH * 60) + inputMH
        resultadoConvTXT.innerHTML += `${resultadoConv} minutos`
        document.getElementById('horas').focus()
    }

    if(modo == mPh)
    {
        resto = inputM%60
        resultadoConv = Math.floor(inputM/60)
        var palavraH
        var palavraM

        if(resultadoConv > 1)
        {
            palavraH = "horas"
        }
        else
        {
            palavraH = "hora"
        }

        if(resto > 1)
        {
            palavraM = "minutos"
        }
        else
        {
            palavraM = "minuto"
        }

        if (inputM < 60)
        {
            resultadoConvTXT.innerHTML += `${inputM} ${palavraM}` 
        }
        else if (resto != 0)
        {
            resultadoConvTXT.innerHTML += `${resultadoConv} ${palavraH} e ${resto} ${palavraM}`
        }
        else
        {
            resultadoConvTXT.innerHTML += `${resultadoConv} ${palavraH}`
        }
        
        document.getElementById('minutos').focus()
    }
}
function tempoQ()
{
    var inputTempo = Number(document.getElementById('tempo').value)
    var inputQuest = Number(document.getElementById('nQuestoes').value)
    var resultadoTempoQTXT = document.getElementById('resultadoTempoQTXT')
    var resultadoTQ
    var restoTQ

    resultadoTempoQTXT.innerHTML = 'Resultado: '

    resultadoTQ = inputTempo/inputQuest
    restoTQ = (inputTempo%inputQuest)
    if(restoTQ != 0)
    {
        resultadoTempoQTXT.innerHTML += `${resultadoTQ.toFixed(2)} min por questão`
    }
    else
    {
        resultadoTempoQTXT.innerHTML += `${resultadoTQ} min por questão`
    }
    document.getElementById('tempo').focus()
}