/**
 * Created by Administrator on 2016/12/14 0014.
 */
import React from 'react';
import ReactMarkdown from  'react-markdown'
import '../styles/articlelist.css'
import Article from './article'
export default class Cell extends React.Component {
    constructor(props){
        super(props);
        this.state={
            showArticle:false,
            content:''
        };
        this.handleClick=this.handleClick.bind(this);
        this.spliceJson=this.spliceJson.bind(this);
    }
    handleClick(kk){
        this.setState({
            showArticle:true,
            content:kk
        });

    }
    spliceJson(items,label) {
        let list = items,
            articles = [];

        for (let i = 0, listLen = list.length; i < listLen; i++) {
            let labels = list[i].labels[0].name;
            console.log(labels);
            if (labels==label)
                articles.push(list[i]);
            }


        return articles;
    }
    render(){
        console.log(this.spliceJson(this.props.data));
        var items=this.spliceJson(this.props.data,this.props.label);
       return(
            <div>
                {this.state.showArticle?<Article data={this.state.content}/>:items.map((item, index)=>(
                    <div key={index} className="listWraper" onClick={(props)=>this.handleClick(item)}>

                            <div className="art_title_box">
                                <span className="art_title">{item.title}</span>
                            </div>

                        <div className="pubulish_time_box" >
                            <span>{item.created_at.substr(0, 10)}</span>
                        </div>
                        {/*<div className="art_img">*/}
                            {/*<img src={item.title} style={{width: 35, height: 35}}/>*/}
                        {/*</div>*/}

                    </div>
                ))} {}
            </div>

        )
    }
}
