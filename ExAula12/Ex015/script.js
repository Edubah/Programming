function verificar() {
    
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')

        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'bebemenino.jpg')
                document.body.style.background='#ff665a'
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovemhomem.jpg')
                document.body.style.background='#705E78'
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'homemadulto.jpg')
                document.body.style.background='#FFF587'
            } else {
                //idoso
                img.setAttribute('src', 'idoso.jpg')
                document.body.style.background='#A3A1A8'
            }
        }else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'bebemenina.jpg')
                document.body.style.background='#FF8C64'
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovemmulher.jpg') 
                document.body.style.background='#5AAA3'
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'mulheradulta.jpg')
                document.body.style.background='#812F33'
            } else {
                //Idoso
                img.setAttribute('src', 'idosa.jpg')
                document.body.style.background='#FEA443'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}