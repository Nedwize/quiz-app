import React from 'react';
import './app.css';

function App() {
  return (
    <div className="container">
      <div className="heading-container">
        <h3>Question 1/14</h3>
        <h3>
          Score : <span>4</span>
        </h3>
      </div>
      <div className="question">
        <h1 className="header">Welcome To React-Bootstrap</h1>
      </div>
      <div className="option-container">
        <div className="option">
          <div>
            <span>A</span>
          </div>
          <h3>Sapien Automate</h3>
        </div>
        <div className="option">
          <div>
            <span>B</span>
          </div>
          <h3>Sapien Automate</h3>
        </div>
        <div className="option">
          <div>
            <span>C</span>
          </div>
          <h3>Sapien Automate</h3>
        </div>
        <div className="option">
          <div>
            <span>D</span>
          </div>
          <h3>Sapien Automate</h3>
        </div>
      </div>
      <div className="btn-container">
        <button className="btn">Submit</button>
      </div>
    </div>
  );
}

export default App;
