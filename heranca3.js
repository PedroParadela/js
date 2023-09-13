const pai = {nome: 'Marcelo', corCabelo: 'Preto'}

const filho1 = Object.create(pai)
filho1.nome = 'Pedro'
console.log(filho1)

const filha1 = Object.create(pai, {
     nome: { value: 'Letícia', writable: false, enumerable: true }
})

console.log(filha1.nome)
filha1.nome = 'Clara'
console.log(`${filha1.nome} tem cabelo ${filha1.corCabelo}`)

console.log(Object.keys(filho1))
console.log(Object.keys(filha1))

for(let key in filha1) {
    filha1.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança: ${key}`)
}