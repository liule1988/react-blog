import React from 'react';
import '../styles/header.css'
import { Link } from 'react-router';
export  default class Header extends React.Component{
    render(){
        return(
            <div className="header_container">
                <div className="logo">
                    <span><a href="#" className="li">Keep Fun</a></span>
                </div>
                <nav className="nav">
                    <Link to="tech">技术</Link>
                    <Link to="movie">电影</Link>
                    <Link to="essay">随笔</Link>
                    <Link to="me">我</Link>
                </nav>
                <div className="more_icon">三</div>
            </div>

        )
    }
}