const notes = require('./notes.js')
const chalk = require('chalk')
const yargs = require('yargs')

//Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,     //Always required
            type: 'string'          //Value should always be string
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNotes(argv.title,argv.body)
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove note',
    builder: {
        title: {
            describe: 'Title of the note you want to delete',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

//Create list command
yargs.command({
    command: 'list',
    describe: 'Display list of notes',
    handler() {
        notes.listNotes()
    }
})

//Create read command
yargs.command({
    command: 'read',
    describe: 'Read from notes',
    builder: {
        title: {
            describe: 'Title of the note you want to read',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNotes(argv.title)
    }
})

//add, remove, read, list

yargs.parse()
// console.log(yargs.argv)