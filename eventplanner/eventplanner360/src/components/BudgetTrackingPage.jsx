import React from 'react';
import './BudgetTracking.css'; // Import your CSS file for BudgetTrackingPage

const BudgetTrackingPage = () => {
  return (
    <div className="budget-tracking-page">
      <div className="budget-summary">
        <h2>Budget Summary</h2>
        {/* Include summary information such as total budget, spent amount, remaining amount */}
        <div className="summary-details">
          <div className="summary-item">
            <h3>Total Budget</h3>
            <p>$10,000</p> {/* Example: Replace with actual data */}
          </div>
          <div className="summary-item">
            <h3>Spent</h3>
            <p>$7,500</p> {/* Example: Replace with actual data */}
          </div>
          <div className="summary-item">
            <h3>Remaining</h3>
            <p>$2,500</p> {/* Example: Replace with actual data */}
          </div>
        </div>
      </div>

      <div className="budget-details">
        <h2>Budget Details</h2>
        {/* Display detailed budget items with categories, amounts, and statuses */}
        <div className="budget-items">
          <div className="budget-item">
            <h3>Decoration</h3>
            <p>$2,000</p> {/* Example: Replace with actual data */}
            <span className="status green">Completed</span> {/* Example: Use appropriate status indicators */}
          </div>
          <div className="budget-item">
            <h3>Catering</h3>
            <p>$3,500</p> {/* Example: Replace with actual data */}
            <span className="status yellow">In Progress</span>
          </div>
          <div className="budget-item">
            <h3>Entertainment</h3>
            <p>$2,000</p> {/* Example: Replace with actual data */}
            <span className="status red">Over Budget</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetTrackingPage;
