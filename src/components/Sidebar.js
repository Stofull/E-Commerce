import React from 'react';
import '../styles/sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="keywords-section">
        <h5>Keywords</h5>
        <div className="keywords">
          <span className="keyword">Spring</span>
          <span className="keyword">Smart</span>
          <span className="keyword">Modern</span>
        </div>
      </div>

      <div className="filter-section">
        <h6>Label</h6>
        <div className="checkbox-group">
          <label>
            <input type="checkbox" /> Description
          </label>
          <label>
            <input type="checkbox" /> Description
          </label>
          <label>
            <input type="checkbox" /> Description
          </label>
        </div>
      </div>

      <div className="price-section">
        <h6>Price</h6>
        <input type="range" min="0" max="100" />
      </div>

      <div className="filter-section">
        <h6>Color</h6>
        <div className="checkbox-group">
          <label>
            <input type="checkbox" /> Label
          </label>
          <label>
            <input type="checkbox" /> Label
          </label>
          <label>
            <input type="checkbox" /> Label
          </label>
        </div>
      </div>

      <div className="filter-section">
        <h6>Size</h6>
        <div className="checkbox-group">
          <label>
            <input type="checkbox" /> Label
          </label>
          <label>
            <input type="checkbox" /> Label
          </label>
          <label>
            <input type="checkbox" /> Label
          </label>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
