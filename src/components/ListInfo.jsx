function ListInfo() {
  let studentInfo = {
    id: 1,
    name: "xyz",
    course: "MCA",
  };
  let languages = ["java", "python", "TypeScript", "Reactjs"];
  return (
    <section>
      <div>
        <h2>Student Info</h2>
        <p>{studentInfo.id}</p>
        <p>{studentInfo.name}</p>
        <p>{studentInfo.course}</p>
      </div>
      <div>
        <h2>Languages</h2>
        {languages.map((languages, index) => (
          <p key={index}>
            {index},{languages}
          </p>
        ))}
      </div>
    </section>
  );
}

export default ListInfo;
