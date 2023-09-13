import { readFileSync, readFile, readdir } from 'fs'

const caminho = __dirname + "/arquivo.json"

// sincrono...
const conteudo = readFileSync(caminho, "utf-8")
console.log(conteudo)

// assincrono...
readFile(caminho, "utf-8", (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

import { db } from './arquivo.json' // Não precisa do JSON.parse()
console.log(db)

readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta:')
    console.log(arquivos)
})
