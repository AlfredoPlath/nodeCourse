console.log("Clientside javascript file loaded!")

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

messageOne.textContent = ''
messageTwo.textContent = ''

weatherForm.addEventListener('submit', (e) => {

    e.preventDefault()

    const address=search.value

    fetch("/weather?address="+address).then((response) => {
        response.json().then(({current, location, address,error}={}) => {

            messageOne.textContent = 'Loading...'
            messageTwo.textContent = ''

            if(error)
                return messageTwo.textContent = error
    
            messageOne.textContent = current.descripiton
        })
    })
})