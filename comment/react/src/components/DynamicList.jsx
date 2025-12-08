import { useState } from "react";

const DynamicList = ({ label, items, setItems }) => {
  const addItem = () => setItems([...items, ""]);
  const removeItem = (index) =>
    setItems(items.filter((_, i) => i !== index));

  const updateItem = (index, value) => {
    const updated = [...items];
    updated[index] = value;
    setItems(updated);
  };

  return (
    <div className="card" style={{ padding: "15px" }}>
      <h4>{label}</h4>

      {items.map((item, index) => (
        <div key={index} style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
          <input
            value={item}
            onChange={(e) => updateItem(index, e.target.value)}
            placeholder={`${label} ${index + 1}`}
          />
          <button type="button" onClick={() => removeItem(index)} style={{ background: "#ef476f" }}>
            Remove
          </button>
        </div>
      ))}

      <button type="button" onClick={addItem}>Add {label}</button>
    </div>
  );
};

export default DynamicList;