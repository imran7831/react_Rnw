import React, { useState } from "react";
import "./App.css";
import { div } from "three/tsl";

const App = () => {
  const [title, setTitle] = useState("");
  const [notes, setNote] = useState("");
  const [task, setTask] = useState([]);

  const forms = (e) => {
    e.preventDefault();

    const copyTask = [...task];

    copyTask.push({ title, notes });
    setTask(copyTask);

    setTitle("");
    setNote("");
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          forms(e);
        }}
      >
        <input
          type="text"
          placeholder="Enter your name"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          name=""
          className="text"
          placeholder="enter your text"
          value={notes}
          onChange={(e) => {
            setNote(e.target.value);
          }}
        ></textarea>
        <button className="btn">Submit</button>
      </form>

      <div className="left">
        <h1>Recent Notes</h1>
        <div className="card">
          {task.map(function (elem, idx) {
            return (
              <div key={idx} className="not">
                <h3>{elem.title}</h3>
                <p>{elem.notes}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
