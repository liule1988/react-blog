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
    this.state={
        source:'',
        show:true
    };
    this.handleClick=this.handleClick.bind(this);
    this.backList=this.backList.bind(this);
}
handleClick(){


    this.setState({
        source:aa,
        show:false
    });
}
backList(){
    this.setState({
        source:'',
        show:true
    });
}

    render() {
        var items = data;
        console.log(aa);
        var bb=aa;
        var renderData = items.map((item, index)=>(
        <div key={index} className="listWraper" onClick={this.handleClick}>
                    <div className="art_title">
                        <div className="art_title_box">
                            <a href="#" className="art_title"><span className="art_title">{item.title}</span></a>
                        </div>
                        <div className="pubulish_time_box" >
                            <span>{item.time}</span>
                        </div>
                    </div>
                    <div className="art_img">
                        <img src={item.imgUrl} style={{width: 35, height: 35}}/>
                    </div>


                </div>
        ))
        return (
                <div className="art_list_box" >
                    <div className="art_nav_tag" onClick={this.handleClick} >
                        近期文章
                    </div>
                    {this.state.show?renderData:null}
                    {this.state.show?null:<div onClick={this.backList}>返回</div>}
                    <ReactMarkdown source={this.state.source}/>
                    {this.state.show?null:<div onClick={this.backList}>返回</div>}
                </div>

        )
    }
}

const styles={

}
