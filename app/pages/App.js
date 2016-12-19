/**
 * Created by leliu5 on 2016/12/19.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../component/header'
import Banner from '../component/banner';
export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Banner title={"平凡之路"}/>
                {this.props.children}
            </div>
        );
    }
}

