import React from 'react';

const Option = ({ name, i, handleSelect, selected }) => {
  return (
    <div className="option" onClick={() => handleSelect(name)}>
      <div>
        <span>{i}</span>
      </div>
      <h3>{name}</h3>
      {selected === name && <div className="select"></div>}
    </div>
  );
};

export default Option;
