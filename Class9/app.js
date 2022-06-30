const fs = require('fs')

fs.writeFileSync('notes.txt','My name is Alfredo.')

fs.appendFileSync('notes.txt','I\'m from Argentina')