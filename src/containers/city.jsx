import React from 'react';

const City = (props) => {
  return (
    <div className="list-group-item">
      <p>{props.city.name}</p>
    </div>
  );
};

export default City;
