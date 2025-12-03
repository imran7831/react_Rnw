function StudentCard({ student, deleteStudent, toggleDetails, markStatus }) {
  return (
    <>
      <div
        style={{
          border: "1px solid gray",
          padding: "10px",
          marginTop: "10px",
          borderRadius: "5px",
        }}
      >
        <h3>
          {student.name}{" "}
          <span
            style={{
              color: student.status === "present" ? "green" : "red",
              fontSize: "14px",
            }}
          >
            ({student.status})
          </span>
        </h3>

        <button onClick={() => toggleDetails(student.id)}>
          {student.showDetails ? "Hide Details" : "Show Details"}
        </button>

        <button
          onClick={() => deleteStudent(student.id)}
          style={{ marginLeft: "10px" }}
        >
          Delete
        </button>

        {student.showDetails && (
          <>
            <div style={{ marginTop: "10px" }}>
              <button onClick={() => markStatus(student.id, "present")}>
                Mark Present
              </button>

              <button
                onClick={() => markStatus(student.id, "absent")}
                style={{ marginLeft: "10px" }}
              >
                Mark Absent
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default StudentCard;