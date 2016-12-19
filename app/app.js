/**
 * Created by leliu5 on 2016/12/8.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './component/header'
import ArticleList from './component/artList';
import Banner from './component/banner';
import { Router, Route, hashHistory } from 'react-router';
import Root from './pages/Root';

ReactDOM.render((
    <Root/>
), document.getElementById("content"));