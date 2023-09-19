import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./SignIn.css";
import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineApple } from "react-icons/ai";
import { useAuth0 } from "@auth0/auth0-react";
import { DataContext } from "../../context/DataContext";
import Dashboard from "../Dashboard/Dashboard";

const SignIn = () => {
  const navigate = useNavigate();
  const { loginWithRedirect, user, isAuthenticated } = useAuth0();

  const { setCurrentUser, currentUser, setIsAuthenticated, check } =
    useContext(DataContext);
  useEffect(() => {
    if (isAuthenticated) {
      localStorage.setItem(
        "loginDetails",
        JSON.stringify({
          user: user,
        })
      );
      navigate("/home");
    }
    setIsAuthenticated(isAuthenticated);
  }, [isAuthenticated]);
  // console.log("curr", currentUser);

  // console.log("curr", currentUser);
  // console.log(isAuthenticated);
  return (
    <>
      <div className="main-login-container">
        <div className="social-img left-side">
          <div className="header">
            <div className="logo">LOGO</div>
          </div>
          <div className="app-name">
            <div className="board">Board.</div>
          </div>
          <div className="social-links">
            <div className="links">
              <a href="#" className="icon">
                <AiOutlineGithub />
              </a>
              <a href="#" className="icon">
                <FaLinkedin />
              </a>
              <a href="#" className="icon">
                <BsDiscord />
              </a>
              <a href="#" className="icon">
                <AiFillTwitterCircle />
              </a>
            </div>
          </div>
        </div>

        <div className="login-container">
          <div className="login-card">
            <div className="login-header">
              <h2>Sign In</h2>
              <strong>Sign in to your account</strong>
            </div>
            <div className="redirect">
              <div onClick={() => loginWithRedirect()} className="g-a">
                {" "}
                <span className="align-c">
                  <FcGoogle />
                </span>{" "}
                <span> Sign in with Google</span>
              </div>
              <div className="g-a">
                <span className="align-c">
                  <AiOutlineApple />
                </span>{" "}
                <span> Sign in with Apple</span>
              </div>
            </div>

            <div className="login-items">
              <button
                className="login-button"
                onClick={() => loginWithRedirect()}
              >
                Log In
              </button>

              <div className="login-footer">
                <p>Don't have an account ? </p>

                <button
                  className="login-button"
                  onClick={() => loginWithRedirect()}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
