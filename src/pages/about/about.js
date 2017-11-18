import React, {Component} from 'react';
import {
    Links, Route,
    Switch
} from 'react-router-dom';

import './about.scss'
class About extends Component {
    constructor() {
        super()
    }

    render() {
        return (<div className="about-page">
            <div className="page-phone">
                <iframe src="http://me18.cn/react-blog"></iframe>
            </div>
            <div className="page-mine">
                <div className="page-mine-item">
                    <h3>基本介绍</h3>
                    <p>本人2016年毕业于西安交通大学，现在北京一家互联网公司做前端开发</p>
                </div>
                <div className="page-mine-item">
                    <h3>工作经历</h3>
                    <p>本人2016年毕业于西安交通大学，现在北京一家互联网公司做前端开发</p>
                </div>
                <div className="page-mine-item">
                    <h3>兴趣爱好</h3>
                    <p>看电影，听音乐，游戏</p>
                </div>
            </div>
        </div>)
    }
}
export default About