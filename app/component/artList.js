/**
 * Created by leliu5 on 2016/12/8.
 */
import React from 'react';
import data from '../data/text.json'
import ReactMarkdown from  'react-markdown'
import imgSrc from '../images/pic1.png'
import '../styles/articlelist.css'
import $ from  'jquery'
import Cell from './article_cell'
import '../styles/articlelist.css'
export default class ArticleList extends React.Component {
constructor(props){
    super(props);
    this.state={
        source:[],
        show:false
    };
    this.handleClick=this.handleClick.bind(this);
    this.backList=this.backList.bind(this);
}
componentDidMount(){
    var that =this;
    $.ajax({
        // url: "https://api.douban.com/v2/movie/in_theaters",
        url: "https://api.github.com/repos/liule1988/liule.github.io/issues",
        type: 'GET',
        dataType: 'JSON',//here
        success: function (data) {
            console.log(JSON.stringify(data))
        that.setState({
            source:data,
            show:true
        })
        }
    });
    // fetch("https://api.github.com/repos/liule1988/liule.github.io/issues").then(function(response) {
    //     return response.json();
    // }).then(function(json) {
    //     that.setState({
    //                 source:json,
    //                 show:true
    //             })
    // });
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


        // console.log(this.state.source)
        // var renderData = items.map((item, index)=>(
        // <div key={index} className="listWraper" onClick={this.handleClick}>
        //             <div className="art_title">
        //                 <div className="art_title_box">
        //                     <a href="#" className="art_title"><span className="art_title">{item.title}</span></a>
        //                 </div>
        //                 <div className="pubulish_time_box" >
        //                     <span>{item.time}</span>
        //                 </div>
        //             </div>
        //             <div className="art_img">
        //                 <img src={item.imgUrl} style={{width: 35, height: 35}}/>
        //             </div>
        //
        //
        //         </div>
        // ))
        return (
                <div className="art_list_box" >

                    <div className="art_nav_tag" onClick={this.handleClick} >
                        近期文章
                    </div>
                    {this.state.show?<Cell data={ this.state.source} label={this.props.type}/>:<div>Loading...</div>}
                    {/*{this.state.show?renderData:null}*/}
                    {/*{this.state.show?null:<div onClick={this.backList}>返回</div>}*/}
                    {/*/!*<ReactMarkdown source={this.state.source}/>*!/*/}
                    {/*{this.state.show?null:<div onClick={this.backList}>返回</div>}*/}
                </div>

        )
    }
}

const styles={

};
