//Crea un promise
const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([1,4,8])
        reject('An error!')
    },2000)
})


//Registra las funciones que se van a ejecutar en caso de exito y error
doWorkPromise.then((result) => {
    console.log('Success! ' + result)
}).catch((error) => {
    console.log(error)
})