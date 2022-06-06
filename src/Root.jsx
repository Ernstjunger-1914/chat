import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import App from './App';
import Reducer from './redux/reducers';

const createStoreWithMiddleware = applyMiddleware(
    promiseMiddleware, 
    ReduxThunk
)(createStore);

function Root() {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={createStoreWithMiddleware(
                    Reducer,
                    window.__REDUX_DEVTOOLS_EXTENSION__ &&
                    window.__REDUX_DEVTOOLS_EXTENSION__()
                )}>
                    <App />
                </Provider>
            </BrowserRouter>
        </React.StrictMode>
    );
}

export default Root;