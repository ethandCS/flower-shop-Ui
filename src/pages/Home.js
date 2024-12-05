import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Welcome to the Flower Shop</h1>
      <p>Streamlining operations for May West's Flower Shop</p>
      <div style={{ marginTop: "20px" }}>
        <button
          style={{ margin: "10px", padding: "10px 20px", fontSize: "16px" }}
          onClick={() => navigate("/inventory")}
        >
          Inventory Management
        </button>
        <button
          style={{ margin: "10px", padding: "10px 20px", fontSize: "16px" }}
          onClick={() => navigate("/transactions")}
        >
          Transactions
        </button>
      </div>
    </div>
  );
};

export default Home;
