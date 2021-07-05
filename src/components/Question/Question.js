import React from 'react';

const Question = ({ title }) => {
  return (
    <div className="question">
      <h2 className="header">{title}</h2>
    </div>
  );
};

export default Question;
