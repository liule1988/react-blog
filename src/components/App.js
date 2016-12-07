'use strict';


import React from 'react';
import ReactDom from 'react-dom';

import { Router, Route, hashHistory } from 'react-router';
import Header from './header';
var App = React.createClass({
    render: function() {
        return (
            <div>

<Header/>

            </div>
        );
    }
});

var List = React.createClass({
    render: function() {
        return (
            <div>
                <h5 className="title">hello, yeoman app!</h5>
                <div><a href="#/">返回首页</a></div>
                <div>这是列表页</div>
            </div>
        );
    }
});

var Detail = React.createClass({
    render: function() {
        return (
            <div>
                <h5 className="title">hello, yeoman app!</h5>
                <div><a href="#/">返回首页</a></div>
                <div>这是详情页</div>
            </div>
        );
    }
});

//最终渲染
ReactDom.render((
    <Router history={hashHistory}>
        <Route path='/' component={App}></Route>
        <Route path='/article' component={List} />
        <Route path='/movie' component={Detail} />
        <Route path='/music' component={Detail} />
        <Route path='/me' component={Detail} />

    </Router>
), document.getElementById('app'));
