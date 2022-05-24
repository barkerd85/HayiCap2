import React from "react";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";
import "bootswatch/dist/journal/bootstrap.min.css";
import { BsInstagram } from "react-icons/bs";
import { FiYoutube } from "react-icons/fi";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);

  if (!user) {
    return (
      <div className="navbar navbar-expand-sm fixed-top navbar-dark">
        <div className="container">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <a className="navbar-brand" href="/slider">
            Photography
          </a>
          |&nbsp;&nbsp;&nbsp;
          <a className="navbar-brand" href="/videography">
            Videography
          </a>
          |&nbsp;&nbsp;&nbsp;
          <a className="navbar-brand" href="/calendar">
            Availability
          </a>
          |&nbsp;&nbsp;&nbsp;
          <a className="navbar-brand" href="/login">
            Login
          </a>
          |&nbsp;&nbsp;&nbsp;
          <a className="navbar-brand" href="/register">
            Register
          </a>
          |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="https://www.instagram.com/ariel.l__/">
            {<BsInstagram className="icon" />}
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="https://www.youtube.com/channel/UCGb15ENV-se4FvljdiYvUCA">
            {<FiYoutube className="icon" />}
          </a>
          <div class="collapse navbar-collapse" id="navbar1">
            <ul class="navbar-nav"></ul>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="navbar navbar-expand-sm fixed-top navbar-dark">
        <div className="container">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <a className="navbar-brand" href="/slider">
            Photography
          </a>
          |&nbsp;&nbsp;&nbsp;&nbsp;
          <a className="navbar-brand" href="/videography">
            Videography
          </a>
          |&nbsp;&nbsp;&nbsp;&nbsp;
          <a className="navbar-brand" href="/about">
            About Me
          </a>
          |&nbsp;&nbsp;&nbsp;&nbsp;
          <a className="navbar-brand" href="/calendar">
            Availability
          </a>
          |&nbsp;&nbsp;&nbsp;&nbsp;
          <a className="navbar-brand" href="/main" onClick={logoutUser}>
            Log Out
          </a>
          |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="https://www.instagram.com/ariel.l__/">
            {<BsInstagram className="icon" />}
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="https://www.youtube.com/channel/UCGb15ENV-se4FvljdiYvUCA">
            {<FiYoutube className="icon" />}
          </a>
          <div class="collapse navbar-collapse" id="navbar1">
            <ul class="navbar-nav"></ul>
          </div>
        </div>
      </div>
    );
  }
};

export default Navbar;
