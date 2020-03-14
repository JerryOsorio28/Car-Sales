import React from 'react';
import { connect } from 'react-redux';

//import actions creators
import { AddFeatures } from '../actions/actions';


const AdditionalFeature = props => {
  // console.log('add feature function', props.feature)

   const addFeature = e => {
    e.preventDefault();
    props.AddFeatures({id: props.feature.id, name: props.feature.name, price: props.feature.price})
  };

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={addFeature}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
    return {

    }
};

// export default AdditionalFeature;
export default connect(mapStateToProps, { AddFeatures })(AdditionalFeature);
