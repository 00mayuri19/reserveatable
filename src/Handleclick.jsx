import React, { useState } from 'react';
import "./handleclick.css";
function Handleclick() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}className="btn">
      Confirm 
      </button>
      {isVisible && (
        <div>
          <p><h1>Thanks For Booking!😊.</h1></p>
        </div>
      )}
    </div>
  );
}

export default Handleclick;
