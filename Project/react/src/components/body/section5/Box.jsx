

const Box = () => {
  return (
    <div className="bg-light py-5">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-lg-3">
            <div className="bg-primary text-white text-center">
              <div className="mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="fs-4">⭐</span>
                ))}
              </div>
              <h2 className="display-4 fw-bold mb-0">4.9/5.0</h2>
              <p className="mb-0 mt-2 fs-5">Average Rating</p>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="text-center">
              <h2 className="display-3 fw-bold mb-2">
                18700<sup className="fs-3">+</sup>
              </h2>
              <p className="text-muted fs-5 mb-1">Satisfied Customers</p>
              <p className="text-muted">Worldwide</p>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="text-center">
              <h2 className="display-3 fw-bold mb-2">
                25000<sup className="fs-3">+</sup>
              </h2>
              <p className="text-muted fs-5 mb-1">Successful trips</p>
              <p className="text-muted">organized by Touex</p>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="text-center">
              <h2 className="display-3 fw-bold mb-2">
                10<sup className="fs-3">+</sup> Years
              </h2>
              <p className="text-muted fs-5 mb-1">Experience in global</p>
              <p className="text-muted">travel planning</p>
            </div>
          </div>
        </div>
      </div>
      <div/>
      </div>

      )
      }

      export default Box 