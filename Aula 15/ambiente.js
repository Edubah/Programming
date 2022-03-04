let num = [5, 8, 2, 9, 1] //Declarando variável como ARRAY
num.sort() //Pega todos os elementos do ARRAY e coloca em ordem crescente
num.push(1) //Coloca automaticamento o valor entre parênteses na última posição do ARRAY
console.log(num)
console.log(`O valor tem ${num.length} posições.`)
console.log(`O primeiro valor é ${num[0]}.`)

let pos = num.indexOf(8)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}