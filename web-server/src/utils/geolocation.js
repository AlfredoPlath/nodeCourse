const postmanRequest = require("postman-request")

const url=""

const geolocation = (address, callback) => {
    postmanRequest({url, json: true}, (error, {body} = {})=>{
    /*if(!response)
    {
        console.log("Couldn't get any response")
    }
    else if(response.body.length==0){
        console.log("Couldn't find location")
    }
    else{
        callback(undefined, {latitude: 0, longitude: 0, address: address})
    }*/callback(undefined, {latitude: 0, longitude: 0, address: address})
})
}

module.exports = geolocation