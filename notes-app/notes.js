const fs = require('fs')

const getNotes = function() {
    return "Your notes..."
}

const addNote = function(title, body) {
    //Loading the array of notes to push data at the end of array
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function(note) {
        return note.title === title
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
       saveNotes(notes)
       console.log('New note added!')
    } else {
        console.log('Note title taken!')
    }


}

//Saving the data in file
const saveNotes = function(notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

//Return the array of notes stored in file
const loadNotes = function() {
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
}