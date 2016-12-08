/**
 * Created by leliu5 on 2016/12/8.
 */
import React from 'react';
import data from '../data/text.json'
export default class ArticleList extends React.Component{


render(){
    var items = data;
    var renderData = items.map(function (item,index) {
        return(
            <div key={index}>{item.title}</div>
        )
    });
    return(
        <div>{renderData}</div>
    )
}
}