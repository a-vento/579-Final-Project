import {useState} from "react";
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const AddNote = ({students, setNote}) => {
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [noteDescription, setNoteDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const studentNames = []
    {students['students'].map((student) => (
        studentNames.push(student)
    ))}
    const addStudentNote = () => {
      if (noteDescription) {
        const newNote = {
          name: selectedStudent.name,
          note: noteDescription,
          created: Date.now(),
          date: dueDate 
        };
        setNote((previousNote) => {
          const updatedNotes = [newNote, ...previousNote];
          localStorage.setItem('student-notes', JSON.stringify(updatedNotes));
          return updatedNotes;
        });
        setNoteDescription('');
        setDueDate('');
        setSelectedStudent(null);
      }
    }
    const isSubmitDisabled = !noteDescription;
    return(
      <section>
        <div className='input-group p-4'>
          <Autocomplete
            isOptionEqualToValue={(option, value) => option.valueOf === value.valueOf}
            value={selectedStudent}
            onChange={(event, newValue) => setSelectedStudent(newValue)}
            getOptionLabel={(option) => option.name}
            options={studentNames}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Student" />}
          /> 
          <input className="form-control w-25" type="text" 
            placeholder="Note Description" 
            onChange={(e) => setNoteDescription(e.target.value)} 
            value = {noteDescription} 
          />
          <input className="form-control" type="date"
            placeholder="mm/dd/yyyy" 
            onChange={(e) => setDueDate(e.target.value)} 
            value={dueDate} >
          </input>
          <br/>
          <button className='btn btn-primary' type='submit' onClick={addStudentNote} disabled={isSubmitDisabled}>
            Add Student Note
          </button>
        </div>
      </section>)
}

export default AddNote;