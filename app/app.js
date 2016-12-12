/**
 * Created by leliu5 on 2016/12/8.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './component/header'
import ArticleList from './component/artList';
import Banner from './component/banner';
class HelloWorld extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Banner title={"平凡之路"}/>
                <ArticleList/>
            </div>
        );
    }
}

ReactDOM.render(<HelloWorld/>, document.getElementById("content"));