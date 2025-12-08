import { useState, useRef, useEffect } from "react";
import DynamicList from "./DynamicList";

const FeedbackForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    category: "",
    priority: "",
    description: "",
  });

  const screenshotRef = useRef();
  const notesRef = useRef();

  const [steps, setSteps] = useState([""]);
  const [suggestions, setSuggestions] = useState([""]);

  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = "Valid email required";
    if (!form.category) newErrors.category = "Select a category";
    if (!form.priority) newErrors.priority = "Select a priority";
    if (form.description.length < 10)
      newErrors.description = "Description must be at least 10 characters";

    setErrors(newErrors);
    setIsValid(Object.keys(newErrors).length === 0);
  };

  useEffect(() => validate(), [form]);

  const handleSubmit = (e) => {
    e.preventDefault();
    validate();

    if (!isValid) return;

    const data = {
      ...form,
      steps,
      suggestions,
      screenshot: screenshotRef.current.value,
      notes: notesRef.current.value,
      time: new Date().toLocaleString(),
    };

    onSubmit(data);

    setForm({
      name: "",
      email: "",
      category: "",
      priority: "",
      description: "",
    });
    setSteps([""]);
    setSuggestions([""]);
    screenshotRef.current.value = "";
    notesRef.current.value = "";
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <form className="card" onSubmit={handleSubmit}>
      <h2>Customer Feedback / Issue Report</h2>
      <input
        name="name"
        placeholder="Full Name"
        value={form.name}
        onChange={handleChange}
        className={errors.name ? "error" : ""}
      />
      {errors.name && <p className="error-text">{errors.name}</p>}
      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className={errors.email ? "error" : ""}
      />
      {errors.email && <p className="error-text">{errors.email}</p>}
      <select
        name="category"
        value={form.category}
        onChange={handleChange}
        className={errors.category ? "error" : ""}
      >
        <option value="">Select Issue Category</option>
        <option>Bug</option>
        <option>Suggestion</option>
        <option>Complaint</option>
        <option>Other</option>
      </select>
      {errors.category && <p className="error-text">{errors.category}</p>}
      <select
        name="priority"
        value={form.priority}
        onChange={handleChange}
        className={errors.priority ? "error" : ""}
      >
        <option value="">Select Priority</option>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      {errors.priority && <p className="error-text">{errors.priority}</p>}
      \
      <textarea
        name="description"
        placeholder="Describe the issue..."
        rows={4}
        value={form.description}
        onChange={handleChange}
        className={errors.description ? "error" : ""}
      />
      {errors.description && <p className="error-text">{errors.description}</p>}
      <DynamicList
        label="Steps to Reproduce"
        items={steps}
        setItems={setSteps}
      />
      <DynamicList
        label="Suggested Improvements"
        items={suggestions}
        setItems={setSuggestions}
      />
      <input ref={screenshotRef} placeholder="Screenshot URL (optional)" />
      <textarea
        ref={notesRef}
        rows={3}
        placeholder="Additional Notes (optional)"
      />
      <button disabled={!isValid}>Submit Feedback</button>
    </form>
  );
};

export default FeedbackForm;
