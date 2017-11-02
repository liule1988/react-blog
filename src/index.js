import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill'; //部分ES6 api 不会转码，需要引入这个库
import App from './pages/App'


ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

