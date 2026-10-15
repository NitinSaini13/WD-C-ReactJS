import { useState } from "react";

function StudentInfoApi() {
  const [studentInfo, setStudentInfo] = useState([
    { id: 1, name: "S1", marks: 57, class: "MCA 3rd C", result: "failed" },
    { id: 2, name: "S2", marks: [50, 60, 90], class: "MCA 3rd C", result: "Passed" },
    { id: 3, name: "S3", marks: 90, class: "MCA 3rd C" },
    { id: 4, name: "S4", marks: 88, class: "MCA 3rd C" },
    { id: 5, name: "S5", marks: 95, class: "MCA 3rd C", result: "passed" },
  ]);

  const plusTwo = () => {
    setStudentInfo(
      studentInfo.map((student) => ({
        ...student,
        marks: Array.isArray(student.marks)
          ? student.marks.map((mark) => mark + 2)
          : student.marks + 2,
      }))
    );
  };

  return (
    <div>
      <h2>List of Students:</h2>

      {studentInfo.map((row) => (
        <div key={row.id}>
          <h2>
            ID: {row.id}, Name: {row.name}, Marks:
            {Array.isArray(row.marks)
              ? row.marks.join(", ")
              : row.marks}

            {row.result && <b> Result: {row.result}</b>}
          </h2>
        </div>
      ))}

      <button onClick={plusTwo}>Plus 2</button>
    </div>
  );
}

export default StudentInfoApi;