import React, {Component} from 'react';
import {
    HashRouter as Router,
    Route,
    Link,
    Redirect,
    Switch
} from 'react-router-dom';
import './normalize.css';
import './app.scss'
import Header from '../components/Header/header'
import IndexPage from './index/index'
import Article from './articles/article'
import About from './about/about'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class App extends Component {
    constructor() {
        super()
    }

    render() {
        return (

            <Router>
                <div className="app">
                    <Header/>

                    <Route exact path="/" component={IndexPage}/>
                    <Route path="/articles" component={Article}/>
                    <Route path="/me" component={About}/>
                </div>
            </Router>
        )
    }


}


export default App;

