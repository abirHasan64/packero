import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = () => {
  // Get the saved theme or default to light
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // Apply theme whenever it changes
  useEffect(() => {
    const theme = isDark ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [isDark]);

  const navItems = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/coverage">Coverage</NavLink>
      </li>
      <li>
        <NavLink to="/about">About Us</NavLink>
      </li>

      <li className="md:hidden">
        <NavLink to="/login">
          <button className="btn btn-success mb-2 font-extrabold">
            Sign In
          </button>
        </NavLink>
      </li>
      <li className="md:hidden">
        <button className="btn btn-success btn-dash font-extrabold">
          Be a rider
        </button>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-lg">
      <div className="navbar-start">
        <div className="dropdown font-extrabold">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navItems}
          </ul>
        </div>

        <div className="mx-4">
          <NavLink className="flex items-center gap-2" to="/">
            <img className="w-8 h-8 rounded-xl" src={logo} alt="Packero" />
            <span className="text-4xl mb-1 font-bold font-permanent-marker">
              Packero
            </span>
          </NavLink>
        </div>
      </div>

      <div className="navbar-center font-extrabold hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg">{navItems}</ul>
      </div>

      <div className="navbar-end">
        <div className="hidden mx-4 md:block">
          <NavLink className="mx-4" to="/login">
            <button className="btn btn-success mb-2 font-extrabold">
              Sign In
            </button>
          </NavLink>
          <button className="btn btn-success btn-dash font-extrabold">
            Be a rider
          </button>
        </div>

        {/* 🌙 Theme toggle */}
        <label className="flex cursor-pointer gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>

          <input
            type="checkbox"
            checked={isDark}
            onChange={() => setIsDark(!isDark)}
            className="toggle theme-controller"
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
