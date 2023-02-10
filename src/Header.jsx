import { LogoutLink } from "./Logout";
import { Signup } from "./Signup";
import { useState } from "react";
import { Modal } from "./Modal";

export function Header() {
  const [isSignupVisible, setIsSignupVisible] = useState(false);

  const handleSignupShow = () => {
    setIsSignupVisible(true);
  };

  const handleSignupClose = () => {
    setIsSignupVisible(false);
  };

  return (
    <header id="header" class="fixed-top">
      <Modal show={isSignupVisible} onClose={handleSignupClose}>
        <Signup onSignupClose={handleSignupClose} />
      </Modal>
      <div class="container d-flex align-items-center justify-content-between">
        <h1 class="logo">
          <a href="/">Jordan Spaulding Construction</a>
        </h1>

        <nav id="navbar" class="navbar">
          <ul>
            <li>
              <a class="nav-link scrollto" href="#abouts-index">
                About Us
              </a>
            </li>
            <li>
              <a class="nav-link scrollto o" href="#portfolios-index">
                Portfolio / Jobs
              </a>
            </li>
            <li>
              <a class="nav-link scrollto o" href="#woodshops-index">
                The Woodshop
              </a>
            </li>
            <li>
              <a class="getstarted scrollto" href="#contact-form">
                Contact
              </a>
            </li>

            <li>
              {localStorage.jwt === undefined ? (
                <>
                  <a class="nav-link scrollto" href="/login">
                    {" "}
                    Admin Login{" "}
                  </a>
                  <a class="nav-link scrollto" href="#" onClick={handleSignupShow}>
                    {" "}
                    Sign Up{" "}
                  </a>
                </>
              ) : (
                <>
                  <LogoutLink />
                </>
              )}
            </li>
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
}
