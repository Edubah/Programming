var agora = new Date()
var hora = agora.getHours

if (hora < 5) {
    console.log('Boa madrugada!')
} else if (hora <= 11) {
    console.log('Bom dia!')
}else if (hora <= 16) {
    console.log('boa tarde!')
}else {
    console.log('Boa noite!')
}