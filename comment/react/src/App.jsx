import { useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";

const App = () => {
  const [feedback, setFeedback] = useState([]);

  const handleSubmission = (data) => {
    setFeedback([data, ...feedback]);
  };

  return (
    <div className="container">
      <FeedbackForm onSubmit={handleSubmission} />
      <FeedbackList feedback={feedback} />
    </div>
  );
};

export default App;