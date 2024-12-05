import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"; // Import the CSS file

const Transactions = ({ isLoggedIn, setShowLoginModal }) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  // Handle transactions access
  const handleAccessTransactions = () => {
    if (isLoggedIn) {
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
      <h1>Transactions</h1>
      <p>Manage and review transactions in this section.</p>

      {/* Access Transactions Button */}
      <button className="button" onClick={handleAccessTransactions}>
        Access Transactions
      </button>

      {/* Back to Home Button */}
      <button className="button" onClick={() => navigate("/")}>
        Back to Home
      </button>

      {/* Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Transactions Placeholder</h2>
            <p>Transactions functionality is coming soon!</p>
            <button className="button" onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Transactions;
    