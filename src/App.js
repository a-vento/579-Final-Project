import AttendanceGraph from './components/AttendanceGraph';
import './App.css';


// Problem: Logging attendance in Canvas is not very effective in alerting GSI's when students 
//          have excessive abscenses
//          Likewise, handling the communication for a student when they are abscence can be either 
//          extremely repetitve, incomplete, or inconsistent
// Purpose: to provide GSI's a more visual way to monitor their student abscences
//          to increase consistency amongst GSI's in handling student abscences 
function App() {
  return (
    <>
      <AttendanceGraph />
    </>
    // -Add Lecture Notes by 11/11 DONE
    // -Add Lecture Statistics 
    // -Add Statistics by 11/25
    // -Student Notes by 12/2 
    // -Excused Abscences
    // -Stretch Goals: Be able to add new lecture / discussion on the UI, 
    //  more color coding (more abscences) = different color
  )
}

export default App;
