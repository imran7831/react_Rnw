const FeedbackCard = ({ item }) => {
  return (
    <div className="card">
      <h3>{item.name}</h3>
      <p>{item.email}</p>

      <div>
        <span className="badge category">{item.category}</span>
        <span className={`badge priority-${item.priority.toLowerCase()}`}>
          {item.priority}
        </span>
      </div>

      <p><b>Description:</b> {item.description}</p>

      {item.screenshot && (
        <img
          src={item.screenshot}
          alt="Screenshot"
          style={{ width: "100%", borderRadius: "6px", marginTop: "10px" }}
        />
      )}

      <h4>Steps to Reproduce</h4>
      <ul>{item.steps.map((s, i) => <li key={i}>{s}</li>)}</ul>

      <h4>Suggestions</h4>
      <ul>{item.suggestions.map((s, i) => <li key={i}>{s}</li>)}</ul>

      {item.notes && (
        <>
          <h4>Notes</h4>
          <p>{item.notes}</p>
        </>
      )}

      <p style={{ marginTop: "10px", fontSize: "13px", color: "#555" }}>
        Submitted: {item.time}
      </p>
    </div>
  );
};

export default FeedbackCard;