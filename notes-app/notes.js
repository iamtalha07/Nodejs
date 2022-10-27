const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return "Your notes..."
}

const addNote = (title, body) => {
    //Loading the array of notes to push data at the end of array
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
       saveNotes(notes)
       console.log(chalk.green.inverse('New Note Added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

//Removing the note
const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)

    if(notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note Removed!'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('No Note Found!'))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    
    if(notes.length > 0) {
        console.log(chalk.inverse('Your Notes'))
        notes.forEach((note) => {
            console.log(note.title)
        })
    } else {
        console.log(chalk.red.inverse('No Note Found!'))
    }

}

const readNotes = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    if(note) {
        console.log(chalk.green.inverse('Your note'))
        console.log(note.title)
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse('No Note Found!'))
    }

}

//Saving the data in file
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

//Return the array of notes stored in file
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNotes: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}