alert ("Olá, tudo certo? Me chamo Davi Almeida. E este é o projeto do Abrigo dos Animais que foi proposto na etapa do desafio técnico")


let nome1 = "João"
let brinquedo1 = ["Caixa", "Novelo", "Skate", "Rato"]
let pessoaeanimal1 = ["Skate, Rato", "Caixa, Novelo", "Loco, Bola"]


let nome2 = "Maria"
let brinquedo2 = ["Bola", "Laser"]
let pessoaeanimal2 = ["Bola, Laser", "Mimi"]


let animais = ["Bola", "Bebe", "Fofo", "Loco", "Mimi", "Rex", "Zero"]

let lista = ["Rato", "Bola", "Laser", "Caixa", "Novelo", "Skate"];


console.log("Animais:", "Bola", "-", "Bebe", "-", "Fofo","-", "Loco", "-", "Mimi", "-", "Rex", "-", "Zero")
console.log("Brinquedos:", "Rato", "-", "Bola", "-","Laser", "-", "Caixa", "-", "Novelo", "-", "Skate")
console.log(pessoaeanimal1[2], "-", nome1)
console.log(pessoaeanimal2[1], "-", nome2)
console.log("Ficaram 4 animais para adotar (tadinhos)")

let animalinvalido = "Davi"
if (animalinvalido == animais[0]) {
    console.log("Animal válido")
} else if (animalinvalido == animais[1]) {
    console.log("Animal válido")
} else if (animalinvalido == animais[2]){
    console.log("Animal válido")
} else if (animalinvalido == animais[3]) {
    console.log("Animal válido")
} else if (animalinvalido == animais[4]) {
    console.log("Animal válido")
} else if (animalinvalido == animais[5]) {
    console.log("Animal válido")
} else if (animalinvalido == animais[6]) {
    console.log("Animal válido")
} else {
    console.log("Animal inválido")
}
    
let brinquedoinvalido = "Casa"
if (brinquedoinvalido == lista[0]) {
    console.log("Brinquedo válido")
} else if (brinquedoinvalido == lista[1]) {
    console.log("Brinquedo válido")
} else if (brinquedoinvalido == lista[2]){
    console.log("Brinquedo válido")
} else if (brinquedoinvalido == lista[3]) {
    console.log("Brinquedo válido")
} else if (brinquedoinvalido == lista[4]) {
    console.log("Brinquedo válido")
} else if (brinquedoinvalido == lista[5]) {
    console.log("Brinquedo válido")
} else {
    console.log("Brinquedo inválido")
}

