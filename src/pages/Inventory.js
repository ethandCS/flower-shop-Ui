import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getInventoryList,
  getLowStockItems,
  processManualOrder,
} from "../inventory_functions";
import CreateOrderModal from "../components/CreateOrderModal"; // Import the modal component
import "../App.css";

const Inventory = ({ isLoggedIn, setShowLoginModal }) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [showOrderModal, setShowOrderModal] = useState(false); // State for Create Order Modal
  const [modalContent, setModalContent] = useState("");

  // Hardcoded product codes for display
  const productCodes = {
    "0001": "Roses",
    "0002": "Tulips",
    "0003": "Lilies",
    "0004": "Daisies",
    "0005": "Sunflowers",
    "0006": "Orchids",
  };

  // Show all inventory
  const handleShowInventory = () => {
    if (isLoggedIn) {
      setModalContent(getInventoryList());
      setShowModal(true);
    } else {
      setShowLoginModal(true);
    }
  };

  // Show low stock items
  const handleShowLowStock = () => {
    if (isLoggedIn) {
      const lowStock = getLowStockItems();
      setModalContent(
        lowStock.length > 0
          ? `Low Stock Items:\n${lowStock.join("\n")}`
          : "No low-stock items to display."
      );
      setShowModal(true);
    } else {
      setShowLoginModal(true);
    }
  };

  // Open Create Order Modal
  const handleCreateOrder = () => {
    if (isLoggedIn) {
      setShowOrderModal(true);
    } else {
      setShowLoginModal(true);
    }
  };

  // Submit Order
  const handleOrderSubmit = (productCode, quantity) => {
    if (productCode && quantity > 0) {
      const confirmation = processManualOrder(productCode, quantity);
      alert(confirmation); // Show confirmation message
      setShowOrderModal(false); // Close the modal
    } else {
      alert("Please provide a valid product code and quantity.");
    }
  };

  // Close modals
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleCloseOrderModal = () => {
    setShowOrderModal(false);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Inventory Management</h1>
      <p>Manage your flower shop inventory using the buttons below:</p>

      {/* View Inventory Button */}
      <button className="button" onClick={handleShowInventory}>
        View Inventory
      </button>

      {/* Check Low Stock Button */}
      <button className="button" onClick={handleShowLowStock}>
        Check Low Stock
      </button>

      {/* Create Order Button */}
      <button className="button" onClick={handleCreateOrder}>
        Create Order
      </button>

      {/* Back to Home Button */}
      <button className="button" onClick={() => navigate("/")}>
        Back to Home
      </button>

      {/* Inventory Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Inventory Information</h2>
            <pre style={{ textAlign: "left", whiteSpace: "pre-wrap" }}>
              {modalContent}
            </pre>
            <button className="button" onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* Create Order Modal */}
      {showOrderModal && (
        <CreateOrderModal
          onClose={handleCloseOrderModal}
          onSubmitOrder={handleOrderSubmit}
        />
      )}

      {/* Product Codes Section */}
      <div style={{ marginTop: "20px", textAlign: "left" }}>
        <h3>Product Codes:</h3>
        <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
          {Object.entries(productCodes).map(([code, name]) => (
            <li key={code} style={{ marginBottom: "5px" }}>
              <strong>{code}</strong>: {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Inventory;
