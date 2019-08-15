//Set InitialState

const InitialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    store: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
}

// Create Mock reducer, export it, and import it where you created the store variable,
// and declare it inside of the store function.

export const reducer = (state = InitialState, action) => {
  console.log('state from reducer', action)
    switch(action.type){
        case 'ADD_FEATURES':
        return {
            ...state,
            additionalPrice: state.additionalPrice + action.payload.price,
            car: {...state.car, features: [...state.car.features, action.payload]}
        }
        default:
            return state;
    }
};