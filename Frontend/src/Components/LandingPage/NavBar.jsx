import { useEffect, useState } from "react";
import "../../App.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  FaHome,
  FaBriefcase,
  FaCheckCircle,
  FaInfoCircle,
  FaPhoneAlt,
  FaUserShield,
  FaUserTie,
  FaUser,
  FaUserPlus,
  FaUserAlt,
  FaUsers,
  FaSignOutAlt,
} from "react-icons/fa";

function NavBar() {
  const [data, setData] = useState("");
  const [userType, setUserType] = useState("");
  const nav = useNavigate();
  const location = useLocation(); // ✅ ab sahi jagah use ho raha hai

  // ✅ location change hone par localStorage check hoga
  useEffect(() => {
    const temData = JSON.parse(localStorage.getItem("data"));
    setData(temData);
    const temUserType = JSON.parse(localStorage.getItem("userType"));
    setUserType(temUserType);
  }, [location]);

  // ✅ common logout function
  const handleLogout = (path) => {
    localStorage.removeItem("data");
    localStorage.removeItem("userType");
    nav(path);
  };

  // ================= ADMIN ==================
  if (userType === "admin") {
    return (
      <div className="row navbar_main_row mb-1 sticky-top ps-5 pe-4">
        <div className="col-12">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <Link className="navbar-brand" to="">
                <img
                  className="nav_bar_logo"
                  src={`http://localhost:9000/upload/${data?.img}`}
                  alt="logo"
                />
              </Link>

              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>

              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link nav_font" to="/admin">
                      <FaHome /> &nbsp;Dashboard
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link nav_font" to="/admin/seekerlist">
                      <FaUsers /> &nbsp;Seeker List
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link nav_font" to="/admin/recruiterlist">
                      <FaUserTie /> &nbsp;Recruiter List
                    </Link>
                  </li>

                  <li
                    className="nav-item"
                    onClick={() => handleLogout("/admin/login")}
                  >
                    <span className="nav-link nav_font">
                      <FaSignOutAlt /> &nbsp;Logout
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }

  // ================= SEEKER ==================
  if (userType === "seeker") {
    return (
      <div className="row navbar_main_row mb-1 sticky-top ps-5 pe-4">
        <div className="col-12">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <Link className="navbar-brand" to="">
                <img
                  className="nav_bar_logo"
                  src={`http://localhost:9000/upload/${data?.img}`}
                  alt="logo"
                />
              </Link>

              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
              >
                <span className="navbar-toggler-icon" />
              </button>

              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link nav_font" to="/seeker">
                      <FaHome /> &nbsp;Dashboard
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link nav_font" to="/seeker/jobapply">
                      <FaBriefcase /> &nbsp;Apply Job
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link nav_font" to="/seeker/appliedjob">
                      <FaCheckCircle /> &nbsp;Applied Job
                    </Link>
                  </li>

                  <li
                    className="nav-item"
                    onClick={() => handleLogout("/seeker/login")}
                  >
                    <span className="nav-link nav_font">
                      <FaSignOutAlt /> &nbsp;Logout
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }

  // ================= RECRUITER ==================
  if (userType === "recruiter") {
    return (
      <div className="row navbar_main_row mb-1 sticky-top ps-5 pe-4">
        <div className="col-12">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <Link className="navbar-brand" to="">
                <img
                  className="nav_bar_logo"
                  src={`http://localhost:9000/upload/${data?.logo}`}
                  alt="logo"
                />
              </Link>

              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
              >
                <span className="navbar-toggler-icon" />
              </button>

              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link nav_font" to="/recruiter">
                      <FaHome /> &nbsp;Dashboard
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link nav_font" to="/recruiter/postedjob">
                      <FaUser /> &nbsp;Posted Jobs
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link nav_font" to="/recruiter/PostJob">
                      <FaBriefcase /> &nbsp;Job Post
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      className="nav-link nav_font"
                      to="/recruiter/appliedjob"
                    >
                      <FaCheckCircle /> &nbsp;Applied Job
                    </Link>
                  </li>

                  <li
                    className="nav-item"
                    onClick={() => handleLogout("/recruiter/login")}
                  >
                    <span className="nav-link nav_font">
                      <FaSignOutAlt /> &nbsp;Logout
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }

  // ================= DEFAULT (NO LOGIN) ==================
  return (
    <div className="row navbar_main_row sticky-top ps-5 pe-4">
      <div className="col-12">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="">
              <img src="/logo.png" alt="logo" height="70px" />
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link nav_font" to="/">
                    <FaHome /> &nbsp;Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link nav_font" to="/findjob">
                    <FaBriefcase /> &nbsp;Find a Job
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link nav_font" to="/about">
                    <FaInfoCircle /> &nbsp;About
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link nav_font" to="/contact">
                    <FaPhoneAlt /> &nbsp;Contact
                  </Link>
                </li>
              </ul>

              {/* Registration Dropdown */}
              <div className="dropdown ms-auto mt-2">
                <button
                  className="btn btn-outline-secondary dropdown-toggle custom-btn"
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  <b>Registration</b>
                </button>
                <ul className="dropdown-menu custom-dropdown">
                  <li>
                    <Link className="dropdown-item" to="recruiter/register">
                      <FaUserPlus /> &nbsp;Recruiter
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/seeker/register">
                      <FaUserAlt /> &nbsp;Job Seeker
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Login Dropdown */}
              <div className="dropdown ms-4 mt-2 me-5">
                <button
                  className="btn btn-outline-primary dropdown-toggle custom-btn"
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  <b>Login</b>
                </button>
                <ul className="dropdown-menu custom-dropdown">
                  <li>
                    <Link className="dropdown-item" to="/admin/login">
                      <FaUserShield /> &nbsp;Admin Login
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/recruiter/login">
                      <FaUserTie /> &nbsp;Recruiter Login
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/seeker/login">
                      <FaUser /> &nbsp;Seeker Login
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
