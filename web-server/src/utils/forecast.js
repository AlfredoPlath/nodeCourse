const postmanRequest = require('postman-request')

const forecast = (location, callback) => {

    const url="http://api.weatherstack.com/current?access_key=0d9bbfef9cc4c29dfe9e8db322c0cd96&query="+location
    
    postmanRequest({url, json:true},(error,{body})=>{
        if(!body)
        {
            callback("Couldn't get any response", undefined)
        }
        else if(body.length==0){
            callback("Could not find weather", undefined)
        }
        else if(!body.current)
        {
            callback("There was a problem to request the data", undefined)
        }
        else{
            callback(undefined,{temperature: body.current.temperature, descripiton: body.current.weather_descriptions})
        }
    })
    }

    module.exports = forecast