import Form from "./Form";

const Section5 = () => {
  return (
    <div className="s5">
      <div className="container">
        <div className="content-wrapper col-7">
          <h2>Get 10% Off Your First Booking!</h2>
          <p>
            Subscribe to our newsletter and receive exclusive deals, travel
            tips, and your discount code immediately
          </p>
          <div className="d-flex justify-content-around col-9">
            <div className="box"><h1></h1><span></span></div>
            <div className="box"><h1></h1><span></span></div>
            <div className="box"><h1></h1><span></span></div>
            <div className="box"><h1></h1><span></span></div>
          </div>
          <div>
            <Form/>
          </div>
          <div>
            <p>We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
