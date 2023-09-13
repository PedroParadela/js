const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')() // Chamando a função factory
const contadorD = require('./instanciaNova')() // Chamando a função factory

contadorA.inc()
contadorA.inc()

console.log(contadorB.valor) // Contador A === Contador B


contadorC.inc()
contadorC.inc()

console.log(contadorD.valor)