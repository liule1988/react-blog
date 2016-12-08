/**
 * Created by leliu5 on 2016/12/8.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import ArticleList from './component/artList'
class HelloWorld extends React.Component {
    render() {
        return (
            <div><ArticleList/></div>
        );
    }
}

ReactDOM.render(<HelloWorld/>, document.getElementById("content"));