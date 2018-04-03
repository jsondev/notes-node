const fs = require('fs');

var originalNote = {
    title: 'Some title',
    body: 'Some body'
   };
var originalNoteString = JSON.stringify(originalNote);
var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);

var addNotes = (title, body) => {
   
}

console.log(typeof note);
console.log(note.title);
fs.writeFileSync('notes.json', originalNoteString);





