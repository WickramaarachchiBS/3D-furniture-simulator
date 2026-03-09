import React, { useState } from "react";
import { useNavigate, useLocation, Navigate, Link } from "react-router-dom";
import { useAuth } from "../store/AuthProvider";
import { LogIn, Sofa } from "lucide-react";

export const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from =
    (location.state as { from?: { pathname: string } })?.from?.pathname ??
    "/designer";

  // Already logged in — send them along
  if (user) return <Navigate to={from} replace />;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (login(username, password)) {
      navigate(from, { replace: true });
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left panel — background image */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <img
          src="https://images.pexels.com/photos/34208354/pexels-photo-34208354.jpeg"
          alt="Interior"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/50 via-transparent to-purple-900/50" />
        {/* Decorative blobs */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        {/* Content on top of image */}
        <div className="relative z-10 flex flex-col justify-between p-12 w-full">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
              <Sofa className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white font-logo tracking-tight">
              Concept.Store
            </span>
          </Link>
          <div>
            <h2 className="text-4xl font-bold text-white mb-4 leading-tight">
              Design Your
              <br />
              <span className="text-cyan-300">Dream Space</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-sm">
              Sign in to access your 3D room designer and bring your interior
              vision to life.
            </p>
            {/* Decorative divider */}
            <div className="mt-8 flex items-center gap-3">
              <div className="h-px flex-1 bg-white/20" />
              <span className="text-white/40 text-sm">Concept.store Studio</span>
              <div className="h-px flex-1 bg-white/20" />
            </div>
          </div>
        </div>
      </div>

      {/* Right panel — form */}
      <div className="flex-1 flex flex-col items-center justify-center bg-white px-8 py-12 relative">
        {/* Subtle top-right decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-50 rounded-bl-full opacity-60 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-50 rounded-tr-full opacity-60 pointer-events-none" />

        <div className="relative z-10 w-full max-w-sm">
          {/* Mobile logo */}
          <div className="flex lg:hidden items-center justify-center gap-2 mb-8">
            <div className="w-9 h-9 bg-cyan-600 rounded-xl flex items-center justify-center shadow-md">
              <Sofa className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 font-logo">
              Concept.store
            </span>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back
          </h1>
          <p className="text-gray-500 mb-8 text-sm">
            Sign in to continue to your designer
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 block w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 focus:border-cyan-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-200 transition"
                placeholder="Enter username"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 focus:border-cyan-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-200 transition"
                placeholder="Enter password"
              />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-cyan-600 text-white rounded-xl px-4 py-3 font-semibold hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 transition transform hover:scale-[1.02] shadow-md hover:shadow-lg"
            >
              <LogIn size={18} />
              Sign In
            </button>

            <div className="mt-6 p-4 bg-gray-50 rounded-xl border border-gray-100 text-center text-sm text-gray-500">
              <p className="font-medium text-gray-600 mb-1">Demo Credentials</p>
              <p>
                Admin:{" "}
                <span className="font-mono text-gray-800">
                  admin / admin123
                </span>
              </p>
              <p>
                Customer:{" "}
                <span className="font-mono text-gray-800">
                  customer / customer123
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
