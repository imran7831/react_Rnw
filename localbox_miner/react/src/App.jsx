import { useEffect, useState } from "react";
import RecordForm from "./components/RecordForm";
import RecordList from "./components/RecordList";

const App = () => {
  const [records, setRecords] = useState([]);
  const [editRecord, setEditRecord] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("records")) || [];
    setRecords(stored);
  }, []);


  useEffect(() => {
    localStorage.setItem("records", JSON.stringify(records));
  }, [records]);

  const addRecord = (record) => {
    setRecords([...records, record]);
  };

  const updateRecord = (updated) => {
    setRecords(records.map(r => r.id === updated.id ? updated : r));
    setEditRecord(null);
  };

  const deleteRecord = (id) => {
    setRecords(records.filter(r => r.id !== id));
  };

  const startEdit = (record) => {
    setEditRecord(record);
  };

  const clearAllRecords = () => {
    if (window.confirm("Are you sure you want to clear all records?")) {
      setRecords([]);
      localStorage.removeItem("records");
    }
  };

  return (
    <div className="container">
      <h1>LocalBox Miner</h1>

      <RecordForm
        addRecord={addRecord}
        updateRecord={updateRecord}
        editRecord={editRecord}
      />

      <button className="clear-btn" onClick={clearAllRecords}>
        Clear All Records
      </button>

      <RecordList
        records={records}
        deleteRecord={deleteRecord}
        startEdit={startEdit}
      />
    </div>
  );
};

export default App;
