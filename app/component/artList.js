/**
 * Created by leliu5 on 2016/12/8.
 */
import React from 'react';
import data from '../data/text.json'
import ReactMarkdown from  'react-markdown'
import imgSrc from '../images/pic1.png'
import '../styles/articlelist.css'
import aa from 'raw-loader!../../test.md'
export default class ArticleList extends React.Component {
constructor(props){
    super(props);
    this.setState({
        source:''
    })
};



    render() {
        var items = data;
        console.log(aa);
        var bb=aa;
        var renderData = items.map(function (item, index) {
            return (
                <div key={index} className="listWraper">
                    <div className="art_title">
                        <div className="art_title_box">
                            <a href="#" className="art_title"><span className="art_title">{item.title}</span></a>
                        </div>
                        <div className="pubulish_time_box" style={{flex: 2}}>
                            <span>{item.time}</span>
                        </div>
                    </div>
                    <div className="art_img">
                        <img src={item.imgUrl} style={{width: 35, height: 35}}/>
                    </div>


                </div>
            )
        });
        return (
                <div className="art_list_box">
                    <div className="art_nav_tag">
                        近期文章
                    </div>
                    {renderData}
                    {/*{detail}*/}
                </div>

        )
    }
}

const styles={

}
