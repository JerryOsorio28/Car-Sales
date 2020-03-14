import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

//Import the Provider wrapper to wrap your App
import { Provider } from 'react-redux';

//import reducers
import { reducer } from './reducers/reducers';

//Step - 1 Create Redux Store
import { createStore } from 'redux';

const store = createStore(reducer);

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, rootElement);
