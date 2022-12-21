import { LogoutLink } from "./Logout";

export function Header() {
  return (
    // <header>
    //   <nav>
    //     <a href="/"> Home </a> |<a href="/login"> Admin Login</a> | <a href="#abouts-index">About Jordan</a> |
    //     <a href="#portfolios-index">Portfolio</a> | <a href="#woodshops-index">The Woodshop</a> |
    //     {localStorage.jwt === undefined ? (
    //       <></>
    //     ) : (
    //       <>
    //         <LogoutLink />
    //       </>
    //     )}
    //   </nav>
    // </header>
    <header id="header" class="fixed-top">
      <div class="container d-flex align-items-center justify-content-between">
        <h1 class="logo">
          <a href="/">Jordan Spaulding Construction</a>
        </h1>
        {/* Uncomment below if you prefer to use an image logo 
      <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a> */}

        <nav id="navbar" class="navbar">
          <ul>
            <li>
              <a class="nav-link scrollto active" href="/">
                Home
              </a>
            </li>
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
              <a class="nav-link scrollto" href="#contact-form">
                Contact
              </a>
            </li>
            <li>
              <a class="getstarted scrollto" href="#contact-form">
                Get Started
              </a>
            </li>
            <li>
              {localStorage.jwt === undefined ? (
                <>
                  <a class="nav-link scrollto" href="/login">
                    {" "}
                    Admin Login{" "}
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
