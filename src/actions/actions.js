//Create Actions Creators

export const AddFeatures = features => {
  console.log('Ive been clicked')
    return {
      type: 'ADD_FEATURES',
      payload: features
    };
  };

  export const NewFeature = feature => {
    // console.log(feature)
    return {
      type: 'NEW_FEATURE',
      payload: feature
    }
  };

  // const buyItem = item => {
  //   // dipsatch an action here to add an item
  // };