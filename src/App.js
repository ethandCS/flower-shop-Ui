import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Inventory from "./pages/Inventory";
import Transactions from "./pages/Transactions";
import LoginModal from "./components/LoginModal";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Tracks login state
  const [showLoginModal, setShowLoginModal] = useState(false); // Tracks if login modal is open

  const handleLogin = (username, password) => {
    // Hardcoded credentials
    if (username === "employee" && password === "password123") {
      setIsLoggedIn(true);
      setShowLoginModal(false);
      alert("Login successful!");
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  const requireAuth = (Component) => {
    // Redirect to Home if not logged in
    return isLoggedIn ? (
      <Component />
    ) : (
      <Navigate to="/" replace />
    );
  };

  return (
    <Router>
      {/* Render Login Modal */}
      {showLoginModal && (
        <LoginModal
          onClose={() => setShowLoginModal(false)}
          onLogin={handleLogin}
        />
      )}

      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={<Home isLoggedIn={isLoggedIn} setShowLoginModal={setShowLoginModal} />}
        />

        {/* Inventory Route */}
        <Route
          path="/inventory"
          element={requireAuth(() => <Inventory isLoggedIn={isLoggedIn} />)}
        />

        {/* Transactions Route */}
        <Route
          path="/transactions"
          element={requireAuth(() => <Transactions isLoggedIn={isLoggedIn} />)}
        />
      </Routes>
    </Router>
  );
}

export default App;
