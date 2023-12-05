import AddNote from './AddNote'
import NoteItem from './NoteItem';
import React, { useState } from 'react';

function StudentNotes (students) {
   
    const defaultNotes = []
    const [note, setNote] = useState(() => {
      const storedItems = localStorage.getItem('student-notes');
      return storedItems ? JSON.parse(storedItems) : defaultNotes;
    });
    
    const remove = (toRemove) => {
        setNote((prevNote) => {
        const updatedNote = prevNote.filter((item) => item.created !== toRemove);
        localStorage.setItem('student-notes', JSON.stringify(updatedNote));
        return updatedNote;
      });
    };
    return (
      <main className='container'>
        <AddNote students={students} setNote={setNote}/>
        <ul className='notes-row'>
          {note.map((todo, index) => (
            <NoteItem key={index} name={todo.name} note={todo.note} date = {todo.date} created={todo.created} time={todo.time} remove={remove} />
          ))}
        </ul>
     </main>);
}

export default StudentNotes;