import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ background: '#f0f0f0', marginBottom: '1rem' }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          My App
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              {/* <a className="nav-link active" href="#">
                Home
              </a> */}
              {/* <Link to={"/"} className="nav-link">Home</Link> */}
              <NavLink to={"/"} className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="#">
                Users
              </a> */}
              {/* <Link to={"/users"} className="nav-link">Users</Link> */}
              <NavLink to={"/users"} className="nav-link">Users</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
