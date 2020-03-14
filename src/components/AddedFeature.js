import React from 'react';
import { connect } from 'react-redux';

import { removeFeatures } from '../actions/actions'

const AddedFeature = props => {
  
  const removeFeature = e => {
    console.log('removeFeature',props)
    e.preventDefault();
    // props.removeFeatures()
  };

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={removeFeature}>X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = () => {
  return {

  }
}

export default connect(mapStateToProps, { removeFeatures })(AddedFeature);
