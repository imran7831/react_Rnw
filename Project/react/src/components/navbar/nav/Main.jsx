
const Main = () => {
  return (
    <div className='col-8 align-items-center d-flex justify-content-around '>
      <div className="navbar-shape align-items-center">

        <ul className="menu d-flex justify-content-around">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle">
              Home 
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item">Tour And Travel</a></li>
              <li><a className="dropdown-item">City Tour</a></li>
              <li><a className="dropdown-item"> Adventure Travel</a></li>
              <li><a className="dropdown-item"> Adventure Travel </a></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
           <a className="nav-link dropdown-toggle">
              Destination 
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item">All Destination</a></li>
              <li><a className="dropdown-item">Destination in Australian</a></li>
              <li><a className="dropdown-item">Destination Details</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle">
              Tour Listing 
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item">Tour Listing</a></li>
              <li><a className="dropdown-item"> Tour Listing (Left Sidebar)</a></li>
              <li><a className="dropdown-item">Tour Listing (Right Sidebar)</a></li>
              <li><a className="dropdown-item">Tour Listing (Half Map Right)</a></li>
              <li><a className="dropdown-item">Tour Listing (List View Sidebar)</a></li>
              <li><a className="dropdown-item">Tour Details</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle">
              Pages 
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item">About Us</a></li>
              <li><a className="dropdown-item">Tour Guide</a></li>
              <li><a className="dropdown-item">FAQ</a></li>
              <li><a className="dropdown-item">Testimonials</a></li>
              <li><a className="dropdown-item">Careers</a></li>
              <li><a className="dropdown-item">Dashboards</a></li>
              <li><a className="dropdown-item">Travel Categories</a></li>
              <li><a className="dropdown-item">Travel Categories (Trekking and Hiking)</a></li>
              <li><a className="dropdown-item">Tour Booking Form</a></li>
              <li><a className="dropdown-item">Pricing Plan</a></li>
              <li><a className="dropdown-item">Terms & Conditions</a></li>
              <li><a className="dropdown-item">Contact Us</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle">
              Blog 
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item">Blog</a></li>
              <li><a className="dropdown-item">Blog Details</a></li>
              <li><a className="dropdown-item">Categories</a></li>
              <li><a className="dropdown-item">Tags</a></li>
              <li><a className="dropdown-item">Author</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
           <a className="nav-link dropdown-toggle">
              Shop 
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item">Products </a></li>
              <li><a className="dropdown-item">Product Details</a></li>
              <li><a className="dropdown-item">Cart </a></li>
              <li><a className="dropdown-item">Checkout</a></li>
            </ul>
          </li>

        </ul>

      </div>
    </div>
  )
};

export default Main;
