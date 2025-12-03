import { useState } from "react";
import StudentForm from "./StudentForm.jsx";
import StudentList from "./StudentList.jsx";

function App() {
  const [students, setStudents] = useState([]);

  const addStudent = (name) => {
    const newStudent = {
      id: Date.now(),
      name: name,
      showDetails: false,
      status: "absent"
    };

    setStudents([...students, newStudent]);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  const toggleDetails = (id) => {
    setStudents(
      students.map((s) =>
        s.id === id ? { ...s, showDetails: !s.showDetails } : s
      )
    );
  };

  const markStatus = (id, value) => {
    setStudents(
      students.map((s) =>
        s.id === id ? { ...s, status: value } : s
      )
    );
  };

  return (
    <div style={{ padding: "20px", width: "400px", margin: "auto" }}>
      <h2>Student Management App</h2>

      <StudentForm addStudent={addStudent} />

      <StudentList
        students={students}
        deleteStudent={deleteStudent}
        toggleDetails={toggleDetails}
        markStatus={markStatus}
      />
    </div>
  );
}

export default App;