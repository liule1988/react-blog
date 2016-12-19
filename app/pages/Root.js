/**
 * Created by leliu5 on 2016/12/19.
 */
import { Router, Route, hashHistory,IndexRoute } from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import Tech from './Tech';
import App from './App';
import Movie from './Movie';
import Essay from './Essay';
import Me from './Me';
import Article from '../component/article'
export default class Root extends React.Component {
    render() {
        return (
            <Router history={hashHistory} routes={routes} />
        );
    }
}
const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Tech} />
        <Route path="tech" component={Tech} />
        <Route path="movie" component={Movie} />
        <Route path="essay" component={Essay} />
        <Route path="me" component={Me} />
        <Route path="article/:id" component={Article}/>

    </Route>
);