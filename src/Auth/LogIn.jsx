import React, { useState } from "react";
import { Header } from "../Pages/style";
import { AdminTab, Button } from "../components/style";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const LogIn = () => {
  const navigate = useNavigate();

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

  const handleLogin = () => {
    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    if (!isValidPassword(password)) {
      toast.error("Passwords don't match");
      return;
    }

    fetch("http://localhost:5000/account")
      .then((res) => res.json())
      .then((data) => {
        const user = data.find((user) => user.email === email);
        if (user) {
          if (user.password === password) {
            toast.success("Login successful");
            setTimeout(() => {
              navigate("/post");
            }, 5000);
          } else {
            toast.error("Invalid password");
          }
        } else {
          toast.error("User not found");
        }
      })
      .catch((error) => {
        console.error("Error logging in:", error);
        toast.error("Error logging in");
      });
  };

  return (
    <>
      <Header>
        <h1>Admin Login Page</h1>
        <ToastContainer />
      </Header>
      <AdminTab>
        <div className="input">
          <label htmlFor="email"> Email Address:</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input">
          <label htmlFor="password"> Password</label>
          <input
            type="password"
            name="password"
            id="password"
            required
            autoComplete="off"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button type="submit" onClick={handleLogin}>
          Submit
        </Button>
      </AdminTab>
    </>
  );
};

export default LogIn;
