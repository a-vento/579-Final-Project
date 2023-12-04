// AttendanceGraph.js

import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import LectureData from './LectureData';
import './../Attendance.css';
import AttendanceChart from './AttendanceChart';
import StudentNotes from './StudentNotes'
import StudentChart from './StudentChart';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// Used  the following 3 functions and later Box code from React Bootstrap Documentation:
//  https://react-bootstrap.netlify.app/docs/components/tabs/
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={'div'} variant={'body2'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


function AttendanceGraph() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const localStorageKey = 'attendanceData';

  // initialize Fake Students
  const storedData = JSON.parse(localStorage.getItem(localStorageKey));
  const initialStudentData = storedData || [
    { key: 1, name: 'Student1', attendance: Array.from({ length: 10 }, (_, i) => null) },
    { key: 2, name: 'Student2', attendance: Array.from({ length: 10 }, (_, i) => null) },
    { key: 3, name: 'Student3', attendance: Array.from({ length: 10 }, (_, i) => null) },
    { key: 4, name: 'Student4', attendance: Array.from({ length: 10 }, (_, i) => null) },
    { key: 5, name: 'Student5', attendance: Array.from({ length: 10 }, (_, i) => null) },
  ];

  // set states
  const [students, setStudents] = useState(initialStudentData);
  const [lectureNumber, setLectureNumber] = useState(null);
  const [student, setStudent] = useState(null);

  // toggle between three values
  const threewayToggle = (value) => {
    if (value === null) return true;
    if (value === false) return null;
    return false;
  };

  // toggle attendance
  const toggleAttendance = (key, lectureNumber) => {
    setStudents((students) =>
      students.map((student) =>
        student.key === key
          ? {
              ...student,
              attendance: student.attendance.map((value, index) =>
                index === lectureNumber ? threewayToggle(value) : value
              ),
            }
          : student
      )
    );
  };

  // save to local storage
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(students));
  }, [students]);

  // Event Functions
  const clickLecture = (lectureIndex) => {
    setLectureNumber(lectureIndex);
  };

  const closeLectureDetails = () => {
    setLectureNumber(null);
  };

  const clickStudent = (student) => {
    setStudent(student);
  };

  const closeStudent = () => {
    setStudent(null);
  };

  // Return Markup
  return (
    <>
      <div className="App">
        <h1>Student Attendance</h1>
        <div className="grid">
          <div className="header">
            <div className="cell">Student</div>
            {Array.from({ length: 10 }, (_, i) => (
              <div
                key={i} 
                className="cell"
              >
                Lecture {i + 1}
              </div>
            ))}
          </div>
          {students.map((student) => (
            <div key={student.key} className="row">
              <button
                className="cell student-button"
                onClick={() => clickStudent(student)}>
                {student.name}
              </button>
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
      </div>
      <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
          <Tab label="Overview" {...a11yProps(0)} />
          <Tab label="Student View" {...a11yProps(1)} />
          <Tab label="Lecture Summaries" {...a11yProps(2)} />
          <Tab label="Student Notes" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel key={0} value={value} index={0}>
        <div className="overview-chart">
          <AttendanceChart 
            students={students}
            lecture = {lectureNumber + 1}
          />
        </div>
      </CustomTabPanel>
      <CustomTabPanel key={1} value={value} index={1}>
        <div className="student-chart">
          <div className="focused-student">
            {student !== null && (
              <div className="student-details">
                <Button variant="outline-danger" onClick={closeStudent} >Close Student Details</Button>
              </div>
            )}
            {student !== null && student !== undefined && 
              <StudentChart 
                attendance={student.attendance} 
                name={student.name} 
              />
            }
          </div>
          <div className='studentChart'>
            {students.map((s, index) => 
              <StudentChart 
                key={index} 
                attendance={s.attendance} 
                name={s.name} 
              />
            )}
          </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel key={2} value={value} index={2}>
        <div className='lecture-buttons'>
          {Array.from({ length: 10 }, (_, i) => (
                <Button
                  key={i}
                  className="cell"
                  onClick={() => clickLecture(i)}>
                  Lecture {i + 1}
                </Button>
          ))}
                  {lectureNumber !== null && (
          <div className="lecture-details">
            <LectureData lectureIndex={lectureNumber} />
            <Button onClick={closeLectureDetails} variant="outline-primary">Close Lecture Details</Button>
          </div>
        )}
        </div>
      </CustomTabPanel>
      <CustomTabPanel key={3} value={value} index={3}>
        <StudentNotes 
          students = {students}/>
      </CustomTabPanel>
    </Box>

    </>
  );
}

export default AttendanceGraph;
