import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './listItem.scss'
import ReactMarkdown from 'react-markdown'
import TimeBox from '../Calendar/calendar'
class A_ListItem extends Component {
    constructor() {
        super();
        document.body.addEventListener('touchstart', function(){ });
        console.log(this.props)
    }

    getImgInMd = (md) => {
        let mdText = md;
        let rules = /<[img|href][^>]*src\s*=\s*('|)?([^'>]*)\1([^>])*>/ig;
        let arr = mdText.match(rules);
        if (arr) {
            return arr[0]
        }
        return null
    };

    getFirstPartOfMd=(md) => {
        let mdText = md;
        let rs=md.match(/<p>*/g);
        console.log(rs)
    }

    render() {
        let item_body_img = this.getImgInMd(this.props.data.body_html);
        return (

            <div className="item">

                <div className="item-head">
                    <h3 className="item-title" >
                        <Link to={'/articles/detail/'+this.props.data.number}>
                            {this.props.data.title}
                        </Link>
                    </h3>
                    <p className="item-info">
                        <span>作者：封寒旭</span>
                        <span>
                            栏目：
                            <a href="#" >{this.props.data.labels[0].name}</a>
                        </span>
                    </p>
                    <div className="item-time">
                        <TimeBox data={this.props.data.created_at}/>
                    </div>
                </div>
                <section className="item-body le-clearfix">
                    {item_body_img &&
                    <figure className="item-body-thumb img-flicker">
                        <a href="#">
                            <ReactMarkdown source={item_body_img}/>
                        </a>
                    </figure>
                    }
                    <ReactMarkdown className="markdown-body article-content le-clearfix" source={this.props.data.body_html.substring(0,100)}/>
                    ...
                </section>

                <div className="item-footer le-clearfix">
                    <div className="item-tags le-fl">
                        标签：{this.props.data.labels.map(label => (<a className="item-tag" href="#" key={label.id}>{label.name}</a>))}
                    </div>
                    <div className="item-comment le-fr">
                        评论：{this.props.data.comments}
                    </div>
                </div>
            </div>
        )
    }
}

export default A_ListItem