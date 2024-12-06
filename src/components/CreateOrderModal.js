import React, { useState } from "react";
import { generateOrderSheet } from "../inventory_functions"; // Import the auto-order function

const CreateOrderModal = ({ onClose, onSubmitOrder }) => {
  const [productCode, setProductCode] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitOrder(productCode, quantity);
    setProductCode(""); // Reset product code
    setQuantity(""); // Reset quantity
  };

  const handleAutoOrder = () => {
    const orderSheet = generateOrderSheet();
    if (orderSheet.includes("No low-stock items")) {
      alert(orderSheet); // Alert if there are no low-stock items
    } else {
      alert(`Auto Order Placed:\n${orderSheet}`);
    }
    onClose(); // Close the modal after auto order
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
        <h2>Create Order</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "10px" }}>
            <label>
              Product Code:
              <input
                type="text"
                value={productCode}
                onChange={(e) => setProductCode(e.target.value)}
                style={{ marginLeft: "10px", padding: "5px" }}
              />
            </label>
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>
              Quantity:
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                style={{ marginLeft: "10px", padding: "5px" }}
              />
            </label>
          </div>
          <button type="submit" style={{ padding: "10px 20px", marginRight: "10px" }}>
            Submit Order
          </button>
        </form>
        <button
          type="button"
          style={{
            padding: "10px 20px",
            backgroundColor: "#e0e0e0",
            border: "1px solid #ccc",
            borderRadius: "4px",
            cursor: "pointer",
            marginTop: "20px",
          }}
          onClick={handleAutoOrder}
        >
          Auto Order Low Stock
        </button>
        <button
          type="button"
          onClick={onClose}
          style={{ padding: "10px 20px", marginTop: "10px" }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CreateOrderModal;
