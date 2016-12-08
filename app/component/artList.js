/**
 * Created by leliu5 on 2016/12/8.
 */
import React from 'react';
import data from '../data/text.json'
import imgSrc from '../images/pic1.png'
import '../styles/articlelist.css'
export default class ArticleList extends React.Component{


render(){
    var items = data;
    var renderData = items.map(function (item,index) {
        return(
            <div key={index} className="listWraper">
                <div className="art_title">
                    <a href="#"><h2 className="art_title">{item.title}</h2></a>
                </div>
                <div className="art_img">
                    <img src={item.imgUrl} style={{width:50,height:50}}/>
                </div>
            </div>
        )
    });
    return(
        <div>{renderData}</div>
    )
}
}