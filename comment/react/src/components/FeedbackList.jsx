import FeedbackCard from "./FeedbackCard";

const FeedbackList = ({ feedback }) => {
  return (
    <div className="container">
      <h2>Submitted Feedback</h2>

      {feedback.length === 0 && <p>No feedback submitted yet.</p>}

      {feedback.map((item, index) => (
        <FeedbackCard key={index} item={item} />
      ))}
    </div>
  );
};

export default FeedbackList;