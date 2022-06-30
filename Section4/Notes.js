const fs=require('fs')
const chalk=require('chalk')

const readNote = (title) => {
    const list=loadNotes()
    const note = list.find((note)=>note.title===title)

    if(note)
    {
        console.log(chalk.green.inverse(note.title))
        console.log(note.body)
    }
    else{
        console.log(chalk.red.inverse("Note not found!"))
    }
}

const listNotes = () =>
{
    const notesList=loadNotes();

    console.log(chalk.green.inverse("Your notes"))
    notesList.forEach((note) => {
        console.log(note.title)
    })

}

const addNote = (title, body) =>
{
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) => note.title===title)

    if(duplicateNotes.length === 0)
    {
        notes.push({
            title: title,
            body:body
        })
        saveNotes(notes);
    }
    else{
        console.log('Title taken!')
    }
    
}

const removeNote = (toDelete) =>
{
    const notes=loadNotes()
    const filteredNotes=notes.filter((note)=>toDelete!==note.title)
    if(filteredNotes.length < notes.length)
    {
    saveNotes(filteredNotes)
    console.log(chalk.green.inverse('Note removed!'))
    }
    else
    {
    console.log(chalk.red.inverse('No note found!'))
    }

}

const saveNotes = (notes) =>
{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('myNotes.json',dataJSON)
}

const loadNotes = () =>
{
    try{
        const dataBuffer = fs.readFileSync('myNotes.json')
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }
    catch(e)
    {
        return []
    }
}

module.exports = {
    listNotes : listNotes,
    addNote : addNote,
    removeNote : removeNote,
    readNote : readNote
}