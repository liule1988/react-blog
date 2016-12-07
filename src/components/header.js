import React from 'react';
import ReactDom from 'react-dom';
import '../styles/header.css'
export default class Header extends React.Component{

    render(){
        return(
            <nav className="hh">
                <h5 className="title">Keep Fun</h5>
                <ul className="ul">
                    <li className="li"><a href="#/article">杂谈</a></li>
                    <li className="li"><a href="#/movie">电影</a></li>
                    <li className="li"><a href="#/music">音乐</a></li>
                    <li className="li"><a href="#/me">我</a></li>
                </ul>
            </nav>

            )

    }
}
