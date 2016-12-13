/**
 * Created by Administrator on 2016/12/14 0014.
 */
import React, { Component } from 'react';
var Remarkable = require('remarkable');
var md = new Remarkable();
import '../styles/article.css'
export default class Article extends Component {

    render() {
        return (
            <div>
                <div className="article">
                    <h1 className="article-title">{this.props.data.title}</h1>
                    <p className="article-time">{this.props.data.created_at.substr(0, 10)}</p>
                    <div className="article-desc article-content"
                         dangerouslySetInnerHTML={{__html: md.render(this.props.data.body)}}>
                    </div>
                </div>
            </div>
        );
    }
};