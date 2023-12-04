import React, { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';

function StudentChart({ attendance, name }) {
    const [attendanceData, setAttendanceData] = useState([]);
    const [chartKey, setChartKey] = useState(0);

    useEffect(() => {
        let presentCount = 0;
        let absentCount = 0;

        if (attendance) {
            attendance.forEach((lec) => {
            if (lec === true) {
            presentCount += 1;
            }
            if (lec === false) {
            absentCount += 1;
            }
        });
        }
        const data = [
            ["Category", "Value"],
            ["Absent", absentCount],
            ["Present", presentCount],
        ];
        setChartKey((prevKey) => prevKey + 1);
        // I couldnt get my student charts to update without this force rerender
        setAttendanceData(data);
    }, [attendance]); 


    return (
    <>
        <Chart
            key={chartKey}
            chartType="PieChart"
            data={attendanceData}
            options={{ colors: ['teal', 'grey'], title: `${name}` }}
            height="400px"
            width="600px"
        />
    </>
    );
}

export default StudentChart;
