const sgMail = require('@sendgrid/mail')

const sendGridAPIKey = process.env.SENDGRID_API_KEY

sgMail.setApiKey(sendGridAPIKey)

const sendWellcomeEmail = (email, name) => {
    sgMail.send({
        from: 'alfredoplath@hotmail.com',
        to: email,
        subject: 'Wellcome aboard!',
        text: `Thank you ${name} for trusting our services!`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        from: 'alfredoplath@hotmail.com',
        to: email,
        subject: 'We will miss you! Sorry to see you go!',
        text: `${name}, please let us know how can we do better next time!! We hope to see you back some time soon!!`
    })
}

module.exports = {
    sendWellcomeEmail,
    sendCancelationEmail
}