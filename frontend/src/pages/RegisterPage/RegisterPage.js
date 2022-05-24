import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";
import wedding3 from "../../components/Assets/wedding3.mp4";

const RegisterPage = () => {
  const { registerUser } = useContext(AuthContext);
  const defaultValues = { name: "", email: "", password: "", isAdmin: false };
  const [formData, handleInputChange, handleSubmit] = useCustomForm(
    defaultValues,
    registerUser
  );

  return (
    <div className="bg">
      <video src={wedding3} autoPlay loop muted />
      <div className="overlay">
        <form className="navbar-brand" onSubmit={handleSubmit}>
          <label>
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp; Name: <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp; Email: <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <br />
          </label>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <label>
            <br />
            Password: <br />
            <input
              type="text"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </label>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button className="btn btn-dark">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
