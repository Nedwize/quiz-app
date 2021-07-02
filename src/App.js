import React from 'react';
import './app.css';

function App() {
  return (
    <div className="container">
      <div className="heading-container">
        <h3>
          Question <span>1/12</span>
        </h3>
        <h3>
          Score <span>04</span>
        </h3>
      </div>
      <div className="question">
        <h2 className="header">
          What was the first Android version specifically optimized for tablets?
        </h2>
      </div>
      <div className="option-container">
        <div className="option">
          <div>
            <span>A</span>
          </div>
          <h3>HoneyComb</h3>
        </div>
        <div className="option">
          <div>
            <span>B</span>
          </div>
          <h3>Eclair</h3>
        </div>
        <div className="option">
          <div>
            <span>C</span>
          </div>
          <h3>Froyo</h3>
        </div>
        <div className="option">
          <div>
            <span>D</span>
          </div>
          <h3>Marshmellow</h3>
        </div>
      </div>
      <div className="btn-container">
        <button className="btn">Submit</button>
      </div>
    </div>
  );
}

export default App;
