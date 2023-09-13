
// False
console.log(this === global)
console.log(this === module)


// True
console.log(this === module.exports)
console.log(this === exports)

// False
function logThis() {
    console.log('Dentro de uma função')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)
}

logThis()