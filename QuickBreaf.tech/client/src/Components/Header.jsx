import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Countries from "./Countries";

function Header() {
  const [active, setActive] = useState(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showCountriesDropdown, setShowCountriesDropdown] = useState(false);
  const [theme, setTheme] = useState("light-theme");
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const categories = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
    "politics",
  ];

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light-theme" ? "dark-theme" : "light-theme"));
  };

  const handleSearch = (e) => {
    if (e.key === "Enter" && query.trim() !== "") {
      navigate(`/search/${query}`);
      setQuery("");
      setActive(false);
      setShowCategoryDropdown(false);
      setShowCountriesDropdown(false);
    }
  };

  return (
    <header>
      <nav className="fixed top-0 left-0 w-full z-20 flex items-center justify-between md:justify-around py-4 px-6 shadow-lg md:bg-transparent transition-colors duration-300 backdrop-blur-sm">
        
        {/* Logo */}
        <h2 className="font-bold text-2xl">QuickBreaf</h2>

        {/* Search Bar */}
        <div className="relative w-40 md:w-64">
          <input
            type="text"
            placeholder="Search news..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleSearch}
            className="w-full py-2 pl-10 pr-4 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/70 text-black placeholder-gray-500"
          />
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m1.15-4.65a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* Navigation Links */}
        <ul
          className={`flex items-center gap-8 transition-all duration-300
          md:static absolute top-16 left-0 md:flex-row flex-col 
          md:bg-transparent w-full md:w-auto py-4 md:py-0
          ${active ? "flex" : "hidden md:flex backdrop:blur-sm"}`}
        >
          <li>
            <Link className="font-semibold hover:text-gray-400" to="/" onClick={() => setActive(false)}>
              All News
            </Link>
          </li>
          <li>
            <Link className="font-semibold hover:text-gray-400" to="/top-headlines" onClick={() => setActive(false)}>
              Top Headlines
            </Link>
          </li>

          {/* Categories Dropdown */}
          <li className="relative">
            <button
              className="flex items-center gap-1 font-semibold hover:text-gray-400"
              onClick={() => {
                setShowCategoryDropdown(!showCategoryDropdown);
                setShowCountriesDropdown(false);
              }}
            >
              Categories
            </button>

            <ul
              className={`absolute left-0 mt-2 rounded-md shadow-lg backdrop-blur-sm z-30 overflow-hidden transition-all duration-300
                ${showCategoryDropdown ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
            >
              {categories.map((cat, i) => (
                <li key={i}>
                  <Link
                    to={`/category/${cat}`}
                    className="block px-4 py-2 hover:bg-gray-400 capitalize"
                    onClick={() => {
                      setShowCategoryDropdown(false);
                      setActive(false);
                    }}
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {/* Countries Dropdown */}
          <li className="relative">
            <button
              className="flex items-center gap-1 font-semibold hover:text-gray-400"
              onClick={() => {
                setShowCountriesDropdown(!showCountriesDropdown);
                setShowCategoryDropdown(false);
              }}
            >
              Countries
            </button>

            <ul
              className={`absolute left-0 mt-2 rounded-md shadow-lg z-30 backdrop-blur-sm overflow-hidden transition-all duration-300
                ${showCountriesDropdown ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
            >
              {Countries.map((r, i) => (
                <li key={i}>
                  <Link
                    to={`/countries/${r.iso_2_alpha}`}
                    className="block px-4 py-2 hover:bg-gray-400 capitalize"
                    onClick={() => {
                      setShowCountriesDropdown(false);
                      setActive(false);
                    }}
                  >
                    {r.countryName}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {/* Theme Switch */}
          <li>
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 font-semibold hover:text-gray-400"
            >
              {theme === "light-theme" ? "Light Mode" : "Dark Mode"}
              <svg width="24" height="24" viewBox="0 0 24 24">
                {theme === "light-theme" ? (
                  <g fill="currentColor" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="4" />
                    <line x1="12" y1="20" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
                    <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="4" y2="12" />
                    <line x1="20" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" />
                    <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
                  </g>
                ) : (
                  <path
                    fill="currentColor"
                    d="M21 12.79A9 9 0 0111.21 3 7 7 0 1019 14.79 8.94 8.94 0 0121 12.79z"
                  />
                )}
              </svg>
            </button>
          </li>

          {/* Mobile Login */}
<li className="md:hidden">
  <button
    className="font-semibold hover:text-gray-400 m-2"
    onClick={() => navigate("/login")}
  >
    SignIn
  </button>
</li>
<li className="md:hidden">
  <button
    className="font-semibold bg-orange-400 px-6 py-2 rounded-2xl border hover:text-gray-600"
    onClick={() => navigate("/login")}
  >
    LogIn
  </button>
</li>

{/* Desktop Login */}
<ul className="hidden md:flex justify-end gap-4">
  <li>
    <button
      className="font-semibold hover:text-gray-400 m-2"
      onClick={() => navigate("/login")}
    >
      SignIn
    </button>
  </li>
  <li>
    <button
      className="font-semibold bg-orange-400 px-6 py-2 rounded-2xl border hover:text-gray-600"
      onClick={() => navigate("/login")}
    >
      LogIn
    </button>
  </li>
</ul>
        </ul>


        {/* Hamburger */}
        <div
          className="md:hidden flex flex-col gap-1 cursor-pointer"
          onClick={() => setActive(!active)}
        >
          <span className="w-6 h-1 bg-current"></span>
          <span className="w-6 h-1 bg-current"></span>
          <span className="w-6 h-1 bg-current"></span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
