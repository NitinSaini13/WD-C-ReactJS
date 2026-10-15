import Student from "./Student";

function Body() {
  const studentInfo = [
    { id: 1, name: "Student1", marks: 90, class: "MCA" },
    { id: 2, name: "Student2", marks: 85, class: "MCA" },
    { id: 3, name: "Student3", marks: 95, class: "MCA" },
    { id: 4, name: "Student4", marks: 81, class: "MCA" },
    { id: 5, name: "Student5", marks: 75, class: "MCA" },
    { id: 6, name: "Student6", marks: 73, class: "MCA" },
    { id: 7, name: "Student7", marks: 78, class: "MCA" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
  
  <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
    Student Information
  </h2>

  <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-lg bg-white shadow-md">
    <table className="w-full text-left">
      
      <thead className="bg-gray-800 text-white">
        <tr>
          <th className="px-6 py-3">ID</th>
          <th className="px-6 py-3">Name</th>
          <th className="px-6 py-3">Marks</th>
          <th className="px-6 py-3">Course</th>
        </tr>
      </thead>

      <tbody>
        {studentInfo.map((student) => (
          <Student
            key={student.id}
            id={student.id}
            name={student.name}
            marks={student.marks}
            section={student.class}
          />
        ))}
      </tbody>

    </table>
  </div>
</div>
  );
}

export default Body;
