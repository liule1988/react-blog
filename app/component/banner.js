/**
 * Created by leliu5 on 2016/12/8.
 */
import React from 'react';
import '../styles/banner.css'
var welcomebg=['app/images/pic1.png', 'app/images/pic2.jpg','app/images/pic3.jpg',
            'app/images/pic4.jpg','app/images/pic5.jpg', 'app/images/pic6.jpg',
        'app/images/pic7.png','app/images/pic8.png','app/images/pic9.png',
    'app/images/pic10.png',];
export default class Banner extends React.Component{
        constructor(props){
            super(props);
            this.state={
                welcomeBg:welcomebg
            };
        }

        render(){
            var i =Math.round(Math.random()*10);
            var bgUrl = this.state.welcomeBg[i];
            console.log(bgUrl);
            return(
                <div>
                    <div style={{backgroundImage:'url('+bgUrl+')'}} className="welcome">
                        <div className="container">
                            <div className="wel_title"><span>{this.props.title}</span></div>
                            <div className="wel_contact">
                                <a><span>QQ</span></a>
                                <a><span>微信</span></a>
                                <a><span>微博</span></a>
                            </div>
                        </div>
                    </div>
                </div>

            )
        }
}
