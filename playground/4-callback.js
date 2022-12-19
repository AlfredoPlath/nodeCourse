const doWorkCallback = (callback) => {
    setTimeout(() => {
       // callback('There was an error', undefined)
        callback(undefined, [1,4,7])
    },2000)
}

doWorkCallback((error, reult) => {
    if(error)
        return console.log(error)

    console.log(result)
})