import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getInventoryList } from "../inventory_functions";
import "../App.css"; // Import the CSS file

const Inventory = ({ isLoggedIn, setShowLoginModal }) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");

  // Show all inventory
  const handleShowInventory = () => {
    if (isLoggedIn) {
      setModalContent(getInventoryList());
      setShowModal(true);
    } else {
      setShowLoginModal(true);
    }
  };

  // Close modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Inventory Management</h1>
      <p>Manage your flower shop inventory using the button below:</p>

      {/* View Inventory Button */}
      <button className="button" onClick={handleShowInventory}>
        View Inventory
      </button>

      {/* Back to Home Button */}
      <button className="button" onClick={() => navigate("/")}>
        Back to Home
      </button>

      {/* Modal */}
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
    </div>
  );
};

export default Inventory;
