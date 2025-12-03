
const Language = () => {
  return (
    <div className="language d-flex col-1 align-items-center">
      <div>
        <span>
          <i className="bi bi-globe"></i>
        </span>
      </div>
      <div className="select dropdown ms-2">
        <button className="btn1"data-bs-toggle="dropdown">
          <span>En</span>
          <i className="bi bi-caret-down-fill"></i>
        </button>
        <ul className="dropdown-menu custom-dd">
          <li><button className="dropdown-item">English</button></li>
          <li><button className="dropdown-item">Spanish</button></li>
          <li><button className="dropdown-item">French</button></li>
          <li><button className="dropdown-item">Portuguese</button></li>
        </ul>
      </div>
    </div>
  );
};

export default Language;
