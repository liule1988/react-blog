/**
 * Created by Administrator on 2016/12/14 0014.
 */
import React from 'react';
import ReactMarkdown from  'react-markdown'
import Article from './article'
export default class Cell extends React.Component {
    constructor(props){
        super(props);
        this.state={
            showArticle:false,
            content:''
        };
        this.handleClick=this.handleClick.bind(this);

    }
    handleClick(kk){
        this.setState({
            showArticle:true,
            content:kk
        });

    }

    render(){
        console.log(this.props.data);
        var items=this.props.data;
       return(
            <div>
                {this.state.showArticle?<Article data={this.state.content}/>:items.map((item, index)=>(
                    <div key={index} className="listWraper" onClick={(props)=>this.handleClick(item)}>

                            <div className="art_title_box">
                                <a href="#" className="art_title"><span className="art_title">{item.title}</span></a>
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
