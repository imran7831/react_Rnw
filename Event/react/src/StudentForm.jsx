import { useRef, useState } from "react";

function StudentForm({ addStudent }) {
  const inputRef = useRef(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = inputRef.current.value.trim();

    if (name === "") {
      setError("Please enter student name");
      inputRef.current.focus();
      return;
    }

    setError("");
    addStudent(name);
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter student name"
          style={{ padding: "5px" }}
        />
        <button style={{ marginLeft: "10px" }}>Add</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
}

export default StudentForm;
