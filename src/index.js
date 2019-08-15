import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/reducers';
import { devToolsEnhancer } from 'redux-devtools-extension';

import './css/index.css';

import GameContainer from './containers/GameContainer';

const store = createStore(rootReducer, /* preloadedState, */ devToolsEnhancer(
    // Specify custom devTools options
));

render(
    <Provider store={store}>
        <GameContainer />
    </Provider>,
    document.getElementById('root')
);
