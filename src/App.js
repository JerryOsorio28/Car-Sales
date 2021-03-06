import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

//import connect() function from react-redux
import { connect } from 'react-redux';

const App = props => {
  
  // console.log(' Props from App Component', props )

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures store={props.store} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  // console.log('props from mapStateToProps', state)
    return{
      additionalPrice: state.additionalPrice,
      car: state.car,
      store: state.store
    }
}

// export default App;
export default connect(mapStateToProps, {})(App);
