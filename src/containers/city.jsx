import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setActiveCity } from '../actions';

const City = (props) => {
  return (
    <div className="list-group-item" onClick={() => props.setActiveCity(props.city)}>
      <p>{props.city.name}</p>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setActiveCity }, dispatch);
}

export default connect(null, mapDispatchToProps)(City);
