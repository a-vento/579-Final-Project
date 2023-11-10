// AttendanceGraph.js
import React, { useState } from 'react';
import LectureData from './LectureData';
import './../Attendance.css';

function AttendanceGraph() {
  // initialize Fake Students
  const studentData = [
    { key: 1, name: 'Student1', attendance: Array.from({ length: 10 }, (_, i) => null) },
    { key: 2, name: 'Student2', attendance: Array.from({ length: 10 }, (_, i) => null) },
    { key: 3, name: 'Student2', attendance: Array.from({ length: 10 }, (_, i) => null) },
    { key: 4, name: 'Student4', attendance: Array.from({ length: 10 }, (_, i) => null) },
    { key: 5, name: 'Student5', attendance: Array.from({ length: 10 }, (_, i) => null) },
  ];

  // set states
  const [students, setStudents] = useState(studentData);
  const [lectureNumber, setLectureNumber] = useState(null);

  // toggle between three values
  const threewayToggle = (value) => {
    if (value === null) return true;
    if (value === false) return null;
    return false;
  };

  // toggle attendance
  const toggleAttendance = (key, lectureNumber) => {
    // iterate through each student, if it matches the key, toggle the lecture number cell
    setStudents((student) => student.map((stud) => 
    stud.key === key
      ? {
          ...stud,
          attendance: stud.attendance.map((value, index) =>
            index === lectureNumber ? threewayToggle(value) : value
          ),
        }
      : stud
    ));
  };

  const clickLecture = (lectureIndex) => {
    setLectureNumber(lectureIndex);
  };

  const closeLectureDetails = () => {
    setLectureNumber(null);
  };

  return (
    <div className="App">
      <h1>Student Attendance</h1>
      <div className="grid">
        <div className="header">
          {/* grid header */}
          <div className="cell">Student</div>
          {Array.from({ length: 10 }, (_, i) => (
            <button
              key={i}
              className="cell"
              onClick={() => clickLecture(i)}>
              Lecture {i + 1}
            </button>
          ))}
        </div>
        {/* fill grid */}
        {students.map((student) => (
          <div key={student.key} className="row">
            <div className="cell student-name">{student.name}</div>
            {student.attendance.map((isPresent, index) => (
              <div
                key={index}
                className={`cell ${isPresent ? 'present' : isPresent === false ? 'absent' : 'excused'}`}
                onClick={() => toggleAttendance(student.key, index)}
              />
            ))}
          </div>
        ))}
      </div>
      {lectureNumber !== null && (
        <div className="lecture-details">
          <LectureData lectureIndex={lectureNumber} />
          <button onClick={closeLectureDetails}>Press to close</button>
        </div>
      )}
    </div>
  );
}

export default AttendanceGraph;
