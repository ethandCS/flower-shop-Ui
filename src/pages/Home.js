import React from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ isLoggedIn, setShowLoginModal }) => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    if (isLoggedIn) {
      navigate(path);
    } else {
      setShowLoginModal(true);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Welcome to the Flower Shop</h1>
      <p>Streamlining operations for May West's Flower Shop</p>

      {/* Add the flower image */}
      <img
        src="../doodle-flowers.png" // Path relative to the public folder
        alt="Doodle Flowers"
        style={{
          maxWidth: "300px",
          margin: "20px auto",
          display: "block",
          borderRadius: "10px",
        }}
      />

      <div style={{ marginTop: "20px" }}>
        <button
          style={{ margin: "10px", padding: "10px 20px", fontSize: "16px" }}
          onClick={() => handleNavigate("/inventory")}
        >
          Inventory Management
        </button>
        <button
          style={{ margin: "10px", padding: "10px 20px", fontSize: "16px" }}
          onClick={() => handleNavigate("/transactions")}
        >
          Transactions
        </button>
      </div>
    </div>
  );
};

export default Home;
