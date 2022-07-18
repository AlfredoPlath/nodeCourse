const yargs = require('yargs')
const forecast = require("./utils/forecast")
const geolocation = require("./utils/geolocation")

yargs.command({
    command: "forecast",
    describe:"Get Forecast",
    builder:{
        location: {
            describe: "Name of the country",
            require: true,
            type: "String"
        }
    },
    handler(argv){
        geolocation(argv.location,(error, response) => {
 
            var {address} = response 

            if(error)
                return console.log(error)
        
            forecast(address, (error, response) => {
                if(error)
                    return console.log(error)
        
                console.log(response)
            })
        })
    }
})

yargs.parse()



