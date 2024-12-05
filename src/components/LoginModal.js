import React, { useState } from "react";

const LoginModal = ({ onClose, onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Error state

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = onLogin(username, password);
    if (!success) {
      setError("Invalid credentials. Please try again."); // Show error message
    } else {
      setError(""); // Clear error message on success
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          textAlign: "center",
          maxWidth: "400px",
          width: "80%",
        }}
      >
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "10px" }}>
            <label>
              Username:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{ marginLeft: "10px", padding: "5px" }}
              />
            </label>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ marginLeft: "10px", padding: "5px" }}
              />
            </label>
          </div>
          {error && <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>} {/* Error message */}
          <button type="submit" style={{ padding: "10px 20px", marginRight: "10px" }}>
            Login
          </button>
          <button
            type="button"
            onClick={onClose}
            style={{ padding: "10px 20px" }}
          >
            Close
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
