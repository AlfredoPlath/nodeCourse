const path = require('path')
const express = require('express')
const hbs = require('hbs')
const forecast = require('./utils/forecast')
const geolocation = require('./utils/geolocation')

const app = express()
const port = process.env.PORT || 3000

// Define paths for express config
const publicDirectoryPath = path.join(__dirname,'../public')
const viewPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and view locations
app.set('view engine','hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'WEATHER APP!',
        name: 'Alfredo Plath'
    })
})

app.get('/about', (req, res) => {
    res.render('about',{
        title: 'About Me',
        name: 'Alfredo Plath'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'HELP!',
        message: 'How can I help you?',
        name: 'Alfredo Plath'
    })
})

app.get("/weather", (req,res) => {

        if(!req.query.address)
        {
            return res.send({error: 'An address is required'})
        }

        geolocation(req.query.address,(error, {latitude, longitude, address}={})=>{
            if(error)
            {
                return res.send({error})
            }

            forecast(address,(error, forecastData)=>{
                if(error)
            {
                return res.send({error: error})
            }

            
            res.send({current: forecastData, location: latitude+','+longitude, address: address})

            })
        })
})

app.get('/help/*', (req,res) => {
    res.render('404',{
        title:'404',
        name: 'Alfredo Plath',
        message: 'Help article not found'
    })
})

app.get('*', (req, res) => {
    res.render('404',{
        title: '404',
        name: 'Alfredo Plath',
        message: 'Page not found'
    })
})

app.listen(port, () => {
    console.log("Server is up on port " + port)
})