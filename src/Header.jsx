import { LogoutLink } from "./Logout";

export function Header() {
  return (
    <header>
      <nav>
        <a href="/"> Home </a> |<a href="/login"> Admin Login</a> | <a href="#abouts-index">About Jordan</a> |
        <a href="#portfolios-index">Portfolio</a> | <a href="#woodshops-index">The Woodshop</a> |
        {localStorage.jwt === undefined ? (
          <></>
        ) : (
          <>
            <LogoutLink />
          </>
        )}
      </nav>
    </header>
  );
}
