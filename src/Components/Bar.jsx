import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./Bar.css";
import toast from "react-hot-toast";

const Navbar = () => {
  let id = sessionStorage.getItem("id");
  let navigate = useNavigate();
  function logout() {
    sessionStorage.clear();
    toast.success("Logged out");
    navigate("/");
  }
  return (
    <div className="navbar">
      <ul>
        {id ? (
          <li onClick={logout}>Logout</li>
        ) : (
          <>
            <li>
              <Link to="/">Signup</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        )}

        <li>
          <Link to="/profile/">Profile</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
