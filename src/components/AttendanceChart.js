import { Chart } from "react-google-charts";
import './../../src/App.css';

function AttendanceChart(studentsArray) {
    const attendanceDict = {}
    const absentDict = {}
    const excusedDict = {}
    let studentList = JSON.parse(localStorage.getItem('attendanceData'))

    if(studentsArray['students']) {
        studentList = studentsArray['students']
    }

    studentList.forEach((student) => {
        if (!(student['name'] in attendanceDict)) {
            attendanceDict[student['name']] = 0;
            absentDict[student['name']] = 0;
            excusedDict[student['name']] = 0;
        }

        student['attendance'].forEach((attendance) => {
            if (attendance === true) {
                attendanceDict[student['name']] += 1;
            } else if (attendance === false) {
                absentDict[student['name']] += 1;
            } else if (attendance != null) {
                excusedDict[student['name']] += 1;
            }
        });
    });
    
    const totalPresent = attendanceDict.Student1 + attendanceDict.Student2 
                    + attendanceDict.Student3 + attendanceDict.Student4 + attendanceDict.Student5;
    
    const totalAbsent = absentDict.Student1 + absentDict.Student2 
                    + absentDict.Student3 + absentDict.Student4 + absentDict.Student5; 
    
    const totalExcused = excusedDict.Student1 + excusedDict.Student2 
                    + excusedDict.Student3 + excusedDict.Student4 + excusedDict.Student5; 
    
    const data = [
        ["Category", "Value"],
        ["Absent", totalAbsent],
        ["Present", totalPresent],
        ["Excused", totalExcused],
    ];

    let options = {
        colors: ['#D3212C', '#069C56', '#FF980E'],
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
