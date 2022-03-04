function contar() {

    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam Dados!!')
    } else {
        res.innerHTML = 'Contando... <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0){
            window.alert('[ERRO] Passo Inválido!')
            window.alert('Considerando Passo = 1')
            p = 1
        }
        if (i < f) {
            //Contagem Crescente
            for (let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F449} `
            }
           //Contagem Regressiva
        } else {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c}  \u{1F449}`
            }
        }
        res.innerHTML += `Fim!! \u{1F61D}`
    }
    
} 