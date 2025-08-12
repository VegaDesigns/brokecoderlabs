// src/components/Layout.jsx
import { Link, NavLink } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <>
      <header className="header">
        <div className="container header__bar">
          {/* Brand */}
          <Link to="/" className="logo" aria-label="Broke Coder Labs home">
            <span className="logo__dot" aria-hidden="true" />
            <span>Broke Coder Labs</span>
          </Link>

          {/* Primary nav */}
          <nav className="nav" aria-label="Primary">
            <NavLink to="/" end>
              Home
            </NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
        </div>
      </header>

      <main className="main">
        <div className="container">{children}</div>
      </main>

      <footer className="footer">
        <div className="container footer__bar">
          <small>© {new Date().getFullYear()} Broke Coder Labs</small>
          <small className="muted">
            “I’m tired of being broke” labs for tiny apps.
          </small>
        </div>
      </footer>
    </>
  );
}
