import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill'; //部分ES6 api 不会转码，需要引入这个库
import App from './pages/App'
import dataReducer from './redux/reducer/reducers'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
const store = createStore(dataReducer);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,
    document.getElementById('root')
);

