import { Link } from "react-router-dom";
import { useTheme } from "../ThemeContext";
import { useStudents } from "../StudentContext";
import "./Navbar.css";

function Navbar({ activePage }) {
  const { theme, toggleTheme } = useTheme();
  const { favourites } = useStudents();

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="navbar-brand">
          <div className="brand-icon">🎓</div>
          <div>
            <h1 className="brand-title">Academia</h1>
            <p className="brand-sub">Student Registry</p>
          </div>
        </div>

        <nav className="nav">
          <Link to="/" className={"nav-link " + (activePage === "list" ? "active" : "")}>
            All Students
          </Link>
          <Link to="/favourites" className={"nav-link " + (activePage === "favourites" ? "active" : "")}>
            ★ Favourites
            <span className="fav-badge">{favourites.length}</span>
          </Link>
          <button className="theme-toggle" onClick={toggleTheme} title="Toggle theme">
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
