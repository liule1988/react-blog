import React from 'react';
import '../styles/header.css'
import { Link } from 'react-router';
export  default class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            show:false
        }
        this.showNav=this.showNav.bind(this);
    }
    showNav(){
        this.setState(
            {
                show:!this.state.show
            }
        )

    }

    render(){
        return(
            <div className="header_container">
                <div className="logo">
                    <span><a href="#" className="li">Keep Fun</a></span>
                </div>
                <nav className="nav">


                </nav>
                {this.state.show?<nav className="nav2">
                    <li className="li" > <Link to="tech">技术</Link></li>
                    <li className="li" >
                        <Link to="movie">电影</Link>
                    </li>
                    <li className="li">
                        <Link to="essay">随笔</Link>
                    </li>
                    <li className="li">
                        <Link to="me">我</Link>
                    </li>
                </nav>:null}

                <div className="more_icon" onClick={this.showNav}>三</div>
            </div>

        )
    }
}