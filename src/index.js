import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import './app/index.css';
import App from './app/App';
import registerServiceWorker from './app/registerServiceWorker';
import configureStore from './store/configureStore';

const store = configureStore();

render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
