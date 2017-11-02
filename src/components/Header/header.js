import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom'
import './header.scss'
class LeHeader extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <header className="app-header">
                <div className="app-header-body">
                    <a className="app-logo">
                        My blog
                    </a>
                    <nav className="app-nav">
                        <ul>
                            <li>
                                <NavLink to="/" exact>首页</NavLink>
                            </li>
                            <li>
                                <NavLink to="/articles">文章</NavLink>
                            </li>
                            <li>
                                <NavLink to="/me">关于</NavLink>
                            </li>
                        </ul>
                    </nav>

                </div>
            </header>
        )
    }
}

export default LeHeader