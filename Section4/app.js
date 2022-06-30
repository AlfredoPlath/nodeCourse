const yargs = require('yargs')
const notes = require('./Notes.js')

/*const input=process.argv[2]

console.log(input)

if(input==="add")
{
console.log("Adding note!")
}else if(input==="remove")
{
console.log("Removing note!")
}*/
yargs.version('1.0.0')

yargs.command(
    {
        command : 'readNote',
        describe : 'Read a note',
        builder: {
            title : {
                demandOption: true,
                type: 'string',
                describe : 'Get a note given a title'
            }
        },
        handler(argv){ notes.readNote(argv.title)}
    }
)

yargs.command(
    {
        command: 'add',
        describe: 'Add a note',
        builder:{
            title:{
                describe: 'The title of your note',
                require: true,
                type:'string'
            },
            body:{
                decribe:'Note body',
                require: true,
                type:'string'
            }
        },
        handler(argv)
        {
            notes.addNote(argv.title, argv.body)
            console.log('Adding a note! '+argv.title+' - '+argv.body)
        }
    })

yargs.command({
    command: 'remove',
    describe:'Removes a note',
    builder: {
        title:{describe: 'the title to be removed',require: true, type: 'string'}
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command:'list',
    describe:'List notes',
    handler(){
        notes.listNotes()
    }
})

yargs.command({
    command:'read',
    describe:'Reads a note',
    handler(){
        console.log('Reading a note!')
    }
})

yargs.parse()