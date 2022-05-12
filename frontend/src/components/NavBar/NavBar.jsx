import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";
import "bootswatch/dist/journal/bootstrap.min.css";
import { BsInstagram } from "react-icons/bs";


const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();


  if (!user) {

    return (
    <div className="navbar navbar-expand-sm fixed-top navbar-dark">
      <div className="container">
      <a className="navbar-brand" href="#">
          Photography 
        </a> 
        <a className="navbar-brand" href="#">
          Videography
        </a>
        <a className="navbar-brand" href="#">
          Availability
        </a>
        <a className="navbar-brand" href="#">
          Login
        </a>
        <a className="navbar-brand" href="#">
          Register
        </a>
        <a href="https://www.instagram.com/ariel.l__/">
            {<BsInstagram className="icon" />}
          </a>
        <div class="collapse navbar-collapse" id="navbar1">
          <ul class="navbar-nav"></ul>
        </div>
      <ul>
        {/* <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <b>SOCIAL MEDIA</b>
          </Link>
        </li> */}
        <li>
          {user ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
        </li>
      </ul>
    </div>
    </div>
  );
  } 
else {

  return (
    <div className="navbar navbar-expand-sm fixed-top navbar-dark">
      <div className="container">
      <a className="navbar-brand" href="#">
          Photography 
        </a> 
        <a className="navbar-brand" href="#">
          Videography
        </a>
        <a className="navbar-brand" href="#">
          Availability
        </a>
        
        <a className="navbar-brand" href="#">
          Log Out
        </a>
        <a href="https://www.instagram.com/ariel.l__/">
            {<BsInstagram className="icon" />}
          </a>
        <div class="collapse navbar-collapse" id="navbar1">
          <ul class="navbar-nav"></ul>
        </div>
      <ul>
        {/* <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <b>SOCIAL MEDIA</b>
          </Link>
        </li> */}
        <li>
          {user ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
        </li>
      </ul>
    </div>
    </div>
  );
}
  
};

export default Navbar;
