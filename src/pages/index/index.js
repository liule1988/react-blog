/**
 * Created by Administrator on 2017/11/2.
 */
import React, {Component} from 'react';
import './index.scss'
import {Link} from 'react-router-dom'
class IndexPage extends Component{
    constructor(){
        super()
    }
    render(){
        return(
                <div className="page page-index">
                    <div className="index-banner background-fixed">
                        <div className="le-container">
                            <h1 className="app-name">KeepFun</h1>
                            <p className="app-slogan">有些故事还没讲完，那就算了吧</p>
                            <div className="index-btns">
                                <a href="http://www.baidu.com" target="_blank">GitHub</a>
                                <Link to="/articles">进入博客</Link>
                            </div>
                        </div>
                    </div>

                    <div className="index-pages">
                        <section className="index-section blog-info">
                            <h2 className="index-pages-title">Hello,React</h2>
                            <p className="index-pages-slogan">本博客采用 React.js 构建</p>
                        </section>
                        <section className="index-section blog-about">
                            <h2 className="index-pages-title">关于我</h2>
                            <p className="index-pages-slogan">非著名前端小学僧一枚</p>
                        </section>
                    </div>
                </div>
        )
    }
}

export default IndexPage
