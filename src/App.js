import React from 'react';
import { Jumbotron } from 'react-bootstrap';

function App() {
  return (
    <div
      style={{
        backgroundColor: 'white',
        width: '80vw',
        height: '60vh',
        margin: 'auto',
        marginTop: '100px',
        padding: '20px',
        borderRadius: '10px',
        borderTop: '10px solid #68d391',
        boxShadow:
          '0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%)',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <h3>
          Question 1/<span style={{ fontSize: 'smaller' }}>14</span>
        </h3>
        <h3>
          Score : <span>4</span>
        </h3>
      </div>
      <div style={{ margin: '10px 0px' }}>
        <h1 className="header">Welcome To React-Bootstrap</h1>
      </div>
      <div style={{ marginTop: '30px' }}>
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
