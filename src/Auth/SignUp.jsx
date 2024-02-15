import React, { useState } from "react";
import { Header } from "../Pages/style";
import { AdminTab, Button } from "../components/style";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isValidEmail = (email) => {
    // Regular expression for email pattern validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
};

const isValidPassword = (password) => {
    const minLength = 8;
    return password.length >= minLength;
};

  const createAccount = async () => {
    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email address");
      return;
  }

  if (!isValidPassword(password)) {
      toast.error("Password must be at least 8 characters long");
      return;
  }
    try {
      const res = await fetch("http://localhost:5000/account", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: Math.round(Math.random() * 10 + 1),
          name: name,
          email: email,
          password: password,
        }),
      });

      if (res.ok) {
        toast.success("Account created successfully");
        setTimeout(() => {
          navigate("/login");
        }, 5000);
      } else {
        toast.error("Error: Account not created");
      }
    } catch (error) {
      <h3>{document.write("Error creating your account", error)}</h3>;
    }
  };

  return (
    <>
      <Header>
        <h1>Become an Admin</h1>
        <ToastContainer />
      </Header>

      <AdminTab>
        <div className="input">
          <label htmlFor="fullName">
            {" "}
            Full Name:
          </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              required
              onChange={(e) => setName(e.target.value)}
            />
        </div>
        <div className="input">
        <label htmlFor="email">
          {" "}
          Email Address:
        </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input">
        <label htmlFor="password">
          {" "}
          Password
        </label>
          <input
            type="password"
            name="password"
            id="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button onClick={createAccount} type="submit">
          Submit
        </Button>

        <span style={{marginTop: '2em'}}>
          Already have an account? <Link to="/login" style={{color: '#c84869', fontWeight: '600'}}>Login</Link>
        </span>
      </AdminTab>
    </>
  );
};

export default SignUp;
