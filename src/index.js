import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import './app/index.css';
import App from './app/App';
import registerServiceWorker from './app/registerServiceWorker';
import configureStore from './store/configureStore';
import Pacient from './app/Pacient';

const store = configureStore();

render(
    <Provider store={store}>
        <Pacient />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
