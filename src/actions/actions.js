//Create Actions Creators

export const AddFeatures = features => {
  // console.log('Ive been clicked')
    return {
      type: 'ADD_FEATURES',
      payload: features
    };
  };
export const removeFeatures = features => {
  console.log('Ive been clicked')
    return {
      type: 'REMOVE_FEATURES',
      payload: features
    };
  };

  