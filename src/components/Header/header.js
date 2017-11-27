import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom'
import './header.scss'
import cs from 'classnames'
class LeHeader extends Component {
    constructor() {
        super()
        this.state = {
            styles: {
                className: 'app-header'
            }
        }
    }

    toggleChange = () => {
        this.setState((prevState) => {
                let curClass = prevState.styles.className;
                curClass = curClass === 'app-header' ? 'app-header app-nav-opened' : 'app-header';
                return {
                    styles: {
                        className: curClass
                    }
                }
            }
        )
    };

    closeNav = () => {
        this.setState({
            styles: {
                className: 'app-header'
            }
        })
    };

    render() {
        return (
            <header className={this.state.styles.className}>
                <div className="app-header-body">
                    <a href="/" className="app-logo">
                        My blog
                    </a>
                    <nav className="app-nav">
                        <ul>
                            <li>
                                <NavLink to="/" exact onClick={this.closeNav}>首页</NavLink>
                            </li>
                            <li>
                                <NavLink to="/articles" onClick={this.closeNav}>文章</NavLink>
                            </li>
                            <li>
                                <a href="http://liule.top/me" >关于</a>
                            </li>
                        </ul>
                    </nav>

                    <a className="app-nav-toggle" onClick={this.toggleChange}><i></i> <i></i> <i></i></a>
                </div>
            </header>
        )
    }
}

export default LeHeader