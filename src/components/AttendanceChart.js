// import AttendanceBarChart from './BarChart';
// import PieChart from "./PieChart"
import { Chart } from "react-google-charts";
import './../../src/App.css';

function AttendanceChart(students) {
    const attendanceDict = {}
    const absentDict = {}
    let studentList = JSON.parse(localStorage.getItem('attendanceData'))

    if(students['students']) {
        studentList = students['students']
    }

    studentList.forEach((student) => {
        if (!(student['name'] in attendanceDict)) {
            attendanceDict[student['name']] = 0;
            absentDict[student['name']] = 0;
        }

        student['attendance'].forEach((attendance) => {
            if (attendance === true) {
                attendanceDict[student['name']] += 1;
            } else if (attendance === false) {
                absentDict[student['name']] += 1;
            }
        });
    });
    
    const totalPresent = attendanceDict.Student1 + attendanceDict.Student2 
                    + attendanceDict.Student3 + attendanceDict.Student4 + attendanceDict.Student5;
    
    const totalAbsent = absentDict.Student1 + absentDict.Student2 
                    + absentDict.Student3 + absentDict.Student4 + absentDict.Student5; 
    
    const data = [
        ["Category", "Value"],
        ["Absent", totalAbsent],
        ["Present", totalPresent],
    ];

    var options = {
        colors: ['red', '#013220'],
    };
    
    return(
        <>
            <span> Total Present vs Absent </span>
            <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"100%"}
                height={"600px"}
            />
        </>
    );
}

export default AttendanceChart;
