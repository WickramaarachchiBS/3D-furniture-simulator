import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { Login } from "./pages/Login";
import { Landing } from "./pages/Landing";
import { Designer } from "./pages/Designer";
import { AboutUs } from "./pages/AboutUs";
import { StoreLocator } from "./pages/StoreLocator";
import { ContactUs } from "./pages/ContactUs";
import { AuthProvider, useAuth } from "./store/AuthProvider";
import { StateProvider } from "./store/StateProvider";

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { user } = useAuth();
  const location = useLocation();
  return user ? (
    <>{children}</>
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <StateProvider>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/store-locator" element={<StoreLocator />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/designer"
              element={
                <ProtectedRoute>
                  <Designer />
                </ProtectedRoute>
              }
            />
          </Routes>
        </StateProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
