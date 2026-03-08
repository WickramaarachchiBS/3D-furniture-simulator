import React, { useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { Sofa, Menu, X, ArrowRight, LogOut } from "lucide-react";
import { useAuth } from "../store/AuthProvider";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Store Locator", to: "/store-locator" },
  { label: "Contact Us", to: "/contact" },
  { label: "About Us", to: "/about" },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
    setMenuOpen(false);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
            onClick={() => setMenuOpen(false)}
          >
            <div className="w-9 h-9 bg-cyan-600 rounded-xl flex items-center justify-center shadow-md group-hover:bg-cyan-700 transition-colors">
              <Sofa className="w-5 h-5 text-white" />
            </div>
            <span
              className={`text-xl font-bold font-logo tracking-tight transition-colors ${
                scrolled || menuOpen ? "text-gray-900" : "text-gray-900"
              }`}
            >
              iFurnish
            </span>
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    isActive
                      ? "text-white bg-cyan-600"
                      : "text-gray-700 hover:text-black hover:bg-cyan-500"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <>
                <span className="text-sm text-gray-600 font-medium">
                  Hi, {user.username}
                </span>
                <Link
                  to="/designer"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-semibold text-white bg-cyan-600 rounded-full hover:bg-cyan-700 transition-all transform hover:scale-105 shadow-md"
                >
                  <Sofa className="w-4 h-4" /> Designer
                </Link>
                <button
                  onClick={handleLogout}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-semibold text-white bg-red-500 rounded-full hover:bg-red-600 transition-all transform hover:scale-105 shadow-md"
                >
                  <LogOut className="w-4 h-4" /> Sign Out
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                Start Designing <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <div className="pt-2 border-t border-gray-100 mt-2">
              {user ? (
                <div className="space-y-2">
                  <p className="text-center text-sm text-gray-500">
                    Signed in as{" "}
                    <span className="font-semibold text-gray-700">
                      {user.username}
                    </span>
                  </p>
                  <Link
                    to="/designer"
                    onClick={() => setMenuOpen(false)}
                    className="w-full flex items-center justify-center gap-1.5 px-5 py-3 text-sm font-semibold text-white bg-cyan-600 rounded-full hover:bg-cyan-700 transition-colors"
                  >
                    <Sofa className="w-4 h-4" /> Designer
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center justify-center gap-1.5 px-5 py-3 text-sm font-semibold text-white bg-red-500 rounded-full hover:bg-red-600 transition-colors"
                  >
                    <LogOut className="w-4 h-4" /> Sign Out
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-1.5 px-5 py-3 text-sm font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
                >
                  Start Designing <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
