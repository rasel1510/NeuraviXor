import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiSun, HiMoon } from "react-icons/hi";
import logo from "../images/Neuravixor logo 2.png";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const navItemClass =
    "text-black dark:text-gray-200 hover:text-orange-500 transition-colors duration-200";

  return (
    <div className="navbar bg-white dark:bg-zinc-900 shadow-sm px-4 relative transition-colors duration-300">

      {/* Left - Logo & Mobile Menu */}
      <div className="navbar-start">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="btn btn-ghost lg:hidden dark:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </button>

        {/* Logo (no outline, no focus ring) */}
        <Link
          to="/"
          className="btn btn-ghost "
        >
          <img src={logo} alt="Neuravixor Logo" className="h-9 sm:h-10 " />
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-end hidden lg:flex items-center gap-4">
        <ul className="menu menu-horizontal gap-2 text-lg xl:text-xl font-medium">
          <li><Link to="/about" className={navItemClass}>About Us</Link></li>
          <li><Link to="/services" className={navItemClass}>Services</Link></li>
          <li><Link to="/projects" className={navItemClass}>Projects</Link></li>
          <li><Link to="/contact" className={navItemClass}>Contact Us</Link></li>
        </ul>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="btn btn-ghost btn-circle text-2xl text-orange-500 hover:bg-orange-100 dark:hover:bg-zinc-800 transition-all duration-300"
        >
          {isDarkMode ? <HiSun /> : <HiMoon />}
        </button>
      </div>

      {/* Mobile Theme Toggle (Visible only on mobile) */}
      <div className="lg:hidden flex-none">
        <button
          onClick={toggleTheme}
          className="btn btn-ghost btn-circle text-2xl text-orange-500 transition-all"
        >
          {isDarkMode ? <HiSun /> : <HiMoon />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-zinc-900 shadow-md lg:hidden z-50 transition-colors duration-300">
          <ul className="menu p-4 text-base sm:text-lg font-medium">
            <li><Link to="/about" className={navItemClass} onClick={() => setMobileMenuOpen(false)}>About Us</Link></li>
            <li><Link to="/services" className={navItemClass} onClick={() => setMobileMenuOpen(false)}>Service</Link></li>
            <li><Link to="/projects" className={navItemClass} onClick={() => setMobileMenuOpen(false)}>Projects</Link></li>
            <li><Link to="/contact" className={navItemClass} onClick={() => setMobileMenuOpen(false)}>Contact Us</Link></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
