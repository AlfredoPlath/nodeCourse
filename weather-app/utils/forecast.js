const postmanRequest = require('postman-request')

const forecast = (location, callback) => {

    const weaterUrl="http://api.weatherstack.com/current?access_key=0d9bbfef9cc4c29dfe9e8db322c0cd96&query="+location
    
    postmanRequest({url:weaterUrl, json:true},(error,response)=>{
        if(!response)
        {
            callback("Couldn't get any response", undefined)
        }
        else if(response.body.length==0){
            callback("Could not find weather", undefined)
        }
        else if(!response.body.current)
        {
            callback("There was a problem to request the data", undefined)
        }
        else{
            callback(undefined,"It is currently " + response.body.current.temperature + " degrees out. It feels like " + response.body.current.feelslike + " degrees out.")
        }
    })
    }

    module.exports = forecast